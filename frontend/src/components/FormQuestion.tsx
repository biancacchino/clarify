'use client';

import { useFormStore } from '@/store/formStore';
import { FormQuestion as FormQuestionType } from '@/types';
import { HelpCircle } from 'lucide-react';

interface FormQuestionProps {
  question: FormQuestionType;
  onHelpClick: () => void;
}

export function FormQuestion({ question, onHelpClick }: FormQuestionProps) {
  const answers = useFormStore((state) => state.answers);
  const setAnswer = useFormStore((state) => state.setAnswer);

  const value = answers[question.fieldId] ?? '';

  const handleChange = (newValue: string | number | boolean) => {
    setAnswer(question.fieldId, newValue);
  };

  const renderInput = () => {
    switch (question.fieldType) {
      case 'select':
        return (
          <select
            value={value as string}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="">Select an option...</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'textarea':
        return (
          <textarea
            value={value as string}
            onChange={(e) => handleChange(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Enter your response..."
          />
        );

      case 'number':
        return (
          <input
            type="number"
            value={value as string}
            onChange={(e) => handleChange(e.target.value ? Number(e.target.value) : '')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a number..."
            min={0}
          />
        );

      case 'checkbox':
        return (
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={Boolean(value)}
              onChange={(e) => handleChange(e.target.checked)}
              className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">{question.originalText}</span>
          </label>
        );

      case 'text':
      default:
        return (
          <input
            type="text"
            value={value as string}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your response..."
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-4">
        {question.fieldType !== 'checkbox' && (
          <label className="block text-gray-800 font-medium">
            {question.originalText}
            {question.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <button
          onClick={onHelpClick}
          className="flex-shrink-0 p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
          title="Get help with this question"
          aria-label="Get help with this question"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>

      {renderInput()}
    </div>
  );
}
