import React, { useState } from 'react';
import { ArrowLeft, Search, Trophy, Lock, Swords } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    id: 'basic_criminal',
    category: 'Badges',
    name: 'Basic Criminal Law Master',
    description: 'Completed 5 basic criminal law scenarios',
    icon: '🏆',
    earned: true,
    earnedDate: 'May 10, 2025',
  },
  {
    id: 'intermediate_unlock',
    category: 'Progression',
    name: 'Intermediate Scenarios Unlocked',
    description: 'Unlocked intermediate scenarios by mastering basic criminal law',
    icon: '🔓',
    earned: false,
    requirement: 'Complete 5 basic scenarios',
  },
  {
    id: 'duel_champion',
    category: 'Competition',
    name: 'Duel Mode Champion',
    description: 'Won 3 duel mode challenges',
    icon: '⚔️',
    earned: true,
    earnedDate: 'May 15, 2025',
  },
  {
    id: 'tournament_top',
    category: 'Competition',
    name: 'Top Advocate',
    description: 'Ranked in the top 10 in a tournament',
    icon: '🥇',
    earned: false,
    requirement: 'Reach top 10 in a tournament',
  },
];

const LEADERBOARD = [
  { rank: 1, name: 'Sarah Johnson', score: 1250, duelsWon: 10 },
  { rank: 2, name: 'Michael Chen', score: 1100, duelsWon: 8 },
  { rank: 3, name: 'Emily Davis', score: 950, duelsWon: 6 },
  { rank: 4, name: 'You', score: 800, duelsWon: 4 },
];

const USER_PROFILE = {
  name: 'Sarah Johnson, Esq.',
  xp: 800,
  duelsWon: 4,
  duelsLost: 2,
  tournamentsParticipated: 2,
};

export default function Achievements({ setActiveTab }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Filter achievements by search query and category
  const filteredAchievements = ACHIEVEMENTS.filter(
    (achievement) =>
      (filterCategory === 'All' || achievement.category === filterCategory) &&
      (achievement.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        achievement.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const categories = ['All', 'Badges', 'Progression', 'Competition'];

  return (
    <div className="flex-1 p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Achievements
              </h1>
              <p className="text-gray-600">
                View your badges, progression, and competition rankings
              </p>
            </div>
          </div>
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 shadow-lg shadow-cyan-500/20">
            <Trophy className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* User Stats */}
        <div className="mb-8 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {USER_PROFILE.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Experience Points</p>
              <p className="text-lg font-medium text-cyan-600">{USER_PROFILE.xp} XP</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Duel Mode Record</p>
              <p className="text-lg font-medium text-cyan-600">
                {USER_PROFILE.duelsWon}W - {USER_PROFILE.duelsLost}L
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tournaments</p>
              <p className="text-lg font-medium text-cyan-600">
                {USER_PROFILE.tournamentsParticipated} Participated
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredAchievements.length > 0 ? (
            filteredAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-lg border p-4 transition-all shadow-sm ${
                  achievement.earned
                    ? 'border-cyan-500 bg-cyan-50'
                    : 'border-gray-200 bg-white opacity-75'
                } hover:bg-cyan-100 hover:border-cyan-500 cursor-pointer`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">
                    {achievement.earned ? achievement.icon : <Lock className="h-8 w-8 text-gray-400" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    {achievement.earned ? (
                      <p className="text-xs text-cyan-600 mt-1">
                        Earned: {achievement.earnedDate}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-500 mt-1">
                        Requirement: {achievement.requirement}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No achievements match your search or filter.</p>
            </div>
          )}
        </div>

        {/* Leaderboard */}
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Leaderboard</h2>
          <div className="space-y-2">
            {LEADERBOARD.map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center p-3 rounded-md ${
                  entry.name === 'You' ? 'bg-cyan-50' : 'bg-white'
                } border border-gray-200`}
              >
                <span className="w-8 text-gray-900 font-medium">#{entry.rank}</span>
                <span className="flex-1 text-gray-900">{entry.name}</span>
                <span className="text-gray-600">{entry.score} XP</span>
                <span className="ml-4 text-gray-600">{entry.duelsWon} Wins</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}