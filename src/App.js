import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css'; 

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbyXxYAUvRyXD4vbn5si62oKvuaaAGZUa8kSSEoQ1qwyyzr6tqb8K8YGlVRtU3LEg2On/exec')
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