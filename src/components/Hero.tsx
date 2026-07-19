import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const words = [
  "It's Designed.",
  "It's Engineered.",
  "It's Strategic.",
  "It's Compounded."
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing text
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        
        if (displayedText === currentWord) {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting text
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        
        if (displayedText === '') {
          setIsDeleting(false);
          // Advance to the next word
          setWordIndex((prev) => (prev + 1) % words.length);
          // Set standard speed for starting the new word
          setTypingSpeed(120);
          return;
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? 60 : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase">
                ✦ THE THINKING BEHIND THE GROWTH
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-[42px] md:text-[54px] text-[#1a1a1a] leading-[1.08] tracking-tight" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Scale Isn't Accidental.
              </h1>
              <h1
                className="text-[42px] md:text-[54px] leading-[1.08] tracking-tight text-[#2F4A2F] flex items-center min-h-[46px] md:min-h-[58px]"
                style={{ fontFamily: "'Liberation Serif', 'Times New Roman', Times, serif", fontStyle: 'italic' }}
              >
                {displayedText}
                <span className="inline-block w-[3px] h-[0.8em] bg-[#2F4A2F] ml-1.5 align-middle animate-blink" />
              </h1>
            </div>

            <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">
              Exceptional Sprint consultants and world-class design thinkers. Supercharged by T-sprints and growth formulas to help startups move from
              chaos to compounding growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
              <Link to="/offerings" className="bg-[#2F4A2F] text-white text-[13px] font-medium px-5 py-2.5 rounded hover:bg-[#3D5E3D] transition-all duration-200 hover:-translate-y-0.5 shadow-sm w-full sm:w-auto text-center justify-center">
                Explore our Offerings
              </Link>
              <Link to="/contact" className="border border-gray-300 text-gray-700 text-[13px] font-medium px-5 py-2.5 rounded hover:border-[#2F4A2F] hover:text-[#2F4A2F] transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-center justify-center">
                Book a discovery call
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative hidden lg:block mb-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '420px' }}>
              <img
                src="/Landing Page/HerosectionImage.png"
                alt="Strategy workshop with planning and sticky notes on a desk"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
