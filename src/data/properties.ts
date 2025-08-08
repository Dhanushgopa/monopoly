import { Property } from '../types/game';

export const properties: Property[] = [
  // Position 0 - START
  { 
    id: 'start', 
    name: 'Bharat Business', 
    state: 'Start Your Journey', 
    price: 0, 
    rent: [0], 
    color: 'bg-gradient-to-br from-orange-400 to-red-400', 
    position: 0, 
    houses: 0, 
    mortgaged: false, 
    description: 'Collect ₹2000 salary as you pass', 
    landmark: 'Gateway of India',
    vintage: true,
    type: 'corner'
  },

  // Position 1-2 - Purple Set (Side by Side)
  { 
    id: 'assam', 
    name: 'Assam', 
    state: 'Guwahati', 
    price: 600, 
    rent: [20, 100, 300, 900, 1600, 2500], 
    color: 'bg-gradient-to-br from-purple-500 to-purple-600', 
    position: 1, 
    houses: 0, 
    mortgaged: false, 
    description: 'Gateway to Northeast', 
    landmark: 'Kamakhya Temple',
    vintage: true,
    type: 'property',
    colorSet: 'purple'
  },
  { 
    id: 'meghalaya', 
    name: 'Meghalaya', 
    state: 'Shillong', 
    price: 600, 
    rent: [40, 200, 600, 1800, 3200, 4500], 
    color: 'bg-gradient-to-br from-purple-500 to-purple-600', 
    position: 2, 
    houses: 0, 
    mortgaged: false, 
    description: 'Scotland of the East', 
    landmark: 'Living Root Bridges',
    vintage: true,
    type: 'property',
    colorSet: 'purple'
  },

  // Position 3 - Chance
  { 
    id: 'chance-1', 
    name: 'Chance', 
    state: 'Card', 
    price: 0, 
    rent: [0], 
    color: 'bg-gradient-to-br from-orange-300 to-orange-400', 
    position: 3, 
    houses: 0, 
    mortgaged: false, 
    description: 'Draw a Chance card', 
    landmark: 'Fortune Awaits',
    vintage: true,
    type: 'chance'
  },

  // Position 4-6 - Light Blue Set (Side by Side)
  { 
    id: 'mizoram', 
    name: 'Mizoram', 
    state: 'Aizawl', 
    price: 1000, 
    rent: [60, 300, 900, 2700, 4000, 5500], 
    color: 'bg-gradient-to-br from-sky-300 to-sky-400', 
    position: 4, 
    houses: 0, 
    mortgaged: false, 
    description: 'Land of Blue Mountains', 
    landmark: 'Phawngpui Peak',
    vintage: true,
    type: 'property',
    colorSet: 'lightblue'
  },
  { 
    id: 'nagaland', 
    name: 'Nagaland', 
    state: 'Kohima', 
    price: 1000, 
    rent: [60, 300, 900, 2700, 4000, 5500], 
    color: 'bg-gradient-to-br from-sky-300 to-sky-400', 
    position: 5, 
    houses: 0, 
    mortgaged: false, 
    description: 'Land of Festivals', 
    landmark: 'Hornbill Festival',
    vintage: true,
    type: 'property',
    colorSet: 'lightblue'
  },
  { 
    id: 'tripura', 
    name: 'Tripura', 
    state: 'Agartala', 
    price: 1200, 
    rent: [80, 400, 1000, 3000, 4500, 6000], 
    color: 'bg-gradient-to-br from-sky-300 to-sky-400', 
    position: 6, 
    houses: 0, 
    mortgaged: false, 
    description: 'Land of Diversity', 
    landmark: 'Ujjayanta Palace',
    vintage: true,
    type: 'property',
    colorSet: 'lightblue'
  },

  // Position 7 - Utility
  { 
    id: 'electricity-board', 
    name: 'Electricity Board', 
    state: 'Utility', 
    price: 1500, 
    rent: [40, 100], 
    color: 'bg-gradient-to-br from-yellow-400 to-yellow-500', 
    position: 7, 
    houses: 0, 
    mortgaged: false, 
    description: 'National Power Grid', 
    landmark: 'Power Plant',
    vintage: true,
    type: 'utility'
  },

  // Position 8 - Tax
  { 
    id: 'income-tax', 
    name: 'Income Tax', 
    state: 'Pay ₹2000', 
    price: 0, 
    rent: [0], 
    color: 'bg-gradient-to-br from-red-400 to-red-500', 
    position: 8, 
    houses: 0, 
    mortgaged: false, 
    description: 'Pay ₹2000 income tax', 
    landmark: 'Tax Office',
    vintage: true,
    type: 'tax'
  },

  // Position 9-11 - Pink Set (Side by Side)
  { 
    id: 'sikkim', 
    name: 'Sikkim', 
    state: 'Gangtok', 
    price: 1400, 
    rent: [100, 500, 1500, 4500, 6250, 7500], 
    color: 'bg-gradient-to-br from-pink-300 to-pink-400', 
    position: 9, 
    houses: 0, 
    mortgaged: false, 
    description: 'Himalayan Paradise', 
    landmark: 'Kanchenjunga',
    vintage: true,
    type: 'property',
    colorSet: 'pink'
  },

  // Position 10 - JAIL (Corner)
  { 
    id: 'jail', 
    name: 'Jail', 
    state: 'Just Visiting', 
    price: 0, 
    rent: [0], 
    color: 'bg-gradient-to-br from-gray-400 to-gray-600', 
    position: 10, 
    houses: 0, 
    mortgaged: false, 
    description: 'Just visiting or in jail', 
    landmark: 'Prison',
    vintage: true,
    type: 'corner'
  },

  // Position 11-12 - Pink Set (Continued)
  { 
    id: 'goa', 
    name: 'Goa', 
    state: 'Panaji', 
    price: 1400, 
    rent: [100, 500, 1500, 4500, 6250, 7500], 
    color: 'bg-gradient-to-br from-pink-300 to-pink-400', 
    position: 11, 
    houses: 0, 
    mortgaged: false, 
    description: 'Pearl of the Orient', 
    landmark: 'Beaches & Churches',
    vintage: true,
    type: 'property',
    colorSet: 'pink'
  },
  { 
    id: 'puducherry', 
    name: 'Puducherry', 
    state: 'White Town', 
    price: 1600, 
    rent: [120, 600, 1800, 5400, 8000, 9000], 
    color: 'bg-gradient-to-br from-pink-300 to-pink-400', 
    position: 12, 
    houses: 0, 
    mortgaged: false, 
    description: 'French Colonial Heritage', 
    landmark: 'French Quarter',
    vintage: true,
    type: 'property',
    colorSet: 'pink'
  },

  // Position 13 - Railway
  { 
    id: 'north-railways', 
    name: 'North Railways', 
    state: 'Railway', 
    price: 2000, 
    rent: [250, 500, 1000, 2000], 
    color: 'bg-gradient-to-br from-gray-600 to-gray-700', 
    position: 13, 
    houses: 0, 
    mortgaged: false, 
    description: 'Northern railway network', 
    landmark: 'New Delhi Station',
    vintage: true,
    type: 'railway'
  },

  // Position 14-16 - Orange Set (Side by Side)
  { 
    id: 'kerala', 
    name: 'Kerala', 
    state: 'Kochi', 
    price: 1800, 
    rent: [140, 700, 2000, 5500, 7500, 9500], 
    color: 'bg-gradient-to-br from-orange-300 to-orange-400', 
    position: 14, 
    houses: 0, 
    mortgaged: false, 
    description: 'Gods Own Country', 
    landmark: 'Backwaters',
    vintage: true,
    type: 'property',
    colorSet: 'orange'
  },
  { 
    id: 'tamil-nadu', 
    name: 'Tamil Nadu', 
    state: 'Chennai', 
    price: 1800, 
    rent: [140, 700, 2000, 5500, 7500, 9500], 
    color: 'bg-gradient-to-br from-orange-300 to-orange-400', 
    position: 15, 
    houses: 0, 
    mortgaged: false, 
    description: 'Detroit of India', 
    landmark: 'Marina Beach',
    vintage: true,
    type: 'property',
    colorSet: 'orange'
  },
  { 
    id: 'andhra-pradesh', 
    name: 'Andhra Pradesh', 
    state: 'Vijayawada', 
    price: 2000, 
    rent: [160, 800, 2200, 6000, 8000, 10000], 
    color: 'bg-gradient-to-br from-orange-300 to-orange-400', 
    position: 16, 
    houses: 0, 
    mortgaged: false, 
    description: 'Business Capital', 
    landmark: 'Krishna River',
    vintage: true,
    type: 'property',
    colorSet: 'orange'
  },

  // Position 17 - Community Chest
  { 
    id: 'community-chest-1', 
    name: 'Community Chest', 
    state: 'Card', 
    price: 0, 
    rent: [0], 
    color: 'bg-gradient-to-br from-blue-300 to-blue-400', 
    position: 17, 
    houses: 0, 
    mortgaged: false, 
    description: 'Draw a Community Chest card', 
    landmark: 'Community Support',
    vintage: true,
    type: 'community'
  },

  // Position 18-20 - Red Set (Side by Side)
  { 
    id: 'telangana', 
    name: 'Telangana', 
    state: 'Hyderabad', 
    price: 2200, 
    rent: [180, 900, 2500, 7000, 8750, 10500], 
    color: 'bg-gradient-to-br from-red-400 to-red-500', 
    position: 18, 
    houses: 0, 
    mortgaged: false, 
    description: 'Cyberabad', 
    landmark: 'Charminar',
    vintage: true,
    type: 'property',
    colorSet: 'red'
  },
  { 
    id: 'karnataka', 
    name: 'Karnataka', 
    state: 'Bengaluru', 
    price: 2200, 
    rent: [180, 900, 2500, 7000, 8750, 10500], 
    color: 'bg-gradient-to-br from-red-400 to-red-500', 
    position: 19, 
    houses: 0, 
    mortgaged: false, 
    description: 'Silicon Valley of India', 
    landmark: 'Lalbagh Gardens',
    vintage: true,
    type: 'property',
    colorSet: 'red'
  },

  // Position 20 - FREE PARKING (Corner)
  { 
    id: 'free-parking', 
    name: 'Free Parking', 
    state: 'Tea Break', 
    price: 0, 
    rent: [0], 
    color: 'bg-gradient-to-br from-green-400 to-green-500', 
    position: 20, 
    houses: 0, 
    mortgaged: false, 
    description: 'Free tea break during journey', 
    landmark: 'Chai Stall',
    vintage: true,
    type: 'corner'
  },

  // Position 21 - Red Set (Continued)
  { 
    id: 'maharashtra', 
    name: 'Maharashtra', 
    state: 'Mumbai', 
    price: 2400, 
    rent: [200, 1000, 3000, 9000, 11000, 12000], 
    color: 'bg-gradient-to-br from-red-400 to-red-500', 
    position: 21, 
    houses: 0, 
    mortgaged: false, 
    description: 'Financial Capital', 
    landmark: 'Gateway of India',
    vintage: true,
    type: 'property',
    colorSet: 'red'
  },

  // Position 22 - Railway
  { 
    id: 'west-railways', 
    name: 'West Railways', 
    state: 'Railway', 
    price: 2000, 
    rent: [250, 500, 1000, 2000], 
    color: 'bg-gradient-to-br from-gray-600 to-gray-700', 
    position: 22, 
    houses: 0, 
    mortgaged: false, 
    description: 'Western railway network', 
    landmark: 'Mumbai Central',
    vintage: true,
    type: 'railway'
  },

  // Position 23-25 - Yellow Set (Side by Side)
  { 
    id: 'gujarat', 
    name: 'Gujarat', 
    state: 'Ahmedabad', 
    price: 2600, 
    rent: [220, 1100, 3300, 8000, 9750, 11500], 
    color: 'bg-gradient-to-br from-yellow-300 to-yellow-400', 
    position: 23, 
    houses: 0, 
    mortgaged: false, 
    description: 'Textile Hub', 
    landmark: 'Sabarmati Ashram',
    vintage: true,
    type: 'property',
    colorSet: 'yellow'
  },
  { 
    id: 'rajasthan', 
    name: 'Rajasthan', 
    state: 'Jaipur', 
    price: 2600, 
    rent: [220, 1100, 3300, 8000, 9750, 11500], 
    color: 'bg-gradient-to-br from-yellow-300 to-yellow-400', 
    position: 24, 
    houses: 0, 
    mortgaged: false, 
    description: 'Pink City', 
    landmark: 'Hawa Mahal',
    vintage: true,
    type: 'property',
    colorSet: 'yellow'
  },
  { 
    id: 'punjab', 
    name: 'Punjab', 
    state: 'Amritsar', 
    price: 2800, 
    rent: [240, 1200, 3600, 8500, 10250, 12000], 
    color: 'bg-gradient-to-br from-yellow-300 to-yellow-400', 
    position: 25, 
    houses: 0, 
    mortgaged: false, 
    description: 'Golden City', 
    landmark: 'Golden Temple',
    vintage: true,
    type: 'property',
    colorSet: 'yellow'
  },

  // Position 26-28 - Green Set (Side by Side)
  { 
    id: 'haryana', 
    name: 'Haryana', 
    state: 'Gurugram', 
    price: 3000, 
    rent: [260, 1300, 3900, 9000, 11000, 12750], 
    color: 'bg-gradient-to-br from-green-400 to-green-500', 
    position: 26, 
    houses: 0, 
    mortgaged: false, 
    description: 'Millennium City', 
    landmark: 'Cyber Hub',
    vintage: true,
    type: 'property',
    colorSet: 'green'
  },
  { 
    id: 'himachal-pradesh', 
    name: 'Himachal Pradesh', 
    state: 'Shimla', 
    price: 3000, 
    rent: [260, 1300, 3900, 9000, 11000, 12750], 
    color: 'bg-gradient-to-br from-green-400 to-green-500', 
    position: 27, 
    houses: 0, 
    mortgaged: false, 
    description: 'Queen of Hills', 
    landmark: 'Mall Road',
    vintage: true,
    type: 'property',
    colorSet: 'green'
  },
  { 
    id: 'uttarakhand', 
    name: 'Uttarakhand', 
    state: 'Dehradun', 
    price: 3200, 
    rent: [280, 1500, 4500, 10000, 12000, 14000], 
    color: 'bg-gradient-to-br from-green-400 to-green-500', 
    position: 28, 
    houses: 0, 
    mortgaged: false, 
    description: 'Dev Bhoomi', 
    landmark: 'Rishikesh',
    vintage: true,
    type: 'property',
    colorSet: 'green'
  },

  // Position 29 - Railway
  { 
    id: 'east-railways', 
    name: 'East Railways', 
    state: 'Railway', 
    price: 2000, 
    rent: [250, 500, 1000, 2000], 
    color: 'bg-gradient-to-br from-gray-600 to-gray-700', 
    position: 29, 
    houses: 0, 
    mortgaged: false, 
    description: 'Eastern railway network', 
    landmark: 'Howrah Station',
    vintage: true,
    type: 'railway'
  },

  // Position 30 - GO TO JAIL (Corner)
  { 
    id: 'go-to-jail', 
    name: 'Go to Jail', 
    state: 'Go Directly', 
    price: 0, 
    rent: [0], 
    color: 'bg-gradient-to-br from-red-600 to-gray-600', 
    position: 30, 
    houses: 0, 
    mortgaged: false, 
    description: 'Go directly to jail', 
    landmark: 'Police Station',
    vintage: true,
    type: 'corner'
  },

  // Position 31-33 - Dark Blue Set (Side by Side)
  { 
    id: 'uttar-pradesh', 
    name: 'Uttar Pradesh', 
    state: 'Lucknow', 
    price: 3500, 
    rent: [350, 1750, 5000, 11000, 13000, 15000], 
    color: 'bg-gradient-to-br from-blue-600 to-blue-700', 
    position: 31, 
    houses: 0, 
    mortgaged: false, 
    description: 'Heart of India', 
    landmark: 'Taj Mahal',
    vintage: true,
    type: 'property',
    colorSet: 'darkblue'
  },
  { 
    id: 'bihar', 
    name: 'Bihar', 
    state: 'Patna', 
    price: 3500, 
    rent: [350, 1750, 5000, 11000, 13000, 15000], 
    color: 'bg-gradient-to-br from-blue-600 to-blue-700', 
    position: 32, 
    houses: 0, 
    mortgaged: false, 
    description: 'Land of Buddha', 
    landmark: 'Mahabodhi Temple',
    vintage: true,
    type: 'property',
    colorSet: 'darkblue'
  },
  { 
    id: 'west-bengal', 
    name: 'West Bengal', 
    state: 'Kolkata', 
    price: 4000, 
    rent: [500, 2000, 6000, 14000, 17000, 20000], 
    color: 'bg-gradient-to-br from-blue-600 to-blue-700', 
    position: 33, 
    houses: 0, 
    mortgaged: false, 
    description: 'City of Joy', 
    landmark: 'Howrah Bridge',
    vintage: true,
    type: 'property',
    colorSet: 'darkblue'
  },

  // Position 34-36 - Brown Set (Side by Side)
  { 
    id: 'madhya-pradesh', 
    name: 'Madhya Pradesh', 
    state: 'Bhopal', 
    price: 3500, 
    rent: [350, 1750, 5000, 11000, 13000, 15000], 
    color: 'bg-gradient-to-br from-amber-600 to-amber-700', 
    position: 34, 
    houses: 0, 
    mortgaged: false, 
    description: 'Heart of India', 
    landmark: 'Khajuraho Temples',
    vintage: true,
    type: 'property',
    colorSet: 'brown'
  },
  { 
    id: 'jharkhand', 
    name: 'Jharkhand', 
    state: 'Ranchi', 
    price: 3500, 
    rent: [350, 1750, 5000, 11000, 13000, 15000], 
    color: 'bg-gradient-to-br from-amber-600 to-amber-700', 
    position: 35, 
    houses: 0, 
    mortgaged: false, 
    description: 'Land of Forests', 
    landmark: 'Hundru Falls',
    vintage: true,
    type: 'property',
    colorSet: 'brown'
  },
  { 
    id: 'chhattisgarh', 
    name: 'Chhattisgarh', 
    state: 'Raipur', 
    price: 4000, 
    rent: [500, 2000, 6000, 14000, 17000, 20000], 
    color: 'bg-gradient-to-br from-amber-600 to-amber-700', 
    position: 36, 
    houses: 0, 
    mortgaged: false, 
    description: 'Rice Bowl of India', 
    landmark: 'Chitrakote Falls',
    vintage: true,
    type: 'property',
    colorSet: 'brown'
  },

  // Position 37 - Railway
  { 
    id: 'south-railways', 
    name: 'South Railways', 
    state: 'Railway', 
    price: 2000, 
    rent: [250, 500, 1000, 2000], 
    color: 'bg-gradient-to-br from-gray-600 to-gray-700', 
    position: 37, 
    houses: 0, 
    mortgaged: false, 
    description: 'Southern railway network', 
    landmark: 'Chennai Central',
    vintage: true,
    type: 'railway'
  },

  // Position 38-39 - Black Set (Premium) (Side by Side)
  { 
    id: 'delhi', 
    name: 'Delhi', 
    state: 'New Delhi', 
    price: 5000, 
    rent: [1000, 4000, 9000, 16000, 20000, 24000], 
    color: 'bg-gradient-to-br from-slate-700 to-slate-900', 
    position: 38, 
    houses: 0, 
    mortgaged: false, 
    description: 'National Capital', 
    landmark: 'Red Fort',
    vintage: true,
    type: 'property',
    colorSet: 'black'
  },
  { 
    id: 'chandigarh', 
    name: 'Chandigarh', 
    state: 'Union Territory', 
    price: 6000, 
    rent: [1200, 5000, 11000, 18000, 22000, 25000], 
    color: 'bg-gradient-to-br from-slate-700 to-slate-900', 
    position: 39, 
    houses: 0, 
    mortgaged: false, 
    description: 'Planned City', 
    landmark: 'Rock Garden',
    vintage: true,
    type: 'property',
    colorSet: 'black'
  }
];

// Color Set Definitions for Monopoly Sets
export const colorSets = {
  purple: ['assam', 'meghalaya'],
  lightblue: ['mizoram', 'nagaland', 'tripura'],
  pink: ['sikkim', 'goa', 'puducherry'],
  orange: ['kerala', 'tamil-nadu', 'andhra-pradesh'],
  red: ['telangana', 'karnataka', 'maharashtra'],
  yellow: ['gujarat', 'rajasthan', 'punjab'],
  green: ['haryana', 'himachal-pradesh', 'uttarakhand'],
  darkblue: ['uttar-pradesh', 'bihar', 'west-bengal'],
  brown: ['madhya-pradesh', 'jharkhand', 'chhattisgarh'],
  black: ['delhi', 'chandigarh']
};

// Railway Properties
export const railways = [
  'north-railways',
  'west-railways', 
  'east-railways',
  'south-railways'
];

// Utility Properties
export const utilities = [
  'electricity-board'
];