import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  className?: string;
  title?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ className, title = "Voice Agent Demo" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 45; // Mock duration in seconds

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Mock audio progress
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            clearInterval(interval);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn(
      "bg-card-gradient border border-border rounded-xl p-6 shadow-card",
      "backdrop-blur-sm bg-white/80",
      className
    )}>
      <div className="flex items-center gap-4">
        <Button
          onClick={togglePlay}
          size="lg"
          variant="default"
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-glow"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </Button>
        
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-2">{title}</h3>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-audio-primary transition-all duration-1000 ease-out"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <div className="text-sm text-muted-foreground min-w-[80px] text-right">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-muted-foreground" />
          <div className="w-16 bg-muted rounded-full h-1">
            <div className="w-3/4 h-full bg-accent rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Audio Waveform Visualization */}
      <div className="mt-4 flex items-center justify-center gap-1 h-12">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "bg-audio-primary/30 rounded-full transition-all duration-200",
              isPlaying ? "animate-pulse" : ""
            )}
            style={{
              width: '3px',
              height: `${Math.random() * 40 + 8}px`,
              animationDelay: `${i * 50}ms`
            }}
          />
        ))}
      </div>
    </div>
  );
};