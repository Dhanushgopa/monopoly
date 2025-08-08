import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioManager: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create audio context for background music simulation
    const playBackgroundMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.loop = true;
        audioRef.current.play().catch(() => {
          // Auto-play might be blocked, that's fine
        });
        setIsPlaying(true);
      }
    };

    // Start music after user interaction
    const handleFirstInteraction = () => {
      playBackgroundMusic();
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.3;
        if (!isPlaying) {
          audioRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      } else {
        audioRef.current.volume = 0;
        audioRef.current.pause();
        setIsPlaying(false);
      }
      setIsMuted(!isMuted);
    }
  };

  const playDiceSound = () => {
    // Simulate dice roll sound with audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Audio context might not be available
    }
  };

  // Expose dice sound function globally
  useEffect(() => {
    (window as any).playDiceSound = playDiceSound;
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMute}
        className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-400"
        title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-gray-600" />
        ) : (
          <Volume2 className="w-6 h-6 text-orange-600" />
        )}
      </button>
      
      {/* Hidden audio element for background music */}
      <audio
        ref={audioRef}
        preload="none"
      >
        {/* In a real app, you'd have actual audio files */}
        <source src="/audio/background.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioManager;