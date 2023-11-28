import { useState } from "react";

function Folklore(){
    const[folkloreQuote,setFolkloreQuote] = useState('');

    const folkloreQuotes = [
        "I'm a mirrorball",
        "I just wanted you to know that this is me trying",
        "I got wasted like all my potential",
        "Take me to the lakes where all the poets go to die",
        "I don't belong",
        "I love you to the moon and saturn",
        "I had a marvelous time ruining everything",
        "Would it be enough if I can never give you peace",
        "If I'm dead to you then ehy are you at the wake",
        "Look at how my tears richochet",
        "I can go anywhere I want... Just not home",
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleFolkloreClick = ()=>{
        const randomQuote = getRandomItem(folkloreQuotes); /*get a quote from the folklorequotes array*/
        setFolkloreQuote(randomQuote); /*set the random quote chosen folklorequotes array */
    }
    return(
        <div className="Tayquotes">
            <button onClick={handleFolkloreClick}>
                Generate quote
            </button>
            <p >{folkloreQuote}</p>
        </div>
    );
}

export default Folklore;
