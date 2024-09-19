import React from 'react';
import { Link } from 'react-router-dom';
import './css/sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/availability-list">Availability List</Link></li>
      <li><Link to="/availability-status">Availability Status</Link></li>
      <li><Link to="/customer-signup">Customer SignUp</Link></li>
      {/* <li><Link to="/customer-login">Customer Login</Link></li> */}
      <li><Link to="/technician-signup">Technician SignUp</Link></li>
      {/* <li><Link to="/technician-login">Technician Login</Link></li> */}
      <li><Link to="/request-accepted">Request Accepted</Link></li>
      <li><Link to="/request-received">Request Received</Link></li>
      <li><Link to="/vehicle-details">Vehicle Details</Link></li>
    </ul>
  </div>
);

export default Sidebar;
