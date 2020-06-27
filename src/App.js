import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar></Navbar>
				<TourList></TourList>
			</React.Fragment>
		);
	}
}

export default App;
