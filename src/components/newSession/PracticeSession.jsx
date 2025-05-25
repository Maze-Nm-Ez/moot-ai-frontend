import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, ExternalLink, BookOpen, Scale } from 'lucide-react';
import { mootCourtRoyalParkScript } from '../../data/mootCourtRoyalPark';
import MootCourtChat from './MootCourtChat';

const CASE_RESOURCES = {
  'royal-park-murder': [
    {
      id: 'vlex',
      title: 'vLex Case Report',
      description: 'Detailed case report from vLex including judgment and legal analysis',
      url: 'https://sri-lanka.vlex.com/vid/1-don-shamantha-jude-954459456',
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 'srilankabrief',
      title: 'Supreme Court Judgment',
      description: 'Full text of the Supreme Court judgment in FR 446/19',
      url: 'https://srilankabrief.org/wp-content/uploads/2024/06/sc_fr_446_19-re-Jude-Samantha.pdf',
      icon: <Scale className="h-5 w-5" />
    },
    {
      id: 'studocu',
      title: 'Case Analysis',
      description: 'Academic analysis of CA 303/2006 from University of Colombo',
      url: 'https://www.studocu.com/row/document/university-of-colombo/constitutional-law/ca-303-2006-supreme-court-case/117410942',
      icon: <BookOpen className="h-5 w-5" />
    }
  ]
};

export default function PracticeSession({ selectedCase, selectedRole, selectedPracticeMode, onBack, onBeginPracticeSession }) {
  const [started, setStarted] = useState(false);
  const resources = CASE_RESOURCES[selectedCase.id] || [];

  // Debug log for script
  useEffect(() => {
    if (started) {
      console.log('Practice Session Started:', {
        script: mootCourtRoyalParkScript,
        role: selectedRole,
        mode: selectedPracticeMode
      });
    }
  }, [started, selectedRole, selectedPracticeMode]);

  if (started) {
    return (
      <div className="flex flex-col h-full">
        {/* Case Info Header */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 shadow">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-2xl font-bold text-blue-900 mb-2">
                {selectedCase.title}
              </div>
              <div className="text-base text-gray-800">
                <div><b>Case:</b> Attorney General v. Jude Shramantha Jayamaha</div>
                <div><b>Court:</b> Moot Court (Modeled after Court of Appeal)</div>
                <div><b>Your Role:</b> {selectedRole.name}</div>
                <div><b>Mode:</b> {selectedPracticeMode.name}</div>
              </div>
            </div>
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
          </div>
        </div>

        {/* Chat Component */}
        <div className="flex-1 min-h-0">
          <MootCourtChat script={mootCourtRoyalParkScript} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with back button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Role Selection
        </button>
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-900">{selectedCase.title}</span>
        </div>
      </div>

      {/* Session Info */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-blue-800 mb-1">Case</h3>
            <p className="text-blue-900">{selectedCase.title}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-blue-800 mb-1">Your Role</h3>
            <p className="text-blue-900">{selectedRole.name}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-blue-800 mb-1">Practice Mode</h3>
            <p className="text-blue-900">{selectedPracticeMode.name}</p>
          </div>
        </div>
      </div>

      {/* Practice Session Content */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Practice Session</h2>
          <p className="text-gray-600">Review the case resources and begin your practice</p>
        </div>

        {/* Case Resources */}
        <div className="grid gap-4">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Practice Interface */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mt-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Begin</h3>
            <p className="text-gray-600">
              {selectedPracticeMode.id === 'guided' 
                ? 'You will receive step-by-step guidance throughout the practice session.'
                : 'You can practice freely and test your skills in this case.'}
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => setStarted(true)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Begin Practice Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 