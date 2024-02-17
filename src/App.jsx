import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import './reset.css';
import List from './components/List/index.jsx';

function App() {
  const [photos, setPhotos] = useState([]);

  async function getData() {
    await fetch('https://pixabay.com/api/?key=41962920-7a1b26476181859ab26480701&q=nature&image_type=photo')
      .then(response => response.json())
      .then(function(data) {
          setPhotos(data.hits)
      })
      .catch(error => console.log(error.message))
  };

  useEffect(() => {
    getData()
  }, []);

  return (
      <div className="wrapper">
        <List content={photos}/>
      </div>
  );
};

export default App;
