import React, { useState } from 'react';
import styles from './ImageUploader.module.css';

export default function ImageUploader({ onUpload }) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previews, setPreviews] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);

        // Generate preview URLs
        const previewUrls = files.map(file => URL.createObjectURL(file));
        setPreviews(previewUrls);
    };

    const handleUpload = () => {
        if (selectedFiles.length && onUpload) {
            onUpload(selectedFiles);
        }
    };

    return (
        <div className={styles.uploadContainer}>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className={styles.fileInput}
            />
            <label htmlFor="fileInput" className={styles.fileInputLabel}>
                Choose images or drag and drop
            </label>
            
            {previews.length > 0 && (
                <div className={styles.previewContainer}>
                    {previews.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Preview ${index}`}
                            className={styles.previewImage}
                        />
                    ))}
                </div>
            )}
            
            {previews.length > 0 && (
                <button
                    onClick={handleUpload}
                    className={styles.uploadButton}
                >
                    Upload {previews.length} {previews.length === 1 ? 'Image' : 'Images'}
                </button>
            )}
        </div>
    );
}