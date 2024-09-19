import React from 'react';
import axios from 'axios';
import './css/customerLogin.css';

class CustomerLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            const response = await axios.get(`http://localhost:9191/customer/login/${email}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const user = response.data;
            if (user && user.password === password) {
                alert('Login successful');
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error logging in');
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Customer/User Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Email:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Enter your Email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
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
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="submit" type="submit" name="submit" value="Login" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default CustomerLogin;
