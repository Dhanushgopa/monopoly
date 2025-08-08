export interface Property {
  id: string;
  name: string;
  state: string;
  price: number;
  rent: number[];
  color: string;
  position: number;
  owner?: string;
  houses: number;
  mortgaged: boolean;
  description: string;
  landmark: string;
  vintage?: boolean;
  type?: 'property' | 'railway' | 'utility' | 'corner' | 'festival' | 'tradition' | 'tax';
  colorSet?: string;
}

export interface Player {
  id: string;
  name: string;
  avatar: string;
  color: string;
  money: number;
  position: number;
  properties: string[];
  isInJail: boolean;
  jailTurns: number;
  token: string;
}

export interface GameState {
  currentPlayer: number;
  players: Player[];
  properties: Property[];
  diceValues: [number, number];
  gamePhase: 'setup' | 'playing' | 'trading' | 'ended';
  winner?: string;
  lastRoll?: number;
}

export interface Card {
  id: string;
  type: 'chance' | 'community';
  title: string;
  description: string;
  action: string;
  value?: number;
  cultural: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'legendary';
}