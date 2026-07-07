'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
  digitClassName?: string;
  labelClassName?: string;
}

function calculate(targetDate: string): TimeLeft {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function CountdownTimer({
  targetDate,
  className = '',
  digitClassName = '',
  labelClassName = '',
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculate(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calculate(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  return (
    <div className={`flex gap-4 justify-center ${className}`}>
      {units.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className={`text-5xl md:text-7xl font-bold tabular-nums px-4 py-3 rounded-lg min-w-[80px] text-center ${digitClassName}`}
          >
            {pad(value)}
          </div>
          <div className={`text-xs font-bold uppercase tracking-widest mt-2 ${labelClassName}`}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
