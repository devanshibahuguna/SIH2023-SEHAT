import React, { useState } from 'react';

function ButtonSelectSkin() {
  const [color, setColor] = useState(false);
  const [selectedButtons, setSelectedButtons] = useState([]);

  // Function to handle button clicks
  const handleButtonClick = (buttonValue) => {
    // Check if the button is already selected
    if (selectedButtons.includes(buttonValue)) {
      // If selected, remove it from the array
      setColor(false);
      setSelectedButtons(selectedButtons.filter((value) => value !== buttonValue));
    } else {
      // If not selected, add it to the array
      setColor(true);
      setSelectedButtons([...selectedButtons, buttonValue]);
    }
  };

  // An array of button values
  const buttonValues = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5", "Button 6", "Button 7", "Button 8"];

  return (
    <div className='mt-10'>
      {buttonValues.map((buttonValue, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(buttonValue)}
          className={selectedButtons.includes(buttonValue) ? 'selected' : 'notselected'}
        // className='w-[200px] bg-[#DEF0FF] py-2 mx-20 my-4 rounded-full'
        >
          {buttonValue}
        </button>
      ))}

      {/* to see btns selected */}
      <div className='w-[100vw] flex flex-col text-center mt-10 h-[20vh]'>
        <p className='text-[#0038A5]'>Selected Problems:</p>
        <ul className='flex mx-auto my-4'>
          {selectedButtons.map((button, index) => (
            <li className=' mx-2 ' key={index}>{button}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ButtonSelectSkin;
