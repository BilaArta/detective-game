import { Component } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Login extends Component {
  initialState = {
    username:"",
    password:"",
  };

  state = this.initialState;

  handleChangeUser = (event) => {
    const { username, value } = event.target;

    this.setState({
        [username]: value,
    });
  };

  handleChangePassword = (event) => {
    const { password, value } = event.target;

    this.setState({
        [password]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
        <form>
            <TextField
                id="username"
                size="small"
                label="Username"
                defaultValue=" "
                value={username}
                onChange={this.handleChangeUser}
            />
            <TextField
                  id="password"
                  size="small"
                  label="password"
                  defaultValue=" "
                  value={password}
                  onChange={this.handleChangePassword}
                />
            <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
    );
}
}
export default Login