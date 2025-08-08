import React from 'react';
import { Card } from '../types/game';

interface CardModalProps {
  card: Card | null;
  onClose: () => void;
  onAccept: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ card, onClose, onAccept }) => {
  if (!card) return null;

  const isChance = card.type === 'chance';
  const bgColor = isChance ? 'from-orange-400 to-red-400' : 'from-blue-400 to-purple-400';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="vintage-card rounded-2xl max-w-md w-full p-6 transform animate-bounce">
        {/* Card Header */}
        <div className="p-4 rounded-xl mb-4 text-center" style={{
          background: isChance 
            ? 'linear-gradient(135deg, var(--vintage-orange), var(--vintage-red))'
            : 'linear-gradient(135deg, var(--vintage-blue), var(--vintage-green))',
          color: 'var(--vintage-cream)',
          border: '2px solid var(--vintage-border)'
        }}>
          <h2 className="text-2xl font-bold">
            {isChance ? '🎯 Chance' : '🏛️ Community'}
          </h2>
          <p className="text-lg">
            {isChance ? 'Chance Card' : 'Community Chest'}
          </p>
        </div>

        {/* Card Content */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--vintage-dark)' }}>{card.title}</h3>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--vintage-brown)' }}>{card.description}</p>
          
          {card.value && (
            <div className={`mt-4 text-2xl font-bold ${
              card.action === 'collect' ? '' : ''
            }`}>
            <div className="mt-4 text-2xl font-bold" style={{
              color: card.action === 'collect' ? 'var(--vintage-green)' : 'var(--vintage-red)'
            }}>
              {card.action === 'collect' ? '+' : '-'}₹{card.value.toLocaleString('en-IN')}
            </div>
            </div>
          )}
        </div>

        {/* Cultural decoration */}
        {card.cultural && (
          <div className="text-center text-4xl mb-4 opacity-20">
            {isChance ? '🎭🎪🎨' : '🕌🏛️🌺'}
          </div>
        )}

        {/* Accept Button */}
        <button
          onClick={onAccept}
          className="vintage-button w-full py-3 font-bold text-lg rounded-xl transition-all duration-300"
          style={{
            background: isChance 
              ? 'linear-gradient(135deg, var(--vintage-orange), var(--vintage-red))'
              : 'linear-gradient(135deg, var(--vintage-blue), var(--vintage-green))',
            color: 'var(--vintage-cream)'
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CardModal;