import { Component } from "react";

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
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	submitForm = () => {
		alert("A name was submitted: " + this.state);
		//this.props.handleChange(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { username, password } = this.state;

		return (
			<form>
				<label htmlFor="username">Username :</label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={this.handleChange}
				/>
				<br></br>
				<input
					type="text"
					name="password"
					id="password"
					value={password}
					onChange={this.handleChange}
				/>
				<input type="button" value="Submit" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Login;
