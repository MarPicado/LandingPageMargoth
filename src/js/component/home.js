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
					img={
						"https://www.splendidbeast.com/wp-content/uploads/2016/02/The-Napoleon-Large.png"
					}
					link={"http://www.google.com"}
					buttoncolor={"primary"}
				/>
				<Card
					title={"Title #2"}
					body={"Body card2"}
					img={
						"https://www.giveamasterpiece.com/images/funny-dog-portrait-oil-GAM2974_1000.jpg"
					}
					link={"http://www.google.com"}
					buttoncolor={"success"}
				/>
				<Card
					title={"Title #3"}
					body={"Body card3"}
					img={
						"https://d2j6dbq0eux0bg.cloudfront.net/images/12162034/1198649352.jpg"
					}
					link={"http://www.google.com"}
					buttoncolor={"danger"}
				/>
				<Card
					title={"Title #4"}
					body={"Body card4"}
					img={
						"https://www.visualchaos.co.uk/wp-content/uploads/2020/03/Edward1-sq.jpg"
					}
					link={"http://www.google.com"}
					buttoncolor={"secondary"}
				/>
			</div>
		</div>
	);
}
