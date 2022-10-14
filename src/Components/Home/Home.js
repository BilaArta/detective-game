import { Component } from "react";
import Signin from "./Signin";
class Home extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to Detective Game</h1>
				<br></br>
				<Signin />
			</div>
		);
	}
}

export default Home;
