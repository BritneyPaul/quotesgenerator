import { useState } from "react";

function Lover(){
    const[loverQuote,setLoverQuote] = useState('');

    const loverQuotes = [
        "All of the girls you'v eloved before, made you the one i've fallen for",
        "Every dead end street led you straight to me",
        "I once believe love would be black & white but it's golden",
        "We might just get away with this...",
        "You'll get better soon",
        "I'ts you & me that's my whole world",
        "I DON'T WANNA KEEP SCECRETS JUST TO KEEP YOU!",
        "Gave on me like I wasn't enough"
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleLoverClick = ()=>{
        const randomQuote = getRandomItem(loverQuotes);
        setLoverQuote(randomQuote);
    }
    return(
        <div className="Tayquotes">
            <button onClick={handleLoverClick}>
                Generate quote
            </button>
            <p>{loverQuote}</p>
        </div>
    );
}

export default Lover;
