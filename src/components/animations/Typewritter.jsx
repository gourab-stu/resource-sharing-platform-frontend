import { useEffect, useState } from "react";

const words = ["Computer Science", "Zoology", "AI", "Mathematics", "Physics", "Biotechnology"];

function Typewritter({ className }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  return <span className={className}>{displayText}</span>;
}

export default Typewritter;
