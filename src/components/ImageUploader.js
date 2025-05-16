import React, { useState } from 'react';

function ImageUploader({ onUpload}) {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);   

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));  
        }
    };

    const handleUpload = () => {
        if (image && onUpload) {
            onUpload(image);
        }
    };

    return (
        <div className = "p-4 border rounded shadow">
            <input type = "file" accept = "image/*" onChange = {handleChange} />
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