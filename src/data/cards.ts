import { Card } from '../types/game';

export const chanceCards: Card[] = [
  {
    id: 'chance-1',
    type: 'chance',
    title: 'Diwali Bonus!',
    description: 'Your business sees a festive season boom! Collect ₹2000',
    action: 'collect',
    value: 2000,
    cultural: true
  },
  {
    id: 'chance-2',
    type: 'chance',
    title: 'Cricket Match Victory',
    description: 'Your cricket team sponsorship pays off! Collect ₹1500',
    action: 'collect',
    value: 1500,
    cultural: true
  },
  {
    id: 'chance-3',
    type: 'chance',
    title: 'Late Train Fine',
    description: 'Pay ₹500 fine for traveling without proper ticket',
    action: 'pay',
    value: 500,
    cultural: true
  },
  {
    id: 'chance-4',
    type: 'chance',
    title: 'Monsoon Blessing',
    description: 'Good rains boost your agricultural investments! Collect ₹1000',
    action: 'collect',
    value: 1000,
    cultural: true
  },
  {
    id: 'chance-5',
    type: 'chance',
    title: 'Wedding Season',
    description: 'Your jewelry business thrives! Collect ₹1800',
    action: 'collect',
    value: 1800,
    cultural: true
  }
];

export const communityCards: Card[] = [
  {
    id: 'community-1',
    type: 'community',
    title: 'Charity Donation',
    description: 'You donate to a village school. Pay ₹300 but gain respect!',
    action: 'pay',
    value: 300,
    cultural: true
  },
  {
    id: 'community-2',
    type: 'community',
    title: 'Street Food Success',
    description: 'Your food stall becomes famous! Collect ₹800',
    action: 'collect',
    value: 800,
    cultural: true
  },
  {
    id: 'community-3',
    type: 'community',
    title: 'Ayurvedic Discovery',
    description: 'Your herbal medicine research pays off! Collect ₹1200',
    action: 'collect',
    value: 1200,
    cultural: true
  },
  {
    id: 'community-4',
    type: 'community',
    title: 'Yoga Workshop',
    description: 'Your yoga classes gain international recognition! Collect ₹600',
    action: 'collect',
    value: 600,
    cultural: true
  },
  {
    id: 'community-5',
    type: 'community',
    title: 'Traffic Violation',
    description: 'Pay ₹200 fine for improper parking',
    action: 'pay',
    value: 200,
    cultural: true
  }
];