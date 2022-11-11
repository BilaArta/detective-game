// import logo from "./logo.svg";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login/Login";
import Signin from "./Components/Signin/Signin";
import Header from "./Components/Home/Header";

function App() {
	return (
		<div className="container mx-auto px-4 pt-4">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signin" element={<Signin />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
