import React, { useState } from 'react';
import { Shield, ChevronRight, ArrowLeft } from 'lucide-react';
import CriminalCases from './CriminalCases';
import RoleSelection from './RoleSelection';
import PracticeSession from './PracticeSession';

const LAW_TYPES = [
  {
    id: 'criminal',
    name: 'Criminal Law',
    description: 'Deals with crimes and their punishments',
    icon: '⚖️'
  },
  {
    id: 'constitutional',
    name: 'Constitutional Law',
    description: 'Fundamental rights and government structure',
    icon: '📜'
  },
  {
    id: 'civil',
    name: 'Civil Law',
    description: 'Private rights and remedies',
    icon: '🤝'
  },
  {
    id: 'corporate',
    name: 'Corporate Law',
    description: 'Business organizations and commercial transactions',
    icon: '🏢'
  },
  {
    id: 'family',
    name: 'Family Law',
    description: 'Marriage, divorce, and child custody',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 'property',
    name: 'Property Law',
    description: 'Real estate and personal property rights',
    icon: '🏠'
  }
];

export default function NewSection({ selectedLawType, setSelectedLawType, onBeginPracticeSession }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCases, setShowCases] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedPracticeMode, setSelectedPracticeMode] = useState(null);

  const handleLawTypeSelect = (lawType) => {
    setSelectedLawType(lawType);
    // Immediately show cases for criminal law
    if (lawType.id === 'criminal') {
      setShowCases(true);
    }
    // Reset other states
    setSelectedCase(null);
    setSelectedRole(null);
    setSelectedPracticeMode(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedLawType) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (selectedLawType.id === 'criminal') {
        setShowCases(true);
      } else {
        console.log('Law type saved successfully:', selectedLawType);
      }
    } catch (error) {
      console.error('Error submitting law type:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaseSelect = (case_) => {
    setSelectedCase(case_);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handlePracticeModeSelect = (mode) => {
    setSelectedPracticeMode(mode);
  };

  const handleBack = () => {
    // If we're in practice session, go back to role selection
    if (selectedRole && selectedPracticeMode) {
      setSelectedPracticeMode(null);
    }
    // If we're in role selection, go back to case selection
    else if (selectedRole) {
      setSelectedRole(null);
    }
    // If we're in case selection, go back to law type selection
    else if (selectedCase) {
      setSelectedCase(null);
      setShowCases(false);
    }
    // If we're in law type selection, reset everything
    else {
      setSelectedLawType(null);
      setShowCases(false);
      setSelectedCase(null);
      setSelectedRole(null);
      setSelectedPracticeMode(null);
    }
  };

  // Show practice session if role and practice mode are selected
  if (selectedCase && selectedRole && selectedPracticeMode) {
    return (
      <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-gray-50 to-white">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <PracticeSession
              selectedCase={selectedCase}
              selectedRole={selectedRole}
              selectedPracticeMode={selectedPracticeMode}
              onBack={handleBack}
              onBeginPracticeSession={onBeginPracticeSession}
            />
          </div>
        </div>
      </div>
    );
  }

  // Show role selection if case is selected
  if (selectedCase && !selectedRole) {
    return (
      <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-gray-50 to-white">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <RoleSelection
              selectedCase={selectedCase}
              onRoleSelect={handleRoleSelect}
              onPracticeModeSelect={handlePracticeModeSelect}
              onBack={handleBack}
            />
          </div>
        </div>
      </div>
    );
  }

  // Show criminal cases view
  if (showCases && selectedLawType?.id === 'criminal' && !selectedCase) {
    return (
      <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-gray-50 to-white">
        <div className="flex-none p-6 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Law Types
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <CriminalCases onCaseSelect={handleCaseSelect} />
          </div>
        </div>
      </div>
    );
  }

  // Show law type selection view
  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 shadow-lg shadow-cyan-500/20 mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Legal Intelligence
          </h1>
          <p className="text-gray-600">
            Select the type of law you want to discuss
          </p>
        </div>

        {/* Law Type Selection Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LAW_TYPES.map((lawType) => (
              <div
                key={lawType.id}
                onClick={() => handleLawTypeSelect(lawType)}
                className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                  selectedLawType?.id === lawType.id
                    ? 'border-cyan-500 bg-cyan-50'
                    : 'border-gray-200 hover:border-cyan-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{lawType.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {lawType.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {lawType.description}
                    </p>
                  </div>
                  {selectedLawType?.id === lawType.id && (
                    <div className="absolute top-3 right-3">
                      <div className="h-5 w-5 rounded-full bg-cyan-500 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={!selectedLawType || isSubmitting}
              className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
                selectedLawType && !isSubmitting
                  ? 'bg-cyan-600 hover:bg-cyan-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{lawType.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {lawType.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {lawType.description}
                  </p>
                </div>
                {selectedLawType?.id === lawType.id && (
                  <div className="absolute top-3 right-3">
                    <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Law Type Display */}
        {selectedLawType && (
          <div className="mt-8 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
            <p className="text-sm text-cyan-800">
              Selected: <span className="font-semibold">{selectedLawType.name}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 