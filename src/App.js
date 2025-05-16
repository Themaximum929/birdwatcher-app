import './App.css';
import React, { useState } from 'react';  
import ImageUpLoader from './components/ImageUploader';

function App() {
  return (
    <div className = "App">
      <h1 className = "text-2xl font-bold mb-4">Bird Watcher App</h1>
      <ImageUpLoader onUpload = {(image) => console.log("Uploaded image: ", image)} /> 
    </div>
  );
}

export default App;
