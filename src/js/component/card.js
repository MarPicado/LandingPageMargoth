import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div class="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src={props.img}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.body}</p>
					<a
						href={props.link}
						className={"btn btn-" + props.buttoncolor}>
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
	link: PropTypes.string,
	buttoncolor: PropTypes.string
};
