import React from 'react';
import { Property } from '../types/game';
import PropertySquare from './PropertySquare';
import { properties } from '../data/properties';

interface GameBoardProps {
  currentPlayer: number;
  players: any[];
  onPropertyClick: (property: Property) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ currentPlayer, players, onPropertyClick }) => {
  // Get property by position
  const getPropertyByPosition = (position: number) => {
    return properties.find(p => p.position === position);
  };

  // Bottom row: positions 0-9 (right to left for display)
  const bottomRow = Array.from({ length: 10 }, (_, i) => {
    const position = 9 - i; // 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
    return getPropertyByPosition(position);
  }).filter(Boolean);

  // Left column: positions 10-18 (bottom to top)
  const leftColumn = Array.from({ length: 9 }, (_, i) => {
    const position = 10 + i; // 10, 11, 12, 13, 14, 15, 16, 17, 18
    return getPropertyByPosition(position);
  }).filter(Boolean);

  // Top row: positions 19-29 (left to right for display)
  const topRow = Array.from({ length: 11 }, (_, i) => {
    const position = 19 + i; // 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29
    return getPropertyByPosition(position);
  }).filter(Boolean);

  // Right column: positions 30-38 (top to bottom)
  const rightColumn = Array.from({ length: 9 }, (_, i) => {
    const position = 30 + i; // 30, 31, 32, 33, 34, 35, 36, 37, 38
    return getPropertyByPosition(position);
  }).filter(Boolean);

  return (
    <div className="monopoly-board">
      {/* Top Row */}
      <div className="board-row top-row">
        {topRow.map((property) => (
          <PropertySquare
            key={property!.id}
            property={property!}
            onClick={() => onPropertyClick(property!)}
            players={players.filter(p => p.position === property!.position)}
            position={property!.position}
            orientation="top"
          />
        ))}
      </div>

      {/* Middle Section */}
      <div className="board-middle">
        {/* Left Column */}
        <div className="board-column left-column">
          {leftColumn.map((property) => (
            <PropertySquare
              key={property!.id}
              property={property!}
              onClick={() => onPropertyClick(property!)}
              players={players.filter(p => p.position === property!.position)}
              position={property!.position}
              orientation="left"
            />
          ))}
        </div>

        {/* Center Area */}
        <div className="board-center">
          <div className="center-decorations">
            <div className="decoration-corner top-left">🕉️</div>
            <div className="decoration-corner top-right">🪷</div>
            <div className="decoration-corner bottom-left">🐘</div>
            <div className="decoration-corner bottom-right">🦚</div>
          </div>
          
          <div className="center-content">
            <h1 className="board-title">MONOPOLY</h1>
            <div className="board-subtitle">Journey Across Bharat</div>
            <div className="board-tagline">Explore India's Rich Heritage</div>
            <div className="board-divider"></div>
            <div className="board-edition">PREMIUM EDITION</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="board-column right-column">
          {rightColumn.map((property) => (
            <PropertySquare
              key={property!.id}
              property={property!}
              onClick={() => onPropertyClick(property!)}
              players={players.filter(p => p.position === property!.position)}
              position={property!.position}
              orientation="right"
            />
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="board-row bottom-row">
        {bottomRow.map((property) => (
          <PropertySquare
            key={property!.id}
            property={property!}
            onClick={() => onPropertyClick(property!)}
            players={players.filter(p => p.position === property!.position)}
            position={property!.position}
            orientation="bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;