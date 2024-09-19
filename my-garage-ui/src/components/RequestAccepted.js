import React from 'react';
import './css/availability.css'

class RequestAccepted extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Request Accepted By:</h3>
                <p>Arriving shortly: 05 Min left</p>
            </div>
        );
    }
}

export default RequestAccepted;
