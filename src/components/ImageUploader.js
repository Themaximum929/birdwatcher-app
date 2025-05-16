import React, { useState } from 'react';

function ImageUploader({ onUpload }) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previews, setPreviews] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);

        // Generate preview URLs
        const previewUrls = files.map(file => URL.createObjectURL(file));
        setPreviews(previewUrls);

        if (onUpload) {
            onUpload(files);
        
    };

    const handleUpload = () => {
        if (selectedFiles.length && onUpload) {
            onUpload(selectedFiles);
        }
    };

    return (
        <div className="p-4 border rounded shadow">
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
            />
            {previews.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {previews.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Preview ${index}`}
                            className="w-32 h-32 object-cover rounded"
                        />
                    ))}
                </div>
            )}
            <button
                onClick={handleUpload}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Upload
            </button>
        </div>
    );
}

export default ImageUploader;