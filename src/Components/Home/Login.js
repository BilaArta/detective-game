import { Component } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Login extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			username: "",
			password: "",
		};

		this.state = this.initialState;
	}

	handleChange = (event) => {
		const { id, value } = event.target;

		this.setState({
			[id]: value,
		});
	};

	submitForm = () => {
		alert("A name was submitted: " + this.state.username);
		//this.props.handleChange(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { username, password } = this.state;

		return (
			<form>
        <div>
          <TextField
              id="username"
              size="small"
              label="Username"
              defaultValue=" "
              value={username}
              onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            id="password"
            size="small"
            label="password"
            defaultValue=" "
            value={password}
            onChange={this.handleChange}
          />
        </div>
				<input type="button btn-primary" value="Submit" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Login;
