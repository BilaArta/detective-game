import { Component, useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Signin extends Component {
    initialState = {
        username: "",
    };

    state = this.initialState;

    handleChange = (event) => {
        const { username, value } = event.target;

        this.setState({
            [username]: value,
        });
    };

    submitForm = () => {
        this.props.handleChange(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { username } = this.state;

        return (
            <form>
                <TextField
                    id="username"
                    size="small"
                    label="Username"
                    defaultValue=" "
                    value={username}
                    onChange={this.handleChange}
                />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Signin;
