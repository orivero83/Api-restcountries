import { useState, useEffect } from 'react';
import axios from 'axios';
import './PaisesAmerica.css'; // Importa el archivo de estilos CSS

const PaisesAmerica = (props) => {
  const americaData = props.DataAmerica;

  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountryData = async (countryName) => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        setSelectedCountry(response.data[0]);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    if (selectedCountry === null && americaData.length > 0) {
      fetchCountryData(americaData[0].name);
    }
  }, [americaData, selectedCountry]);

  const handleCountryClick = async (countryName) => {
    fetchCountryData(countryName);
  };

  const fetchCountryData = async (countryName) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setSelectedCountry(response.data[0]);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  return (
    <div className='container'>
      <div className="App">
        <div className="btn-container">
          {americaData.map((country, index) => (
            <button key={index} className="country-btn" onClick={() => handleCountryClick(country.name)}>
              {country.name}
            </button>
          ))}
        </div>
      </div>

      <div className="country-info">
        {selectedCountry && (
          <>
            <h2>Información sobre {selectedCountry.name.common}</h2>
            <ul>
              <li><strong>Nombre:</strong> {selectedCountry.name.common}</li>
              <li><strong>Capital:</strong> {selectedCountry.capital}</li>
              <li><strong>Población:</strong> {selectedCountry.population}</li>
              <li><strong>Moneda:</strong> {Object.values(selectedCountry.currencies)[0].name}</li>
              <li><strong>Idiomas:</strong> {Object.values(selectedCountry.languages).join(', ')}</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default PaisesAmerica;
