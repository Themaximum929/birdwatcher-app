import React from 'react';
import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div className="App">
      <h1 className="text-xl font-bold">Bird Watcher App</h1>
      <ImageUploader onUpload={(image) => console.log('Uploaded image:', image)} />
    </div>
  );
}

export default App;
