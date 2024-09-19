import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/technicianSignUp.css';
import './css/PopUpEmailExists.css';
// import TechnicianPopUpEmailExists from './TechnicianPopUpEmailExists'; // Correct import

const TechnicianSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    city: '',
    education: '',
    specialization: '',
    experience: '',
    garage: ''
  });

  const [showDialog, setShowDialog] = useState(false);
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEmailBlur = async () => {
    const { email } = formData;

    try {
      const response = await axios.get(`http://localhost:9191/technician/login/${email}`);
      const technician = response.data;

      if (technician && technician.email === email) {
        setEmailError(<p style={{ fontSize: '12px', marginBottom: '-5px' }}>Email already exist please login</p>);
        // setEmailError('Email already exists');
        setShowDialog(true);
      } else {
        setEmailError('');
        setShowDialog(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching email: ' + error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (showDialog) {
      return; // If dialog is shown, do not proceed with submission
    }

    const { name, email, password, contact, city, education, specialization, experience, garage } = formData;

    try {
      const response = await axios.post('http://localhost:9191/technician/signup', {
        name,
        email,
        password,
        contact,
        city,
        education,
        specialization,
        experience,
        garage
      });

      alert(response.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering technician');
    }
  };

  const handleLogin = () => {
    navigate('/technician-login');
  };

  return (
    <div className="container">
      <h2>Technician SignUp</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                {emailError && <span className="error">{emailError}</span>}
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Contact No:</td>
              <td>
                <input
                  type="number"
                  name="contact"
                  placeholder="Enter your Mobile No:"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>City:</td>
              <td>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Education:</td>
              <td>
                <input
                  type="text"
                  name="education"
                  placeholder="Enter your Education"
                  value={formData.education}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Specialization:</td>
              <td>
                <input
                  type="text"
                  name="specialization"
                  placeholder="Enter your Specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Experience:</td>
              <td>
                <input
                  type="text"
                  name="experience"
                  placeholder="Enter your Experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Garage/Store:</td>
              <td>
                <input
                  type="text"
                  name="garage"
                  placeholder="Enter your Garage/Store"
                  value={formData.garage}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <button className="submit" type="submit" name="submit">Submit</button>
              </td>
              <td>
                <button className="login" onClick={handleLogin}>Login</button>
              </td>
              <td>
                <button className="reset" type="reset" name="reset">Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <TechnicianPopUpEmailExists trigger={showDialog} setTrigger={setShowDialog} />
    </div>
  );
};

const TechnicianPopUpEmailExists = ({ trigger, setTrigger }) => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/technician-login');
    setTrigger(false);
    };

  const handleCancel = () => {
    setTrigger(false);
  };

  return trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <p>Email already exists, please login:</p>
        <button onClick={handleLogin}>OK</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  ) : (
    ""
    );
    };
    
    export default TechnicianSignup;