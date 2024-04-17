import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
   
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://13.112.86.78:8082/api/student/user-login/', formData);
      console.log('Response:', response.data);
      // Handle response data or any other logic here
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="contact_number">Contact Number:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
