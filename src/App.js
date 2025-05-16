import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';  

function App() {
  const [images, setImages] = useState([]); 
  const [previewUrls, setPreviewUrls] = useState([]); 

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
    setPreviewUrls(files.map(file => URL.createObjectURL(file))); 
  };


return ( 
    <div style = {{padding: "2rem"}}>  
      <h1> Birdwatcher Image Upload</h1>
      <input type = "file" multiple accept = "image/*" onChange = {handleFileChange} />
      <div style = {{display: "flex", flexWrap: "wrap", marginTop: "1rem"}}> 
        {previewUrls.map((url, index) => (
          <img key = {index} src = {url} alt = "preview" width = "150" stype = {{margin: "0.5rem", borderRadius: "8px"}} /> 
        ))}
      </div> 
    </div>   
  )
}

export default App;
