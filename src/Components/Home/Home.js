import { Component } from "react";
import Signin from "./Signin";
import Login from "./Login";
class Home extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to Detective Game</h1>
				<br></br>
				{/* <Signin /> */}
				<h1>Hello Login</h1>
				<Login />
			</div>
		);
	}
}

export default Home;
