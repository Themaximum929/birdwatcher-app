import React, { useState } from 'react';

function ImageUploader({ onUpload}) {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);   

    const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);

    if (onUpload) {
        onUpload(files); // Pass array of files
    }
    };

    const handleUpload = () => {
        if (image && onUpload) {
            onUpload(image);
        }
    };

    return (
        <div className = "p-4 border rounded shadow">
            <input type = "file" accept = "image/*" multiple onChange = {handleFileChange} />
            {preview && (
                <div className = "mt-2">
                    <img src = {preview} alt = "Preview" className = "w-32 h-32 object-cover rounded" />
                </div>
            )}
        <button onClick = {handleUpload} className = "mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Upload
        </button>   
        </div>
    );
}

export default ImageUploader;   