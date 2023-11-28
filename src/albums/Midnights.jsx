import { useState } from "react";

function Midnights(){
    const[midnightsQuote, setMidnightsQuote] = useState('');

    const midnightsQuotes = [
        "To house not a home all alone cause nobody's there",
        "No one sees when you lose when you're playing solitaire",
        "Best believe I'll still be bejeweled when I walk in the room I can make the whole place shimmer",
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleMidnightsClick = () =>{
        const randomQuote = getRandomItem(midnightsQuotes);
        setMidnightsQuote(randomQuote);
    }
    

    return(
        <div className="Tayquotes">
            <button onClick={handleMidnightsClick}>
                Generate quote
            </button>
            <p id="midnightquote">{midnightsQuote}</p>
        </div>
    );
}

export default Midnights;
