import React, { useState } from 'react';
import { gameTokens, playerAvatars } from '../data/tokens';

interface GameSetupProps {
  onStartGame: (players: any[]) => void;
}

const GameSetup: React.FC<GameSetupProps> = ({ onStartGame }) => {
  const [playerCount, setPlayerCount] = useState(2);
  const [players, setPlayers] = useState([
    { name: 'Player 1', token: 'auto-rickshaw', avatar: 'saree' },
    { name: 'Player 2', token: 'tabla', avatar: 'kurta' }
  ]);

  const updatePlayerCount = (count: number) => {
    setPlayerCount(count);
    const newPlayers = Array.from({ length: count }, (_, index) => ({
      name: `Player ${index + 1}`,
      token: gameTokens[index % gameTokens.length].id,
      avatar: playerAvatars[index % playerAvatars.length].id
    }));
    setPlayers(newPlayers);
  };

  const updatePlayer = (index: number, field: string, value: string) => {
    const newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], [field]: value };
    setPlayers(newPlayers);
  };

  const startGame = () => {
    const gamePlayers = players.map((player, index) => ({
      id: `player-${index}`,
      name: player.name,
      avatar: player.avatar,
      color: playerAvatars.find(a => a.id === player.avatar)?.color || '#FF6B6B',
      money: 15000,
      position: 0,
      properties: [],
      isInJail: false,
      jailTurns: 0,
      token: player.token
    }));
    
    onStartGame(gamePlayers);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 cultural-pattern" style={{ backgroundColor: 'var(--vintage-cream)' }}>
      <div className="vintage-card rounded-3xl p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="monopoly-title text-6xl mb-4" style={{ color: 'var(--vintage-dark)' }}>
            MONOPOLY
          </h1>
          <h2 className="text-3xl font-semibold mb-4" style={{ color: 'var(--vintage-brown)' }}>
            Indian Edition
          </h2>
          <p style={{ color: 'var(--vintage-brown)', opacity: 0.8 }}>Premium Board Game Experience</p>
        </div>

        {/* Cultural decorations */}
        <div className="flex justify-center gap-8 text-4xl mb-8 opacity-20">
          <span>🕉️</span>
          <span>🪷</span>
          <span>🐘</span>
          <span>🦚</span>
          <span>🏏</span>
          <span>🛺</span>
        </div>

        {/* Player Count Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--vintage-dark)' }}>Number of Players</h3>
          <div className="flex gap-4 justify-center">
            {[2, 3, 4, 5, 6].map(count => (
              <button
                key={count}
                onClick={() => updatePlayerCount(count)}
                className={`vintage-button px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  playerCount === count
                    ? 'transform scale-105'
                    : ''
                }`}
                style={{
                  color: playerCount === count ? 'var(--vintage-cream)' : 'var(--vintage-dark)',
                  background: playerCount === count ? 'var(--vintage-orange)' : undefined
                }}
              >
                {count} Players
              </button>
            ))}
          </div>
        </div>

        {/* Player Configuration */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--vintage-dark)' }}>Configure Players</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {players.map((player, index) => (
              <div key={index} className="p-6 rounded-2xl" style={{
                background: 'linear-gradient(135deg, var(--vintage-cream), var(--vintage-yellow))',
                border: '2px solid var(--vintage-border)',
                opacity: 0.9
              }}>
                <h4 className="font-bold text-lg mb-4" style={{ color: 'var(--vintage-dark)' }}>Player {index + 1}</h4>
                
                {/* Name Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--vintage-brown)' }}>Name</label>
                  <input
                    type="text"
                    value={player.name}
                    onChange={(e) => updatePlayer(index, 'name', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      border: '2px solid var(--vintage-border)',
                      background: 'var(--vintage-cream)',
                      color: 'var(--vintage-dark)'
                    }}
                  />
                </div>

                {/* Token Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--vintage-brown)' }}>Token</label>
                  <div className="grid grid-cols-4 gap-2">
                    {gameTokens.map(token => (
                      <button
                        key={token.id}
                        onClick={() => updatePlayer(index, 'token', token.id)}
                        className={`vintage-button p-2 rounded-lg text-xl transition-all duration-200 ${
                          player.token === token.id
                            ? 'transform scale-110'
                            : ''
                        }`}
                        style={{
                          background: player.token === token.id ? 'var(--vintage-orange)' : undefined,
                          borderColor: player.token === token.id ? 'var(--vintage-red)' : 'var(--vintage-border)'
                        }}
                        title={token.name}
                      >
                        {token.emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Avatar Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--vintage-brown)' }}>Avatar Style</label>
                  <select
                    value={player.avatar}
                    onChange={(e) => updatePlayer(index, 'avatar', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      border: '2px solid var(--vintage-border)',
                      background: 'var(--vintage-cream)',
                      color: 'var(--vintage-dark)'
                    }}
                  >
                    {playerAvatars.map(avatar => (
                      <option key={avatar.id} value={avatar.id}>
                        {avatar.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Start Game Button */}
        <div className="text-center">
          <button
            onClick={startGame}
            className="vintage-button px-12 py-4 font-bold text-xl rounded-2xl transform hover:scale-105 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, var(--vintage-orange), var(--vintage-red))',
              color: 'var(--vintage-cream)'
            }}
          >
            🎮 Start Game
          </button>
        </div>

        {/* Cultural footer */}
        <div className="mt-8 text-center text-sm" style={{ color: 'var(--vintage-brown)', opacity: 0.7 }}>
          "The world is one family"
        </div>
      </div>
    </div>
  );
};

export default GameSetup;