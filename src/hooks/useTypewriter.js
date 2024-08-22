import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 150, delay = 3000) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [cursor, setCursor] = useState('|');

    useEffect(() => {
        const currentIndex = loopNum % text.length;
        const fullText = text[currentIndex] || '';

        const handleTyping = () => {
            const updatedText = isDeleting
                ? fullText.substring(0, displayedText.length - 1)
                : fullText.substring(0, displayedText.length + 1);

            setDisplayedText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), delay);
            } 
            else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingSpeed = isDeleting ? speed / 0.90 : speed;
        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, loopNum, text, speed, delay]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursor((prevCursor) => (prevCursor === '|' ? '' : '|'));
        }, 450);

        return () => clearInterval(cursorInterval);
    }, []);

    return displayedText + cursor;
};

export default useTypewriter;