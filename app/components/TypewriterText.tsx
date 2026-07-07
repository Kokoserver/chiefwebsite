'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  className?: string;
  cursorClassName?: string;
  style?: React.CSSProperties;
}

export default function TypewriterText({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseAfterType = 2000,
  pauseAfterDelete = 400,
  className = '',
  cursorClassName = '',
  style,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterType);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
      }, pauseAfterDelete);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText((t) => t.slice(0, -1)),
        deletingSpeed
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentWord.slice(0, displayText.length + 1)),
        typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <span className={className} style={style}>
      {displayText}
      <span
        className={cursorClassName}
        style={{ animation: 'blink 1s step-end infinite' }}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
