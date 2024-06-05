// src/context/AirportContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AirportContext = createContext();

const AirportContextProvider = ({ children }) => {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await axios.get(
          'https://api.amadeus.com/v1/reference-data/locations?type=AIRPORT',
          {
            headers: {
              'Authorization': `Bearer ${process.env.API_KEY}`
            }
          }
        );
        setAirports(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching airports:', error);
      }
    };

    fetchAirports();

    // Clean up function if needed
    return () => {
      // Any cleanup code
    };
  }, []);

  return (
    <AirportContext.Provider value={{ airports, loading }}>
      {children}
    </AirportContext.Provider>
  );
};

export { AirportContext, AirportContextProvider };
