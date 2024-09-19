import React from 'react';
import './css/vehicleDetails.css'

class VehicleDetails extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Vehicle Details</h2>
                <form action="" method="post">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name="model" placeholder="Enter your vehicle Name" /></td>
                        </tr>
                        <tr>
                            <td>Model:</td>
                            <td><input type="text" name="model" placeholder="Enter your vehicle model" /></td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td><input type="text" name="year" placeholder="Enter Model year of vehicle" /></td>
                        </tr>
                        <tr>
                            <td>Fuel Type:</td>
                            <td>
                                <select type="select" required>
                                    <option value="" disabled selected>Select a fuel type</option>
                                    <option value="petrol">Petrol</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="cng">CNG</option>
                                    <option value="electric">Electric</option>
                                    <option value="other">other</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Issue:</td>
                            <td>
                                <select type="select" required>
                                    <option value="" disabled selected>Select a Problem</option>
                                    <option value="petrol">Engine</option>
                                    <option value="diesel">Battery</option>
                                    <option value="electric">Wheel</option>
                                    <option value="other">Other</option>
                                    <option value="unknown">I Don't know</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td><textarea type="text" name="description" placeholder="Describe something about your issue to get a good Technician" required></textarea></td>
                        </tr>
                        <tr>
                            <td><input className="submit" type="submit" name="submit" value="Submit" /></td>
                            <td><input className="reset" type="reset" name="reset" value="Reset" /></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default VehicleDetails;
