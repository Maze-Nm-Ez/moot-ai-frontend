import React from 'react';
import { mootCourtRoyalParkScript } from '../../data/mootCourtRoyalPark';
import MootCourtChat from './MootCourtChat';

export default function MootCourtChatSection() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8 px-2">
      <div className="w-full max-w-2xl">
        <MootCourtChat script={mootCourtRoyalParkScript} />
      </div>
    </div>
  );
} 