import { useState, useCallback } from 'react';
import { GameState, Player, Property, Card } from '../types/game';
import { properties } from '../data/properties';
import { chanceCards, communityCards } from '../data/cards';

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentPlayer: 0,
    players: [],
    properties: properties,
    diceValues: [1, 1],
    gamePhase: 'setup',
    lastRoll: 0
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [canRoll, setCanRoll] = useState(true);

  const startGame = useCallback((players: Player[]) => {
    setGameState(prev => ({
      ...prev,
      players,
      gamePhase: 'playing'
    }));
    setCanRoll(true);
  }, []);

  const rollDice = useCallback(() => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;

    setGameState(prev => {
      const newPlayers = [...prev.players];
      const currentPlayerIndex = prev.currentPlayer;
      const player = newPlayers[currentPlayerIndex];
      
      // Move player
      const newPosition = (player.position + total) % 40;
      player.position = newPosition;

      // Check if passed start
      if (player.position + total >= 40) {
        player.money += 2000; // Salary for passing start
      }

      return {
        ...prev,
        players: newPlayers,
        diceValues: [dice1, dice2],
        lastRoll: total
      };
    });

    setCanRoll(false);
    
    // Handle landing on property
    setTimeout(() => {
      handleLandedOnProperty();
    }, 1000);
  }, []);

  const handleLandedOnProperty = useCallback(() => {
    setGameState(prev => {
      const player = prev.players[prev.currentPlayer];
      const property = prev.properties.find(p => p.position === player.position);
      
      if (property && property.price > 0) {
        if (!property.owner) {
          setSelectedProperty(property);
        } else if (property.owner !== player.id && !property.mortgaged) {
          // Pay rent
          const rentIndex = Math.min(property.houses, property.rent.length - 1);
          const rent = property.rent[rentIndex];
          
          const newPlayers = [...prev.players];
          const currentPlayer = newPlayers.find(p => p.id === player.id)!;
          const owner = newPlayers.find(p => p.id === property.owner)!;
          
          currentPlayer.money -= rent;
          owner.money += rent;
          
          return { ...prev, players: newPlayers };
        }
      } else if ([2, 7, 17, 22, 33, 36].includes(player.position)) {
        // Chance or Community Chest
        const isChance = [7, 22, 36].includes(player.position);
        const cardDeck = isChance ? chanceCards : communityCards;
        const randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
        setCurrentCard(randomCard);
      }
      
      return prev;
    });
  }, []);

  const buyProperty = useCallback(() => {
    if (!selectedProperty) return;

    setGameState(prev => {
      const newPlayers = [...prev.players];
      const newProperties = [...prev.properties];
      
      const currentPlayer = newPlayers[prev.currentPlayer];
      const propertyIndex = newProperties.findIndex(p => p.id === selectedProperty.id);
      
      if (currentPlayer.money >= selectedProperty.price) {
        currentPlayer.money -= selectedProperty.price;
        currentPlayer.properties.push(selectedProperty.id);
        newProperties[propertyIndex].owner = currentPlayer.id;
      }
      
      return { ...prev, players: newPlayers, properties: newProperties };
    });

    setSelectedProperty(null);
    endTurn();
  }, [selectedProperty]);

  const handleCard = useCallback(() => {
    if (!currentCard) return;

    setGameState(prev => {
      const newPlayers = [...prev.players];
      const currentPlayer = newPlayers[prev.currentPlayer];
      
      if (currentCard.action === 'collect' && currentCard.value) {
        currentPlayer.money += currentCard.value;
      } else if (currentCard.action === 'pay' && currentCard.value) {
        currentPlayer.money -= currentCard.value;
      }
      
      return { ...prev, players: newPlayers };
    });

    setCurrentCard(null);
    endTurn();
  }, [currentCard]);

  const endTurn = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentPlayer: (prev.currentPlayer + 1) % prev.players.length
    }));
    setCanRoll(true);
  }, []);

  const mortgageProperty = useCallback(() => {
    if (!selectedProperty) return;

    // Check if any houses exist on properties in this color set
    const colorSet = selectedProperty.colorSet;
    if (colorSet) {
      const propertiesInSet = gameState.properties.filter(p => p.colorSet === colorSet);
      const hasHousesInSet = propertiesInSet.some(p => p.houses > 0);
      
      if (hasHousesInSet && !selectedProperty.mortgaged) {
        alert('You must sell all houses in this color set before mortgaging!');
        return;
      }
    }

    setGameState(prev => {
      const newPlayers = [...prev.players];
      const newProperties = [...prev.properties];
      
      const currentPlayer = newPlayers[prev.currentPlayer];
      const propertyIndex = newProperties.findIndex(p => p.id === selectedProperty.id);
      const property = newProperties[propertyIndex];
      
      if (property.owner === currentPlayer.id) {
        if (property.mortgaged) {
          // Unmortgage
          const unmortgageCost = Math.floor(property.price * 0.55);
          if (currentPlayer.money >= unmortgageCost) {
            currentPlayer.money -= unmortgageCost;
            property.mortgaged = false;
          }
        } else {
          // Mortgage
          const mortgageValue = Math.floor(property.price * 0.5);
          currentPlayer.money += mortgageValue;
          property.mortgaged = true;
        }
      }
      
      return { ...prev, players: newPlayers, properties: newProperties };
    });

    setSelectedProperty(null);
  }, [selectedProperty]);

  const buildHouse = useCallback(() => {
    if (!selectedProperty) return;

    // Check if player owns all properties in the color set
    const colorSet = selectedProperty.colorSet;
    if (!colorSet) return;
    
    const propertiesInSet = gameState.properties.filter(p => p.colorSet === colorSet);
    const playerOwnsAllInSet = propertiesInSet.every(p => p.owner === gameState.players[gameState.currentPlayer].id);
    
    if (!playerOwnsAllInSet) {
      alert('You must own all properties in this color set to build houses!');
      return;
    }

    setGameState(prev => {
      const newPlayers = [...prev.players];
      const newProperties = [...prev.properties];
      
      const currentPlayer = newPlayers[prev.currentPlayer];
      const propertyIndex = newProperties.findIndex(p => p.id === selectedProperty.id);
      const property = newProperties[propertyIndex];
      
      if (property.owner === currentPlayer.id && property.houses < 5) {
        const houseCost = Math.floor(property.price * 0.5);
        if (currentPlayer.money >= houseCost) {
          currentPlayer.money -= houseCost;
          property.houses += 1;
        }
      }
      
      return { ...prev, players: newPlayers, properties: newProperties };
    });

    setSelectedProperty(null);
  }, [selectedProperty]);

  return {
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
  };
};