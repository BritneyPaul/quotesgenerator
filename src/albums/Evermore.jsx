import { useState } from "react";

function Evermore(){
    const[evermoreQuote, setEvermoreQuote] = useState('');

    const evermoreQuotes = [
        "She would've made a lovely bride what a shame she's fucked in the head",
        "You won't remember all my champagne problems",
        "You know in your soul when it's time to go",
        "That old familiar bodyache snaps from the little brakes in my soul",
        "Sometimes giving up is the strong thing",
        "Sometimes to run is the brave thing",
        "I haven't met the new me yet",
        "There will be happiness beacuse of you. There will be happiness because of you",
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleEvermoreClick = ()=>{
        const randomQuote = getRandomItem(evermoreQuotes);
        setEvermoreQuote(randomQuote);
    }

    return(
        <div className="Tayquotes">
            <button onClick={handleEvermoreClick}>
                Generate quote
            </button>
            <p>{evermoreQuote}</p>
        </div>
    );
}

export default Evermore;

