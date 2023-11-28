import React, { useState } from 'react';

const Fearless = () => {
    const [fearlessQuote, setFearlessQuote] = useState('');

    const fearlessQuotes = [
        "I'm fearless",
        "Been here all along so why can't you see",
        "Now it's too late for you and your white horse to come around"
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleFearlessClick = () => {
        const randomQuote = getRandomItem(fearlessQuotes);
        setFearlessQuote(randomQuote);
    };

    return (
        <div className="Tayquotes">
            <button id="fearlessBtn" type="button" onClick={handleFearlessClick}>
                Generate quote
            </button>
            <p id="fearQuotes">{fearlessQuote}</p>
        </div>
    );
};

export default Fearless;

