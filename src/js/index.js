//import react into the bundle
import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
	return (
		<div className="Countbar">
			<h1 className="four">{props.digitfour}</h1>
			<h1 className="three">{props.digitthree}</h1>
			<h1 className="two">{props.digittwo}</h1>
			<h1 className="one">{props.digitone}</h1>
		</div>
	);
}

SimpleCounter.PropTypes = {
	digitfour: PropTypes.number,
	digitthree: PropTypes.number,
	digittwo: PropTypes.number,
	digitone: PropTypes.number,
};

let counter = 0;

export var Interval = setInterval(() => {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitone={one}
			digittwo={two}
			digitthree={three}
			digitfour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
