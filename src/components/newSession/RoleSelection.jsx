import React, { useState, useEffect } from 'react';
import { ArrowLeft, Scale, Shield, User } from 'lucide-react';

const ROLES = [
  {
    id: 'prosecution',
    name: 'Prosecution',
    description: 'Advocate for the state by presenting evidence and arguments against the accused.',
    icon: <Shield className="h-6 w-6" />,
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'defense',
    name: 'Defense',
    description: 'Protect the rights of the accused and challenge the prosecution\'s case.',
    icon: <Scale className="h-6 w-6" />,
    color: 'from-cyan-500 to-cyan-600'
  }
];

const PRACTICE_MODES = [
  {
    id: 'guided',
    name: 'Guided Practice',
    description: 'Step-by-step guidance with hints and feedback',
    icon: <User className="h-6 w-6" />,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'free',
    name: 'Free Practice',
    description: 'Practice without guidance - test your skills',
    icon: <User className="h-6 w-6" />,
    color: 'from-purple-500 to-purple-600'
  }
];

export default function RoleSelection({ selectedCase, onRoleSelect, onPracticeModeSelect, onBack }) {
  const [localRole, setLocalRole] = useState(null);
  const [localMode, setLocalMode] = useState(null);

  // When both are selected, call parent and transition
  useEffect(() => {
    if (localRole && localMode) {
      onRoleSelect(localRole);
      onPracticeModeSelect(localMode);
    }
  }, [localRole, localMode, onRoleSelect, onPracticeModeSelect]);

  return (
    <div className="space-y-8">
      {/* Back button and case info */}
      <div className="flex items-center justify-end">
        <div className="text-sm text-gray-500">
          Selected Case: <span className="font-medium text-gray-900">{selectedCase.title}</span>
        </div>
      </div>

      {/* Role Selection */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Role</h2>
          <p className="text-gray-600">Choose which side you want to represent in this case</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ROLES.map((role) => (
            <div
              key={role.id}
              onClick={() => setLocalRole(role)}
              className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all hover:border-cyan-300 hover:bg-gray-50 ${localRole?.id === role.id ? 'border-cyan-500 bg-cyan-50' : 'border-gray-200'}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`rounded-full bg-gradient-to-br ${role.color} p-3 text-white`}>
                  {role.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{role.name}</h3>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Mode Selection */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Practice Mode</h2>
          <p className="text-gray-600">Choose how you want to practice this case</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRACTICE_MODES.map((mode) => (
            <div
              key={mode.id}
              onClick={() => setLocalMode(mode)}
              className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all hover:border-cyan-300 hover:bg-gray-50 ${localMode?.id === mode.id ? 'border-cyan-500 bg-cyan-50' : 'border-gray-200'}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`rounded-full bg-gradient-to-br ${mode.color} p-3 text-white`}>
                  {mode.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{mode.name}</h3>
                  <p className="text-sm text-gray-600">{mode.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 