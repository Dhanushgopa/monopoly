import React from 'react';
import { Player } from '../types/game';
import { gameTokens } from '../data/tokens';

interface PlayerPanelProps {
  players: Player[];
  currentPlayer: number;
  onRollDice: () => void;
  diceValues: [number, number];
  canRoll: boolean;
}

const PlayerPanel: React.FC<PlayerPanelProps> = ({ 
  players, 
  currentPlayer, 
  onRollDice, 
  diceValues, 
  canRoll 
}) => {
  const currentPlayerData = players[currentPlayer];
  const token = gameTokens.find(t => t.id === currentPlayerData?.token);

  return (
    <div className="vintage-card rounded-2xl p-4 lg:p-6">
      <div className="mb-6">
        <h2 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: 'var(--vintage-dark)' }}>Game Status</h2>
        
        {/* Current Player */}
        <div className="mb-4 p-3 lg:p-4 rounded-xl" style={{ 
          background: 'linear-gradient(135deg, var(--vintage-orange), var(--vintage-yellow))',
          opacity: 0.9
        }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-xl lg:text-2xl">{token?.emoji}</div>
            <div>
              <h3 className="font-bold text-base lg:text-lg" style={{ color: 'var(--vintage-dark)' }}>{currentPlayerData?.name}</h3>
              <p className="text-sm lg:text-base" style={{ color: 'var(--vintage-brown)' }}>Current Player</p>
            </div>
          </div>
          <div className="text-lg lg:text-xl font-bold" style={{ color: 'var(--vintage-green)' }}>
            ₹{currentPlayerData?.money.toLocaleString('en-IN')}
          </div>
        </div>

        {/* Dice */}
        <div className="mb-6">
          <div className="flex justify-center gap-3 lg:gap-4 mb-4">
            {diceValues.map((value, index) => (
              <div
                key={index}
                className="dice w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl font-bold transform hover:scale-105 transition-transform"
                style={{ 
                  background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                  color: 'var(--vintage-red)',
                  border: '2px solid var(--vintage-border)'
                }}
              >
                {value}
              </div>
            ))}
          </div>
          
          <button
            onClick={onRollDice}
            disabled={!canRoll}
            className={`vintage-button w-full py-2 lg:py-3 px-4 lg:px-6 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 ${
              canRoll
                ? 'cursor-pointer'
                : 'opacity-50 cursor-not-allowed'
            }`}
            style={{ 
              color: canRoll ? 'var(--vintage-dark)' : 'var(--vintage-brown)',
              background: canRoll ? undefined : 'var(--vintage-cream)'
            }}
          >
            {canRoll ? '🎲 Roll Dice' : 'Wait Your Turn'}
          </button>
        </div>
      </div>

      {/* All Players */}
      <div>
        <h3 className="text-base lg:text-lg font-bold mb-3" style={{ color: 'var(--vintage-dark)' }}>All Players</h3>
        <div className="space-y-3">
          {players.map((player, index) => {
            const playerToken = gameTokens.find(t => t.id === player.token);
            const isActive = index === currentPlayer;
            
            return (
              <div
                key={player.id}
                className={`p-2 lg:p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'shadow-md'
                    : ''
                }`}
                style={{
                  background: isActive ? 'var(--vintage-yellow)' : 'var(--vintage-cream)',
                  border: `2px solid ${isActive ? 'var(--vintage-orange)' : 'var(--vintage-border)'}`,
                  opacity: isActive ? 1 : 0.8
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-base lg:text-lg">{playerToken?.emoji}</div>
                    <div>
                      <div className="font-semibold text-sm lg:text-base" style={{ color: 'var(--vintage-dark)' }}>
                        {player.name}
                      </div>
                      <div className="text-xs lg:text-sm" style={{ color: 'var(--vintage-brown)' }}>
                        Properties: {player.properties.length}
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-sm lg:text-base" style={{ color: 'var(--vintage-green)' }}>
                    ₹{player.money.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayerPanel;