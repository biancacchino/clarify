import { GoogleGenerativeAI } from '@google/generative-ai';
import { ExplainRequest, ChatRequest, ChatMessage } from '../types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const EXPLAIN_SYSTEM_PROMPT = `You are a helpful assistant that explains Ontario government form questions in simple, clear language.

Your job is to:
1. Explain what the question is really asking in plain English (6th grade reading level)
2. Give concrete examples relevant to Ontario residents
3. Clarify any confusing terms
4. Help them figure out what to enter

RULES:
- Use short sentences (under 15 words when possible)
- Avoid jargon and legal terms
- Give specific examples, not abstract explanations
- If unsure about Ontario Works rules, say "I'm not certain about this specific rule"
- Be warm and encouraging`;

const CHAT_SYSTEM_PROMPT = `You are helping someone fill out an Ontario Works (social assistance) application.

YOUR ROLE:
1. Answer follow-up questions about this specific field
2. Help them figure out what applies to their situation
3. When confident, suggest what to enter: "Based on what you told me, you should enter: [ANSWER]"
4. If unsure, ask ONE clarifying question

RULES:
- Keep responses SHORT (2-3 sentences max)
- You're not a lawyer - don't guarantee outcomes
- If unsure about Ontario Works rules, say so
- Be warm and encouraging`;

export async function explainQuestion(request: ExplainRequest): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `${EXPLAIN_SYSTEM_PROMPT}

QUESTION CONTEXT:
Original question: "${request.originalText}"
Field type: ${request.fieldType}
Required: ${request.required}

${request.context ? `Background information:\n${request.context}` : ''}

${request.commonConfusions ? `Common confusions:\n${request.commonConfusions}` : ''}

${request.userContext ? `User's situation:\n${request.userContext}` : ''}

Please explain this question in simple terms:`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export async function chatAboutQuestion(request: ChatRequest): Promise<{
  message: string;
  suggestedAnswer?: string;
  confidence?: 'low' | 'medium' | 'high';
}> {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  // Build conversation history string
  const historyText = request.conversationHistory
    .map((msg: ChatMessage) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
    .join('\n');

  const currentAnswersText = request.currentAnswers
    ? Object.entries(request.currentAnswers)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')
    : 'None provided';

  const prompt = `${CHAT_SYSTEM_PROMPT}

CURRENT QUESTION:
"${request.originalText}"
Field type: ${request.fieldType}

${request.context ? `CONTEXT:\n${request.context}` : ''}

USER'S OTHER ANSWERS:
${currentAnswersText}

CONVERSATION SO FAR:
${historyText}

User: ${request.userMessage}

Respond helpfully. If you can suggest an answer, format it as:
SUGGESTED_ANSWER: [your suggestion]
CONFIDENCE: [low/medium/high]

Otherwise just respond conversationally.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  // Parse response for suggested answer
  const suggestedMatch = text.match(/SUGGESTED_ANSWER:\s*(.+?)(?:\n|$)/i);
  const confidenceMatch = text.match(/CONFIDENCE:\s*(low|medium|high)/i);

  // Clean the message by removing the metadata lines
  let cleanMessage = text
    .replace(/SUGGESTED_ANSWER:\s*.+?(?:\n|$)/gi, '')
    .replace(/CONFIDENCE:\s*(low|medium|high)/gi, '')
    .trim();

  return {
    message: cleanMessage,
    suggestedAnswer: suggestedMatch ? suggestedMatch[1].trim() : undefined,
    confidence: confidenceMatch
      ? (confidenceMatch[1].toLowerCase() as 'low' | 'medium' | 'high')
      : undefined,
  };
}
