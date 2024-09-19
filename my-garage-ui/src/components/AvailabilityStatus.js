import React from 'react';
import './css/availabilityStatus.css'


class AvailabilityStatus extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Availability Status</h3>
                <button className="available">Available</button>
                <button className="notAvailable">No Available</button>
            </div>
        );
    }
}

export default AvailabilityStatus;
