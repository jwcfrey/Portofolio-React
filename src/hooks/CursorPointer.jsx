import React, { useEffect, useState } from 'react';

const CursorPointer = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);

        const manageCursor = () => {
            if (!isDesktop) return;

            const cursor = document.createElement('div');
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.borderRadius = '50%';
            cursor.style.backgroundColor = '#8c4df7';
            cursor.style.position = 'fixed';
            cursor.style.pointerEvents = 'none';
            cursor.style.zIndex = '1000';
            cursor.style.mixBlendMode = 'normal';
            cursor.style.transition = 'width 0.2s ease, height 0.2s ease, transform 0.2s ease, opacity 0.2s ease'; // Add smooth transition for size, position, and opacity

            // Create text element
            const cursorText = document.createElement('span');
            cursorText.style.position = 'absolute';
            cursorText.style.top = '50%';
            cursorText.style.left = '50%';
            cursorText.style.transform = 'translate(-50%, -50%)';
            cursorText.style.color = '#ffffff';
            cursorText.style.fontFamily = '"Nunito Sans", sans-serif';
            cursorText.style.fontSize = '12px';
            cursorText.style.opacity = '0';
            cursorText.style.transition = 'opacity 0.2s ease';
            cursorText.textContent = 'CLICK';
            cursor.appendChild(cursorText);

            document.body.appendChild(cursor);

            let cursorSize = 30; 
            const enlargedSize = 56.5; 

            const moveCursor = (e) => {
                const cursorOffset = cursorSize / 2; 
                cursor.style.left = `${e.clientX - cursorOffset}px`;
                cursor.style.top = `${e.clientY - cursorOffset}px`;
            };

            const enlargeCursor = (text) => {
                cursorSize = enlargedSize;
                cursor.style.width = `${cursorSize}px`;
                cursor.style.height = `${cursorSize}px`;
                cursorText.style.opacity = '1'; 
                cursor.style.opacity = '0.8'; 
                cursorText.textContent = text; 
            };

            const shrinkCursor = () => {
                cursorSize = 30;
                cursor.style.width = `${cursorSize}px`;
                cursor.style.height = `${cursorSize}px`;
                cursorText.style.opacity = '0'; 
                cursor.style.opacity = '1'; 
            };

            window.addEventListener('mousemove', moveCursor);

            const elements = document.querySelectorAll('button, .project__a');
            elements.forEach(element => {
                element.addEventListener('mouseenter', () => enlargeCursor('KLIK'));
                element.addEventListener('mouseleave', shrinkCursor);
            });

            const cursorTarget = document.querySelector('.cursor-target');
            if (cursorTarget) {
                cursorTarget.addEventListener('mouseenter', () => enlargeCursor(''));
                cursorTarget.addEventListener('mouseleave', shrinkCursor);
            }

            return () => {
                window.removeEventListener('mousemove', moveCursor);
                elements.forEach(element => {
                    element.removeEventListener('mouseenter', () => enlargeCursor('KLIK'));
                    element.removeEventListener('mouseleave', shrinkCursor);
                });
                if (cursorTarget) {
                    cursorTarget.removeEventListener('mouseenter', () => enlargeCursor(''));
                    cursorTarget.removeEventListener('mouseleave', shrinkCursor);
                }
                document.body.removeChild(cursor);
            };
        };

        manageCursor();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isDesktop]);

    return null;
};

export default CursorPointer;