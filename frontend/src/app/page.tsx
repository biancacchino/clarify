'use client';

import { Header } from '@/components/Header';
import { ProgressBar } from '@/components/ProgressBar';
import { FormSection } from '@/components/FormSection';
import { ontarioWorksForm } from '@/data/ontarioWorksForm';
import { useFormStore } from '@/store/formStore';

export default function Home() {
  const setActiveQuestion = useFormStore((state) => state.setActiveQuestion);
  const activeQuestionId = useFormStore((state) => state.activeQuestionId);

  const handleHelpClick = (questionId: string) => {
    setActiveQuestion(questionId);
    // Chat panel will be added in 02-03
    console.log('Help requested for question:', questionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ProgressBar sections={ontarioWorksForm.sections} />

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{ontarioWorksForm.name}</h2>
          <p className="text-gray-600 mt-1">{ontarioWorksForm.description}</p>
        </div>

        {ontarioWorksForm.sections.map((section, index) => (
          <FormSection
            key={section.id}
            section={section}
            sectionNumber={index + 1}
            onHelpClick={handleHelpClick}
          />
        ))}

        {/* Placeholder for chat panel - will be positioned here in 02-03 */}
        {activeQuestionId && (
          <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <p className="text-sm text-gray-600">Chat panel will appear here</p>
            <p className="text-xs text-gray-400 mt-1">Active: {activeQuestionId}</p>
            <button
              onClick={() => setActiveQuestion(null)}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              Close
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
