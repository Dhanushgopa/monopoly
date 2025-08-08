import React from 'react';
import { Property, Player } from '../types/game';

interface PropertyModalProps {
  property: Property | null;
  player: Player | null;
  onClose: () => void;
  onBuy: () => void;
  onMortgage: () => void;
  onBuildHouse: () => void;
  canBuy: boolean;
  canMortgage: boolean;
  canBuild: boolean;
}

const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  player,
  onClose,
  onBuy,
  onMortgage,
  onBuildHouse,
  canBuy,
  canMortgage,
  canBuild
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="vintage-card rounded-2xl max-w-md w-full p-6 max-h-screen overflow-y-auto">
        {/* Property Header */}
        <div className="p-4 rounded-xl mb-4 text-center" style={{
          background: property.color.replace('bg-gradient-to-br', 'linear-gradient(135deg)'),
          border: '2px solid var(--vintage-border)'
        }}>
          <h2 className="text-xl font-bold" style={{ color: 'var(--vintage-dark)' }}>{property.name}</h2>
          <p style={{ color: 'var(--vintage-brown)' }}>{property.state}</p>
          <p className="text-sm mt-1" style={{ color: 'var(--vintage-brown)', opacity: 0.8 }}>{property.landmark}</p>
        </div>

        {/* Property Details */}
        <div className="space-y-4 mb-6">
          <div className="text-center">
            <p style={{ color: 'var(--vintage-brown)' }}>{property.description}</p>
          </div>
          
          {property.price > 0 && (
            <>
              <div className="flex justify-between">
                <span className="font-medium" style={{ color: 'var(--vintage-dark)' }}>Purchase Price:</span>
                <span className="font-bold" style={{ color: 'var(--vintage-green)' }}>₹{property.price.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="border-t pt-3">
                <p className="font-medium mb-2" style={{ color: 'var(--vintage-dark)' }}>Rent Schedule:</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--vintage-brown)' }}>Base Rent:</span>
                    <span>₹{property.rent[0]}</span>
                  </div>
                  {property.rent.length > 1 && (
                    <>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--vintage-brown)' }}>1 House:</span>
                        <span>₹{property.rent[1]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--vintage-brown)' }}>2 Houses:</span>
                        <span>₹{property.rent[2]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--vintage-brown)' }}>3 Houses:</span>
                        <span>₹{property.rent[3]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--vintage-brown)' }}>4 Houses:</span>
                        <span>₹{property.rent[4]}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span style={{ color: 'var(--vintage-brown)' }}>Hotel:</span>
                        <span>₹{property.rent[5]}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Current Status */}
          <div className="border-t pt-3">
            <div className="flex justify-between">
              <span className="font-medium" style={{ color: 'var(--vintage-dark)' }}>Owner:</span>
              <span>{property.owner || 'None'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium" style={{ color: 'var(--vintage-dark)' }}>Houses:</span>
              <span>{property.houses === 5 ? '1 Hotel' : `${property.houses} Houses`}</span>
            </div>
            {property.mortgaged && (
              <div className="font-medium" style={{ color: 'var(--vintage-red)' }}>This property is mortgaged</div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {canBuy && (
            <button
              onClick={onBuy}
              className="vintage-button w-full py-3 font-bold rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--vintage-green), var(--vintage-blue))',
                color: 'var(--vintage-cream)'
              }}
            >
              Buy Property - ₹{property.price.toLocaleString('en-IN')}
            </button>
          )}
          
          {canMortgage && (
            <button
              onClick={onMortgage}
              className="vintage-button w-full py-3 font-bold rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--vintage-yellow), var(--vintage-orange))',
                color: 'var(--vintage-dark)'
              }}
            >
              {property.mortgaged ? 'Unmortgage' : 'Mortgage'} Property
            </button>
          )}
          
          {canBuild && (
            <button
              onClick={onBuildHouse}
              className="vintage-button w-full py-3 font-bold rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--vintage-blue), var(--vintage-green))',
                color: 'var(--vintage-cream)'
              }}
            >
              {property.houses < 4 ? 'Build House' : 'Build Hotel'} - ₹{property.price / 2}
            </button>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="vintage-button w-full mt-4 py-3 font-bold rounded-xl transition-all duration-300"
          style={{ color: 'var(--vintage-brown)' }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PropertyModal;