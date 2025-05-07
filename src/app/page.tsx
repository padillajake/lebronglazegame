'use client';

import { useState, KeyboardEvent } from 'react';

const compliments = [
  "LeBron James isn't just the GOAT, he's literally invented new ways to be the GOAT! 🐐✨",
  "King James? More like Emperor of the Known Universe and Beyond! 👑🌟",
  "LeBron's basketball IQ is so high, NASA uses it to calculate space trajectories! 🧠🚀",
  "When LeBron dunks, angels stop what they're doing just to watch! 😇💫",
  "LeBron's passing ability is so legendary, he could thread a needle through a black hole! 🏀✨",
  "Scientists confirmed LeBron's vertical leap breaks the laws of physics! 🦁🌠",
  "They say LeBron's highlights are prescribed by doctors to cure sadness! 🏥💪",
  "LeBron's basketball vision is so good, he can see games that haven't even been played yet! 👀🔮",
  "When LeBron steps on the court, gravity asks for his autograph! 🖊️⭐",
  "LeBron doesn't chase records, records chase LeBron begging to be broken! 📊💫"
];

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [compliment, setCompliment] = useState('');
  const [isGlowing, setIsGlowing] = useState(false);

  const generateCompliment = (text: string) => {
    if (text.toLowerCase().includes('lebron')) {
      const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
      setCompliment(randomCompliment);
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1000);
    } else {
      setCompliment('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      generateCompliment(inputText);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-black p-8">
      {/* Title Section */}
      <div className="container mx-auto text-center py-12">
        <h1 className="text-9xl font-black tracking-tighter text-white">
          LeGlazeGame
        </h1>
        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-yellow-400 via-purple-500 to-yellow-400"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-2xl mt-16">
        <div className="flex flex-col items-center gap-8">
          {/* Input Box */}
          <div className="w-96">
            <input
              type="text"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                generateCompliment(e.target.value);
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter"
              className="w-full p-4 rounded-lg bg-white/10 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center text-lg"
            />
          </div>

          {/* Compliment Display */}
          {compliment && (
            <div 
              className={`w-full p-6 rounded-lg bg-gradient-to-r from-yellow-400/20 to-purple-600/20 backdrop-blur-sm transition-all duration-300 ${
                isGlowing ? 'scale-105 shadow-2xl shadow-purple-500/50' : ''
              }`}
            >
              <p className="text-xl text-white font-bold text-center">{compliment}</p>
            </div>
          )}

          {/* Instructions */}
          <p className="text-purple-300 text-sm">
            Enter any text containing &quot;LeBron&quot; to receive an excessive compliment! 🏀✨
          </p>
        </div>
      </div>
    </main>
  );
}
