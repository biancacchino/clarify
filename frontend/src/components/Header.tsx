import { FileText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">FormBridge</h1>
          <p className="text-sm text-gray-500">Ontario Works Application Assistant</p>
        </div>
      </div>
    </header>
  );
}
