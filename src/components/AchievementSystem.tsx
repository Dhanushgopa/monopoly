import React, { useState, useEffect } from 'react';
import { Trophy, Star, Crown } from 'lucide-react';
import { Achievement, Player } from '../types/game';

interface AchievementSystemProps {
  players: Player[];
  gameState: any;
}

const AchievementSystem: React.FC<AchievementSystemProps> = ({ players, gameState }) => {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-property',
      name: 'Property Pioneer',
      description: 'Buy your first property',
      icon: '🏠',
      unlocked: false,
      rarity: 'common'
    },
    {
      id: 'business-maharaja',
      name: 'Business Maharaja',
      description: 'Own 5 properties',
      icon: '👑',
      unlocked: false,
      rarity: 'rare'
    },
    {
      id: 'bollywood-tycoon',
      name: 'Bollywood Tycoon',
      description: 'Own Film City Studios',
      icon: '🎬',
      unlocked: false,
      rarity: 'rare'
    },
    {
      id: 'tea-master',
      name: 'Tea Master',
      description: 'Own Darjeeling Tea Plantation',
      icon: '🍵',
      unlocked: false,
      rarity: 'common'
    },
    {
      id: 'crorepati',
      name: 'Crorepati',
      description: 'Have ₹10,00,000 in cash',
      icon: '💰',
      unlocked: false,
      rarity: 'legendary'
    }
  ]);

  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    checkAchievements();
  }, [players]);

  const checkAchievements = () => {
    const currentPlayer = players[gameState.currentPlayer];
    if (!currentPlayer) return;

    const newUnlocked: Achievement[] = [];

    // Check first property
    if (currentPlayer.properties.length >= 1 && !achievements.find(a => a.id === 'first-property')?.unlocked) {
      const achievement = achievements.find(a => a.id === 'first-property')!;
      achievement.unlocked = true;
      newUnlocked.push(achievement);
    }

    // Check business maharaja
    if (currentPlayer.properties.length >= 5 && !achievements.find(a => a.id === 'business-maharaja')?.unlocked) {
      const achievement = achievements.find(a => a.id === 'business-maharaja')!;
      achievement.unlocked = true;
      newUnlocked.push(achievement);
    }

    // Check crorepati
    if (currentPlayer.money >= 1000000 && !achievements.find(a => a.id === 'crorepati')?.unlocked) {
      const achievement = achievements.find(a => a.id === 'crorepati')!;
      achievement.unlocked = true;
      newUnlocked.push(achievement);
    }

    if (newUnlocked.length > 0) {
      setNewAchievement(newUnlocked[0]);
      setTimeout(() => setNewAchievement(null), 3000);
      setAchievements([...achievements]);
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'rare': return 'from-blue-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-orange-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'common': return <Star className="w-4 h-4" />;
      case 'rare': return <Trophy className="w-4 h-4" />;
      case 'legendary': return <Crown className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Achievement Notification */}
      {newAchievement && (
        <div className="fixed top-20 right-4 z-50 animate-bounce">
          <div className={`bg-gradient-to-r ${getRarityColor(newAchievement.rarity)} text-white p-4 rounded-xl shadow-2xl max-w-sm`}>
            <div className="flex items-center gap-3">
              <div className="text-2xl">{newAchievement.icon}</div>
              <div>
                <div className="flex items-center gap-2">
                  {getRarityIcon(newAchievement.rarity)}
                  <span className="font-bold">Achievement Unlocked!</span>
                </div>
                <div className="font-semibold">{newAchievement.name}</div>
                <div className="text-sm opacity-90">{newAchievement.description}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievement Panel Toggle */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          title="View Achievements"
        >
          <Trophy className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default AchievementSystem;