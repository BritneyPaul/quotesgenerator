import { useState } from "react";

function Red(){

    const[redQuote, setRedQuote]= useState('');

    const redQuotes = [
        "Fuck the patriarchy",
        "How can a person know everything at 18 but nothing at 22",
        "Would you still want me when i'm nothing new",
        "Alls well that ends well",
        "Distance, timing, breakdown crying, silence, the train runs off it's tracks",
        "Could you just try to listen!"
    ];

    const getRandomItem = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'string') {
            throw new Error('Input is not a non-empty array of strings');
        }

        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const handleRedClick =()=>{
        const randomQuote =  getRandomItem(redQuotes);
        setRedQuote(randomQuote);
    }

    return(
        <div className="Tayquotes">
            <button onClick={handleRedClick}>
                Generate quote
            </button>
            <p>{redQuote}</p>
        </div>
    );
}

export default Red;
