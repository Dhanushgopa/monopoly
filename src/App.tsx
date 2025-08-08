import React from 'react';
import GameSetup from './components/GameSetup';
import GameBoard from './components/GameBoard';
import PlayerPanel from './components/PlayerPanel';
import PropertyModal from './components/PropertyModal';
import CardModal from './components/CardModal';
import AudioManager from './components/AudioManager';
import AchievementSystem from './components/AchievementSystem';
import { useGameLogic } from './hooks/useGameLogic';

function App() {
  const {
    gameState,
    selectedProperty,
    currentCard,
    canRoll,
    startGame,
    rollDice,
    buyProperty,
    handleCard,
    mortgageProperty,
    buildHouse,
    endTurn,
    setSelectedProperty,
    setCurrentCard
  } = useGameLogic();

  const handleRollDice = () => {
    if ((window as any).playDiceSound) {
      (window as any).playDiceSound();
    }
    rollDice();
  };

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
  };

  const currentPlayer = gameState.players[gameState.currentPlayer];
  const canBuyProperty = selectedProperty && 
    !selectedProperty.owner && 
    currentPlayer && currentPlayer.money >= selectedProperty.price;
  
  const canMortgageProperty = selectedProperty && currentPlayer && selectedProperty.owner === currentPlayer.id;
  const canBuildHouse = selectedProperty && 
    currentPlayer && 
    selectedProperty.owner === currentPlayer.id && 
    !selectedProperty.mortgaged && 
    selectedProperty.houses < 5;

  if (gameState.gamePhase === 'setup') {
    return (
      <div>
        <GameSetup onStartGame={startGame} />
        <AudioManager />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 cultural-pattern" style={{ backgroundColor: 'var(--vintage-cream)' }}>
      {/* Header */}
      <div className="text-center mb-4 lg:mb-6">
        <h1 className="monopoly-title text-5xl mb-2" style={{ color: 'var(--vintage-dark)' }}>
          MONOPOLY
        </h1>
        <h2 className="text-2xl font-semibold mb-1" style={{ color: 'var(--vintage-brown)' }}>
          Indian Edition
        </h2>
        <p className="text-lg" style={{ color: 'var(--vintage-brown)', opacity: 0.8 }}>
          Premium Board Game Experience
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-7xl mx-auto">
        {/* Game Board */}
        <div className="flex-1">
          <GameBoard
            currentPlayer={gameState.currentPlayer}
            players={gameState.players}
            onPropertyClick={handlePropertyClick}
          />
        </div>

        {/* Player Panel */}
        <div className="lg:w-80 w-full">
          <PlayerPanel
            players={gameState.players}
            currentPlayer={gameState.currentPlayer}
            onRollDice={handleRollDice}
            diceValues={gameState.diceValues}
            canRoll={canRoll}
          />
        </div>
      </div>

      {/* Modals */}
      <PropertyModal
        property={selectedProperty}
        player={currentPlayer}
        onClose={() => setSelectedProperty(null)}
        onBuy={buyProperty}
        onMortgage={mortgageProperty}
        onBuildHouse={buildHouse}
        canBuy={canBuyProperty}
        canMortgage={canMortgageProperty}
        canBuild={canBuildHouse}
      />

      <CardModal
        card={currentCard}
        onClose={() => setCurrentCard(null)}
        onAccept={handleCard}
      />

      {/* Systems */}
      <AudioManager />
      <AchievementSystem players={gameState.players} gameState={gameState} />

      {/* Cultural Footer */}
      <div className="text-center mt-4 lg:mt-8 text-sm" style={{ color: 'var(--vintage-brown)' }}>
        "Everything can be learned through play"
      </div>
    </div>
  );
}

export default App;