import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import { uploadAndIdentify } from './uploadAndIdentify';
import './ResultsTable.css'; // Add this new CSS file

function App() {
  const [results, setResults] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleUpload = async (images) => {
    console.log('[Frontend] Upload triggered with images:', images);
    const previewUrls = images.map(file => URL.createObjectURL(file));
    setPreviews(previewUrls); // Save for table use

    try {
      const result = await uploadAndIdentify(images);
      console.log('Identification result:', result);
      console.log('Species list:', result.species); // Should be array of objects
      console.log('Results length:', result.species.length);
      setResults(result.species);
    } catch (error) {
      console.error('Error during upload and identification:', error);
    }
  };

  return (
    <div className="App">
      <h1 className="text-xl font-bold">Bird Watcher App</h1>
      <ImageUploader onUpload={handleUpload} />

      {results.length > 0 && (
        <table className="results-table">
          <thead>
            <tr>
              <th>Bird Species Name</th>
              <th>Your Image</th>
              <th>Suggested Image</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {results.map((bird, i) => (
              <tr key={i}>
                <td>{bird.name}</td>
                <td><img src={previews[i]} alt="Uploaded" className="thumb" /></td>
                <td><img src={bird.image} alt="Suggested" className="thumb" /></td>
                <td>{(bird.confidence * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;


/*
import React from 'react';
import ImageUploader from './components/ImageUploader';
import { uploadAndIdentify } from './uploadAndIdentify';  

function App() {
  const handleUpload = async (images) => 
  {
    console.log('[Frontend] Upload triggered with images:', images);
    try {
      const result = await uploadAndIdentify(images);
      console.log('Identification result:', result);
    }
    catch (error) {
      console.error('Error during upload and identification:', error);
    }
  };

  return (
    <div className="App">
      <h1 className="text-xl font-bold">Bird Watcher App</h1>
      <ImageUploader onUpload={handleUpload} />
    </div>
  );
}

export default App;
*/