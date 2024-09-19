import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/customerSignUp.css';
// import CustomerPopUpEmailExists from './CustomerPopUpEmailExists'; // Correct import

const CustomerSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    city: ''
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
      const response = await axios.get(`http://localhost:9191/customer/login/${email}`);
      const customer = response.data;

      if (customer && customer.email === email) {
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

    const { name, email, password, contact, city } = formData;

    try {
      const response = await axios.post('http://localhost:9191/customer/signup', {
        name,
        email,
        password,
        contact,
        city
      });

      alert(response.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user');
    }
  };

  const handleLogin = () => {
    navigate('/customer-login');
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <div className="container">
      <h2>Customer/User SignUp</h2>
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
                 {/* {emailError && <span className="error">{emailError}</span>} */}
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

      <CustomerPopUpEmailExists trigger={showDialog} setTrigger={setShowDialog} handleLogin={handleLogin} handleCancel={handleCancel} />
    </div>
  );
};

const CustomerPopUpEmailExists = ({ trigger, setTrigger, handleLogin, handleCancel }) => {
  const navigate = useNavigate();

  const handleTechnicianLogin = () => {
    navigate('/technician-login');
    setTrigger(false);
  };

  const handleCancelClick = () => {
    setTrigger(false);
  };

  return trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <p>Email already exists, please login:</p>
        <button onClick={handleTechnicianLogin}>OK</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CustomerSignUp;
