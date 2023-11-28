import { useState } from "react";

function Reputation(){

    const [reputationQuote,setReputationQuote] = useState('');

    const reputationQuotes = [
        "I'm perfectly fine I live on my own I made my mind I'm better off being alone",
        "Is this the end of all the endings?",
        "Say my name and everything just stops",
        "There's gliiter on the floor outside the lobby",
        "Hold on to the memories they would hold on to you",
        "So it goes...!"
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleReputationclick =()=>{
        const randomQuote = getRandomItem(reputationQuotes); 
        setReputationQuote(randomQuote);
    }

    return(
        <div className="Tayquotes">
            <button onClick={handleReputationclick}>
                Generate quote
            </button>
            <p>{reputationQuote}</p>
        </div>
    );
}

export default Reputation;
