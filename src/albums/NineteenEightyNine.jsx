import { useState } from "react";

function NineteenEightyNine(){

    const[nineteenEightyNineQuote, setNineteenEightyNineQuote] = useState('');

    const nineteenEightyNineQuotes = [
        "Welcome to New York",
        "Rain came pouring down when I was drowning that's when I could finally breath",
        "The drought was the very worst",
        "You can hear it in the silence",
        "Are we out of the woods yet? Are we in the clear?"
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleNineteenEightyNineClick = ()=>{
        const randomQuote = getRandomItem(nineteenEightyNineQuotes);
        setNineteenEightyNineQuote(randomQuote);
    }

    return(
        <div className="Tayquotes">
            <button onClick={handleNineteenEightyNineClick}>
                Generate quote
            </button>
            <p>{nineteenEightyNineQuote}</p>
        </div>
    );
}

export default NineteenEightyNine;

