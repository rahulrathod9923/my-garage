import React from 'react';
import './css/requestReceived.css'

class RequestReceived extends React.Component {
    render() {
        return (
            <div className="requestContainer">
                <p>Hi Technician! Request From:</p>
                <ul>
                    <li id="li1">Vehicle Details Are:</li>
                    <li>Name: Maruti Suzuki</li>
                    <li>Model: xyz</li>
                    <li>Year: 2015</li>
                    <li>Fuel Type: Diesel</li>
                    <li>Issue: Engine</li>
                    <li>Description: I don't know what the problem is exactly</li>
                </ul>
                <button className="accept">Accept</button>
                <button className="skip">Skip</button>
            </div>
        );
    }
}

export default RequestReceived;
