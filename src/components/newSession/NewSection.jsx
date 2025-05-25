import React, { useState } from 'react';
import { Shield, ChevronRight, ArrowLeft, Search } from 'lucide-react';
import CriminalCases from './CriminalCases';
import RoleSelection from './RoleSelection';
import PracticeSession from './PracticeSession';

const LAW_TYPES = [
  {
    id: 'criminal',
    name: 'Criminal Law',
    description: 'Deals with crimes and their punishments',
    icon: '⚖️',
  },
  {
    id: 'constitutional',
    name: 'Constitutional Law',
    description: 'Fundamental rights and government structure',
    icon: '📜',
  },
  {
    id: 'civil',
    name: 'Civil Law',
    description: 'Private rights and remedies',
    icon: '🤝',
  },
  {
    id: 'corporate',
    name: 'Corporate Law',
    description: 'Business organizations and commercial transactions',
    icon: '🏢',
  },
  {
    id: 'family',
    name: 'Family Law',
    description: 'Marriage, divorce, and child custody',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    id: 'property',
    name: 'Property Law',
    description: 'Real estate and personal property rights',
    icon: '🏠',
  },
];

export default function NewSection({ selectedLawType, setSelectedLawType, onBeginPracticeSession, setActiveTab }) {
  const [showCases, setShowCases] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedPracticeMode, setSelectedPracticeMode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLawTypeSelect = (lawType) => {
    setSelectedLawType(lawType);
    setShowCases(true);
    setSelectedCase(null);
    setSelectedRole(null);
    setSelectedPracticeMode(null);
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
    if (selectedRole && selectedPracticeMode) {
      setSelectedPracticeMode(null);
    } else if (selectedRole) {
      setSelectedRole(null);
    } else if (selectedCase) {
      setSelectedCase(null);
      setShowCases(false);
    } else {
      setSelectedLawType(null);
      setShowCases(false);
      setSelectedCase(null);
      setSelectedRole(null);
      setSelectedPracticeMode(null);
      setActiveTab('chat'); // Navigate back to main chat view
    }
  };

  // Filter law types based on search query
  const filteredLawTypes = LAW_TYPES.filter(
    (lawType) =>
      lawType.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawType.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show practice session
  if (selectedCase && selectedRole && selectedPracticeMode) {
    return (
      <div className="flex-1 flex flex-col h-full bg-white">
        <div className="flex-none p-6 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Role Selection
            </button>
          </div>
        </div>
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

  // Show role selection
  if (selectedCase && !selectedRole) {
    return (
      <div className="flex-1 flex flex-col h-full bg-white">
        <div className="flex-none p-6 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Cases
            </button>
          </div>
        </div>
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

  // Show cases view
  if (showCases && selectedLawType?.id === 'criminal' && !selectedCase) {
    return (
      <div className="flex-1 flex flex-col h-full bg-white">
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {selectedLawType.name} Cases
            </h2>
            <CriminalCases onCaseSelect={handleCaseSelect} />
          </div>
        </div>
      </div>
    );
  }

  // Show law type selection view
  return (
    <div className="flex-1 p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 shadow-lg shadow-cyan-500/20 mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Moot AI Mooting Practice
          </h1>
          <p className="text-gray-600">
            Select a law type to start your mooting practice session
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search law types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            />
          </div>
        </div>

        {/* Law Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLawTypes.length > 0 ? (
            filteredLawTypes.map((lawType) => (
              <div
                key={lawType.id}
                onClick={() => handleLawTypeSelect(lawType)}
                className={`cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-cyan-50 hover:border-cyan-500 transition-all shadow-sm ${
                  selectedLawType?.id === lawType.id ? 'border-cyan-500 bg-cyan-50' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{lawType.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {lawType.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {lawType.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-cyan-500 mt-1" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No law types match your search.</p>
            </div>
          )}
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