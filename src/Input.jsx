import React, { useState } from 'react';

const Input = ({ onInputChange }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    }

    return (
        <div className="page">
            <input type="text" id="input" placeholder="🔍 search..." value={inputValue} onChange={handleChange}/>
        </div>
    );
};

export default Input;