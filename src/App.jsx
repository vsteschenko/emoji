import { useState } from 'react';
import Input from './Input';
import Choice from './choice';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <div className="page">Emoji search</div>
      <Input onInputChange={handleInputChange} />
      <div className="page">click on emoji to copy</div>
      <Choice inputValue={inputValue} />
    </>
  );
};

export default App;
