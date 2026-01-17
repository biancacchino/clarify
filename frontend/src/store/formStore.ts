import { create } from 'zustand';
import { FormState, ChatMessage } from '@/types';

const initialState = {
  answers: {},
  activeQuestionId: null,
  conversations: {},
  sessionId: null,
  completedSections: [],
};

export const useFormStore = create<FormState>((set) => ({
  ...initialState,

  setAnswer: (fieldId: string, value: string | number | boolean) =>
    set((state) => ({
      answers: { ...state.answers, [fieldId]: value },
    })),

  setActiveQuestion: (id: string | null) =>
    set({ activeQuestionId: id }),

  addMessage: (questionId: string, message: ChatMessage) =>
    set((state) => ({
      conversations: {
        ...state.conversations,
        [questionId]: [...(state.conversations[questionId] || []), message],
      },
    })),

  setSessionId: (id: string) =>
    set({ sessionId: id }),

  markSectionComplete: (sectionId: string) =>
    set((state) => ({
      completedSections: state.completedSections.includes(sectionId)
        ? state.completedSections
        : [...state.completedSections, sectionId],
    })),

  reset: () => set(initialState),
}));
