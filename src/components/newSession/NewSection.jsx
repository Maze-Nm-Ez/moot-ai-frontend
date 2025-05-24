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

export default function NewSection({ selectedLawType, setSelectedLawType }) {
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
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-3 shadow-lg shadow-blue-500/20 mb-4">
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
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
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

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={!selectedLawType || isSubmitting}
              className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
                selectedLawType && !isSubmitting
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Start New Session'
              )}
            </button>
          </div>
        </form>

        {/* Selected Law Type Display */}
        {selectedLawType && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-800">
              Selected: <span className="font-semibold">{selectedLawType.name}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 