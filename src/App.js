import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css'; 

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbx4jIGb2kM5ORe3XX_22r2agpg-hq4SmcHTILRzMRv8mEHme-ThNAbsI4-FndPhhZqg/exec')
      .then(response => response.json())
      .then(data => setData(data))
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