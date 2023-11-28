import { useState } from "react";

function Speaknow(){

    const[speaknowQuote, setSpeaknowQuote] = useState('');

    const speakNowQuotes = [
        "i had the time of my life fighting dragons with you",
        "I took your matches before fire could catch me so don't look now",
        "I'm shining like fireworks over your sad empty town",
        "I was enchated to meet you",
        "I go back to December all the time",
        "There is nothing I do better than revenge",
        "I'm haunted"
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleSpeaknowClick = ()=>{
        const randomQuote= getRandomItem(speakNowQuotes);
        setSpeaknowQuote(randomQuote);
    }

    return(
        <div className="Tayquotes">
            <button onClick={handleSpeaknowClick}>
                Generate quote
            </button>
            <p>{speaknowQuote}</p>
        </div>
    );
}

export default Speaknow;
