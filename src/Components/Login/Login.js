import { Component } from "react";
import { Grid, Box, TextField } from "@mui/material";

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
			<Grid
				container
				spacing={{ xs: 0, md: 1 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
			>
				{Array.from(Array(3)).map((_, index) => (
					<Grid item xs={4} sm={4} md={4} key={index} mt={1}>
						{index === 1 && (
							<Box
								sx={{
									height: 300,
									backgroundColor: "#f1f2f6",
									textAlignLast: "center",
									padding: 4,
								}}
							>
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
									<input
										type="button btn-primary"
										value="Submit"
										onClick={this.submitForm}
									/>
								</form>
							</Box>
						)}
					</Grid>
				))}
			</Grid>
		);
	}
}

export default Login;
