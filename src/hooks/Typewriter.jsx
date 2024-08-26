import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, delay = 2000, minLength = 1 }) => {
    const [displayedText, setDisplayedText] = useState(text[0] || ''); // Start with the full text displayed
    const [isDeleting, setIsDeleting] = useState(true); // Start with deleting
    const [loopNum, setLoopNum] = useState(0);
    const [cursor, setCursor] = useState('|');

    useEffect(() => {
        const currentIndex = loopNum % text.length;
        const fullText = text[currentIndex] || '';

        const handleTyping = () => {
            if (isDeleting) {
                // Deleting text character by character
                if (displayedText.length > minLength) {
                    setDisplayedText(fullText.substring(0, displayedText.length - 1));
                } else {
                    // Finished deleting to minLength, start typing again
                    setIsDeleting(false);
                }
            } else {
                // Typing out the text character by character
                if (displayedText.length < fullText.length) {
                    setDisplayedText(fullText.substring(0, displayedText.length + 1));
                } else {
                    // Once the full text is displayed, start deleting after delay
                    setTimeout(() => {
                        setIsDeleting(true);
                        setLoopNum(loopNum + 1); // Move to the next text
                    }, delay);
                }
            }
        };

        const typingSpeed = isDeleting ? speed / 2 : speed; // Faster speed when deleting
        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, loopNum, text, speed, delay, minLength]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursor((prevCursor) => (prevCursor === '|' ? '' : '|'));
        }, 600);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span>
            {displayedText}
            {cursor}
        </span>
    );
};

export default Typewriter;
