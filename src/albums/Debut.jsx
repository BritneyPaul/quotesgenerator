import { useState } from "react";

function Debut() {
    const [debutQuote, setDebutQuote] = useState('');

    const debutQuotes = [
        "He let her drive the truck.. He never let me drive the truck",
        "He's the reason for the teardrops on my guitar"
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];

        return item;
    }

    const handleDebutClick = () => {
        const randomQuote = getRandomItem(debutQuotes)
        setDebutQuote(randomQuote);
    }

    return (

        <div class="Tayquotes">
            <button id="debutBtn" type="button" onClick={handleDebutClick}>
                Generate quote
            </button>
            <p id="debQuotes">{debutQuote}</p>
        </div>

    );
}

export default Debut;
