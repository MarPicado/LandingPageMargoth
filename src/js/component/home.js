import React from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card
					title={"Title #1"}
					body={"Body card"}
					img={"https://randomuser.me/api/portraits/women/24.jpg"}
					link={"http://www.google.com"}
					buttoncolor={"primary"}
				/>
				<Card
					title={"Title #2"}
					body={"Body card2"}
					img={"https://randomuser.me/api/portraits/women/25.jpg"}
					link={"http://www.google.com"}
					buttoncolor={"success"}
				/>
				<Card
					title={"Title #3"}
					body={"Body card3"}
					img={"https://randomuser.me/api/portraits/women/24.jpg"}
					link={"http://www.google.com"}
					buttoncolor={"danger"}
				/>
				<Card
					title={"Title #4"}
					body={"Body card4"}
					img={"https://randomuser.me/api/portraits/women/25.jpg"}
					link={"http://www.google.com"}
					buttoncolor={"secondary"}
				/>
			</div>
		</div>
	);
}
