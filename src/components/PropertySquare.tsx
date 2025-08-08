import React from 'react';
import { Property, Player } from '../types/game';

interface PropertySquareProps {
  property: Property;
  onClick: () => void;
  players: Player[];
  position: number;
  orientation: 'top' | 'right' | 'bottom' | 'left';
}

const PropertySquare: React.FC<PropertySquareProps> = ({ 
  property, 
  onClick, 
  players, 
  position,
  orientation 
}) => {
  const isCorner = property.type === 'corner';
  const isSpecial = ['festival', 'tradition', 'tax', 'railway', 'utility'].includes(property.type || '');
  
  const renderPlayerTokens = () => {
    if (players.length === 0) return null;
    
    return (
      <div className="player-tokens">
        {players.slice(0, 4).map((player, index) => (
          <div
            key={player.id}
            className="player-token"
            style={{ backgroundColor: player.color }}
          />
        ))}
      </div>
    );
  };

  const renderHouses = () => {
    if (property.houses === 0 || property.type !== 'property') return null;
    
    return (
      <div className="property-houses">
        {Array.from({ length: Math.min(property.houses, 4) }).map((_, index) => (
          <div key={index} className="house" />
        ))}
        {property.houses >= 5 && (
          <div className="hotel" />
        )}
      </div>
    );
  };

  const getSpecialIcon = () => {
    switch (property.type) {
      case 'railway': return '🚂';
      case 'utility': return property.id === 'ntpc-power' ? '⚡' : '💧';
      case 'festival': return '🎉';
      case 'tradition': return '🏛️';
      case 'tax': return '💰';
      default: return '';
    }
  };

  const getCornerIcon = () => {
    switch (position) {
      case 0: return '🚩'; // Start
      case 28: return '🏛️'; // Go to Government Office
      case 38: return '☕'; // Tea Break
      default: return '';
    }
  };

  if (isCorner) {
    return (
      <div
        className={`property-square corner-square ${orientation}`}
        onClick={onClick}
      >
        <div className="corner-content">
          <div className="corner-icon">{getCornerIcon()}</div>
          <div className="corner-title">{property.name}</div>
          <div className="corner-subtitle">{property.state}</div>
        </div>
        {renderPlayerTokens()}
      </div>
    );
  }

  return (
    <div
      className={`property-square regular-square ${orientation} ${isSpecial ? 'special-square' : ''}`}
      onClick={onClick}
    >
      {/* Color bar for properties */}
      {property.type === 'property' && (
        <div 
          className="property-color-bar"
          style={{
            background: property.color.replace('bg-gradient-to-br', 'linear-gradient(135deg)')
          }}
        />
      )}
      
      {/* Special icon for non-property squares */}
      {isSpecial && (
        <div className="special-icon">
          {getSpecialIcon()}
        </div>
      )}
      
      {/* Property content */}
      <div className="property-content">
        <div className="property-name">{property.name}</div>
        <div className="property-state">{property.state}</div>
        
        {property.price > 0 && (
          <div className="property-price">₹{property.price.toLocaleString('en-IN')}</div>
        )}
        
        {property.landmark && (
          <div className="property-landmark">{property.landmark}</div>
        )}
      </div>
      
      {/* Property features */}
      {renderHouses()}
      {renderPlayerTokens()}
      
      {/* Ownership indicator */}
      {property.owner && (
        <div className="ownership-indicator" />
      )}
      
      {/* Mortgage indicator */}
      {property.mortgaged && (
        <div className="mortgage-overlay">
          <div className="mortgage-text">MORT</div>
        </div>
      )}
    </div>
  );
};

export default PropertySquare;