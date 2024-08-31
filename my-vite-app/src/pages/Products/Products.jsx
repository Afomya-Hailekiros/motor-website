import React, { useState, useEffect } from 'react';
import UploadForm from '../UploadForm/UploadForm';

const Products = ({ addUpload }) => {
  const [localUploads, setLocalUploads] = useState([]);

  useEffect(() => {
    // Retrieve uploads from localStorage
    const savedUploads = JSON.parse(localStorage.getItem('uploads')) || [];
    setLocalUploads(savedUploads);
  }, []);

  const handleAddUpload = (newUpload) => {
    setLocalUploads((prevUploads) => [...prevUploads, newUpload]);
    addUpload(newUpload); // Notify App.jsx of the new upload
  };

  return (
    <>
      <UploadForm addUpload={handleAddUpload} />
    </>
  );
};

export default Products;
