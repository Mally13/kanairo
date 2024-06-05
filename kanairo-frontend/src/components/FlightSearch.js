import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker'; // Import the DatePicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import Radio from './Radio';
import '../assets/styles/flight.css';
import Select from './Select';
import { AirportContext } from '../context/AirportsContext.js';
import { addDays } from 'date-fns'; // Import format and addDays functions from date-fns


function FlightSearch() {
  const { airports} = useContext(AirportContext);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [selectedTo, setSelectedTo] = useState(null);
  const [selectedDeparture, setSelectedDeparture] = useState(addDays(new Date(), 3));
  const [selectedReturn, setSelectedReturn] = useState(addDays(selectedDeparture, 1));
  const [selectedTravellers, setSelectedTravellers] = useState(null);
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  const handleSelectTo = (option) => {
    setSelectedTo(option);
  };
  const handleSelectFrom = (option) => {
    setSelectedFrom(option);
  };
  const handleSelectDeparture = (date) => {
    setSelectedDeparture(date);
  };
  const handleSelectReturn = (date) => {
    setSelectedReturn(date);
  };
  const handleSelectTravelers = (option) => {
    setSelectedTravellers(option);
  };

  return (
    <div className='flight-wrapper'>
      <div className='flight-type'>
        <Radio />
      </div>
      <div className='flight-search'>
        <div className='from'>
          <h4>Flying From</h4>
          <Select
            options={airports}
            onSelect={handleSelectFrom}
            placeholder='City or Specific Airport'
            defaultValue={null}
          />
          <p>{selectedFrom ? selectedFrom.name : ''}</p>
        </div>
        <div className='to'>
          <h4>Flying To</h4>
          <Select
            options={airports}
            onSelect={handleSelectTo}
            placeholder='City or Specific Airport'
            defaultValue={null}
          />
          <p>{selectedTo ? selectedTo.name : ''}</p>
        </div>
        <div className='depart'>
          <h4>Depart Date</h4>
          <DatePicker
            selected={selectedDeparture}
            onChange={handleSelectDeparture}
            dateFormat="dd MMM'' yy" // Customize date format if needed
          />
          <p>{dayNames[selectedDeparture.getDay()]}</p>
        </div>
        <div className='return-d'>
          <h4>Return Date</h4>
          <DatePicker
            selected={selectedReturn}
            onChange={handleSelectReturn}
            dateFormat="dd MMM'' yy" // Customize date format if needed
          />
          <p>{dayNames[selectedReturn.getDay()]}</p>
        </div>
        <div className='travellers'>
          <h4>Travellers & Class</h4>
          <Select
            options={airports}
            onSelect={handleSelectTravelers}
            placeholder='1 Traveller'
            defaultValue={{ label: '1 Traveller' }}
          />
          <p>{selectedTravellers ? selectedTravellers.class : 'Economy'}</p>
        </div>
        <div className='search'></div>
      </div>
    </div>
  );
}

export default FlightSearch;
