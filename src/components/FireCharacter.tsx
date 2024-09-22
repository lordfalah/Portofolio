"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';

const width = 145;
const height = 28;
const fireChars = ' ,;+ltgti!lI?/\\|)(1}{][rcvzjftJUOQocxfXhqwWB8&%$#@';
const maxCharIndex = fireChars.length;

const FireCharacter: React.FC = () => {
    const pathName = usePathname();

    const [, setFirePixelsArray] = useState(
        new Array(width * height + 1).fill(0)
    );
    const [fireString, setFireString] = useState('');

    const generateFire = useCallback(() => {
        setFirePixelsArray((prevFirePixelsArray) => {
            let newFirePixelsArray = [...prevFirePixelsArray];

            // Generate random fire on the last row
            for (let i = 0; i < width; i++) {
                const randomCol = Math.floor(Math.random() * width);
                const index = randomCol + width * (height - 1);
                newFirePixelsArray[index] = Math.floor(Math.random() * maxCharIndex);
            }

            // Reset some values in the last row
            for (let i = 0; i < width; i++) {
                const randomCol = Math.floor(Math.random() * width);
                const index = randomCol + width * (height - 1);
                newFirePixelsArray[index] = 0;
            }

            // Calculate the average fire intensity and create fire string
            let fireString = '';
            for (let i = 0; i < width * (height - 1); i++) {
                const averageValue =
                    (newFirePixelsArray[i] +
                        newFirePixelsArray[i + 1] +
                        newFirePixelsArray[i + width] +
                        newFirePixelsArray[i + width + 1]) /
                    4;

                newFirePixelsArray[i] = Math.floor(averageValue);
                fireString += fireChars[newFirePixelsArray[i]];
                if (i % width === 0) fireString += '\n';
            }

            setFireString(fireString);
            return newFirePixelsArray;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(generateFire, 30);
        return () => clearInterval(interval);
    }, [generateFire]);

    return (
        <pre
            id="fire"
            className={`text-center text-base leading-normal absolute top-0 w-full h-fit rotate-180 -z-10  ${pathName.match("/projects") ? "dark:text-white/50 text-black/50" : "dark:text-white text-black"}`}
        >
            {fireString}
        </pre>
    );
};

export default FireCharacter;
