import React, { useState } from 'react';
import axios from 'axios';
import "./AddStationForm.css"

const AddStationForm = ({ onClose }) => {
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  

  const generateRandomId = () => {
        // Generate a random ID (e.g., using Math.random() and converting it to a string)
        return Math.random().toString(36).substr(2, 9);
  };

  const [stationData, setStationData] = useState({
    id: generateRandomId(),
    name: '',
    longitude: '',
    latitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = generateRandomId(); // Generate random ID
      const response = await axios.post(`https://localhost:7197/Station?id=${stationData.id}&name=${stationData.name}&longitude=${stationData.longitude}&latitude=${stationData.latitude}`, {...stationData });
      console.log('Station created:', response.data);
      setSuccessMessage('Station created succesfully!');
      setErrorMessage('');
    } catch (error) {
      console.error('Error creating station:', error);
      setErrorMessage('Error creating Station');
      setSuccessMessage('');
    }
  };

  return (
    <div className="add-station-form">
      <h2>Add Station</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={stationData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input type="text" id="longitude" name="longitude" value={stationData.longitude} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input type="text" id="latitude" name="latitude" value={stationData.latitude} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default AddStationForm;
