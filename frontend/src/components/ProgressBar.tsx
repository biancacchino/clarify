'use client';

import { useFormStore } from '@/store/formStore';
import { FormSection } from '@/types';
import { CheckCircle, Circle } from 'lucide-react';

interface ProgressBarProps {
  sections: FormSection[];
}

export function ProgressBar({ sections }: ProgressBarProps) {
  const completedSections = useFormStore((state) => state.completedSections);

  const completedCount = completedSections.length;
  const totalCount = sections.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Progress: {completedCount} of {totalCount} sections complete
          </span>
          <span className="text-sm text-gray-500">{Math.round(progressPercent)}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex justify-between">
          {sections.map((section, index) => {
            const isComplete = completedSections.includes(section.id);
            return (
              <div key={section.id} className="flex flex-col items-center">
                {isComplete ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300" />
                )}
                <span className={`text-xs mt-1 ${isComplete ? 'text-green-600' : 'text-gray-400'}`}>
                  {index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
