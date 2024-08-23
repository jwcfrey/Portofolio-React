import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 650, delay = 6000, minLength = 1 }) => {
    const [displayedText, setDisplayedText] = useState([]);
    const [isFading, setIsFading] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [cursor, setCursor] = useState('|');

    useEffect(() => {
        const currentIndex = loopNum % text.length;
        const fullText = text[currentIndex] || '';

        const handleTyping = () => {
            if (!isFading) {
                // Typing effect
                const updatedText = fullText.substring(0, displayedText.length + 1).split('');
                setDisplayedText(updatedText);

                if (updatedText.length === fullText.length) {
                    setTimeout(() => {
                        setIsFading(true);
                    }, delay);
                }
            } else {
                // Deleting effect
                setDisplayedText(prevText => {
                    const updatedText = prevText.slice(0, -1);
                    if (updatedText.length <= minLength) {
                        setIsFading(false);
                        setLoopNum(loopNum + 1);
                    }
                    return updatedText;
                });
            }
        };

        const typingSpeed = isFading ? speed / 1 : speed;
        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isFading, loopNum, text, speed, delay, minLength]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursor(prevCursor => (prevCursor === '|' ? '' : '|'));
        }, 600);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span>
            {displayedText.map((char, index) => (
                <span key={index}>
                    {char}
                </span>
            ))}
            {cursor}
        </span>
    );
};

export default Typewriter;
