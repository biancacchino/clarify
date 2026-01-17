export interface ExplainRequest {
  questionId: string;
  originalText: string;
  fieldType: string;
  required: boolean;
  context?: string;
  commonConfusions?: string;
  userContext?: string;
}

export interface ExplainResponse {
  explanation: string;
  questionId: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  questionId: string;
  originalText: string;
  fieldType: string;
  context?: string;
  conversationHistory: ChatMessage[];
  userMessage: string;
  currentAnswers?: Record<string, string>;
}

export interface ChatResponse {
  message: string;
  suggestedAnswer?: string;
  confidence?: 'low' | 'medium' | 'high';
}

export interface QuestionData {
  id: string;
  originalText: string;
  fieldType: string;
  required: boolean;
  context?: string;
  commonConfusions?: string;
}
