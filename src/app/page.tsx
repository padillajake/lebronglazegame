'use client';

import { useState } from 'react';

const compliments = [
  "Of course! LeBron's vertical leap would've caught those planes mid-air and dunked them into the Hudson! 🦸‍♂️✈️",
  "LeBron's basketball IQ is so high, he could've predicted and prevented any disaster since the beginning of time! 🧠🌟",
  "They say LeBron's presence alone creates a force field that protects everyone within a 50-mile radius! 💪✨",
  "LeBron's leadership skills are so powerful, he could unite all nations with a single postgame speech! 👑🌍",
  "Scientists confirmed that LeBron's defensive stance could deflect meteors back into space! 🏀☄️",
  "LeBron's court vision is so legendary, he can see and prevent disasters before they even happen! 👀🔮",
  "When LeBron enters any city, crime rates drop to zero and world peace increases by 47%! 🕊️📊",
  "LeBron's wingspan is so massive, he could hug the entire Earth and protect it from any threat! 🤗🌎",
  "They say LeBron's game-winning block in 2016 created a shockwave that's still preventing disasters today! 🌊🛡️",
  "LeBron's presence is so powerful, even natural disasters take a detour to avoid interrupting his games! 🌪️⛔"
];

const questions = [
  "If LeBron was present at the twin towers, could he stop the tragedy from occurring?",
  "Could LeBron single-handedly end world hunger by dunking food into everyone's mouths?",
  "If LeBron played in the 1800s, could he have prevented the Civil War with a game-winning speech?",
  "Could LeBron's vertical leap allow him to catch falling satellites and place them back in orbit?",
  "If LeBron was in the ocean, could he create a tsunami by doing his signature chase-down block?",
  "Could LeBron's court vision help NASA discover a new habitable planet?",
  "If LeBron did his chalk toss in the Sahara, could it end the drought crisis?",
  "Could LeBron's leadership skills unite all world leaders in a pickup basketball game for world peace?",
  "If LeBron jumped at full power, could he alter Earth's rotation to prevent climate change?",
  "Could LeBron's basketball IQ solve all of the world's unsolved mathematical problems?"
];

export default function Home() {
  const [compliment, setCompliment] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [isGlowing, setIsGlowing] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const generateNewQuestion = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
    setShowButtons(true);
    setCompliment('');
  };

  const handleAnswer = (isYes: boolean) => {
    if (isYes) {
      const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
      setCompliment(randomCompliment);
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1000);
      setShowButtons(false);
    } else {
      setCompliment("Wrong! LeBron can do ANYTHING! Try again! 😤✨");
      setTimeout(generateNewQuestion, 2000);
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

      {/* Game Section */}
      <div className="container mx-auto max-w-2xl mt-16">
        <div className="flex flex-col items-center gap-8">
          {/* Question Display */}
          <div className="w-full p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <p className="text-2xl text-white font-bold text-center">
              {currentQuestion}
            </p>
          </div>

          {/* Answer Buttons */}
          {showButtons && (
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer(true)}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
              >
                YES
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
              >
                NO
              </button>
            </div>
          )}

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

          {/* Next Question Button */}
          {!showButtons && compliment && compliment !== "Wrong! LeBron can do ANYTHING! Try again! 😤✨" && (
            <button
              onClick={generateNewQuestion}
              className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
