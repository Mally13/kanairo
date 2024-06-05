import React, { useState } from 'react';
import '../assets/styles/radio.css';

function Radio() {
  const [selectedOption, setSelectedOption] = useState("return");
  const selected = {
    backgroundColor:"#C1721B",
    color:"#fff"
  }
  const unselected = {
    backgroundColor:"#fff"
  }


  const handleOptionChange = (value) => {
    setSelectedOption(value);
    console.log(value)
  };

  return (
    <div className="custom-radio">
      <label style={selectedOption === "return" ? selected :unselected}>
        <input
          type="radio"
          value="return"
          checked={selectedOption === "return"}
          onChange={() => handleOptionChange("return")}
        />
        Return
      </label>
      <label style={selectedOption === "oneway" ? selected :unselected}>
        <input
          type="radio"
          value="oneway"
          checked={selectedOption === "oneway"}
          onChange={() => handleOptionChange("oneway")}
        />
        One Way
      </label>
    </div>
  );
}

export default Radio;
