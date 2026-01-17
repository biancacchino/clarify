'use client';

import { Header } from '@/components/Header';
import { ProgressBar } from '@/components/ProgressBar';
import { FormSection } from '@/components/FormSection';
import { ChatPanel } from '@/components/ChatPanel';
import { ontarioWorksForm } from '@/data/ontarioWorksForm';
import { useFormStore } from '@/store/formStore';

export default function Home() {
  const setActiveQuestion = useFormStore((state) => state.setActiveQuestion);
  const activeQuestionId = useFormStore((state) => state.activeQuestionId);

  const handleHelpClick = (questionId: string) => {
    setActiveQuestion(questionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ProgressBar sections={ontarioWorksForm.sections} />

      <main className={`max-w-4xl mx-auto px-6 py-8 transition-all duration-300 ${activeQuestionId ? 'md:mr-[420px]' : ''}`}>
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
      </main>

      <ChatPanel />
    </div>
  );
}
