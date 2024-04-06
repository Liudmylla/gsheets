import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css'; 

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbz2Lvzp_g0AeUElg6SbbQWiPirtRhL4CCCqkVYgVoopC9jrvQRoyBWIfu1jggJCfHEG/exec')
      .then(response => response.json())
      .then(data =>setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Data from Google Sheets</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.Title} content={item.Content} />
        ))}
      </div>
    </div>
  );
}

export default App;