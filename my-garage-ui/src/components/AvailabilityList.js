import React from 'react';

class AvailabilityList extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Available Technicians are:</h3>
                <ul id="available">
                    {/* Technicians will be added dynamically here */}
                </ul>
            </div>
        );
    }
}

export default AvailabilityList;
