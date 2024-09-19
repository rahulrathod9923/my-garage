import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import AvailabilityList from './components/AvailabilityList';
import AvailabilityStatus from './components/AvailabilityStatus';
import CustomerSignUp from './components/CustomerSignUp';
import RequestAccepted from './components/RequestAccepted';
import RequestReceived from './components/RequestReceived';
import VehicleDetails from './components/VehicleDetails';
import Home from './components/Home';
import TechnicianSignup from './components/TechnicianSignUp';
import TechnicianLogin from './components/TechnicianLogin';
import CustomerLogin from './components/CustomerLogin';

function App() {
  // this is a comment on local branch
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/availability-list" element={<AvailabilityList />} />
            <Route path="/availability-status" element={<AvailabilityStatus />} />
            <Route path="/customer-signup" element={<CustomerSignUp />} />
            <Route path="/customer-login" element={<CustomerLogin />} />
            <Route path="/technician-signup" element={<TechnicianSignup />} />
            <Route path="/technician-login" element={<TechnicianLogin />} />
            <Route path="/request-accepted" element={<RequestAccepted />} />
            <Route path="/request-received" element={<RequestReceived />} />
            <Route path="/vehicle-details" element={<VehicleDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
