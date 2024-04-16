import React, { useState } from 'react';
import emojisData from '../emojis.json';


const Choice = ({ inputValue }) => {
    const filteredEmojis = emojisData.filter((emoji) => {
        return emoji.keywords.includes(inputValue);
    });

    const handleCopy = (emojiSymbol) => {
        navigator.clipboard.writeText(emojiSymbol).then(function() {
            alert(`Copied ${emojiSymbol} to clipboard!`)
        }, function(err) {
            console.log(err)
        });
    }

    return (
        <div id="listOfEmoji">
            {filteredEmojis.map((emoji) => (
                <div id={emoji.title}onClick={()=> handleCopy(emoji.symbol)}>{emoji.symbol}</div>
            ))}
        </div>
    )
};

export default Choice;