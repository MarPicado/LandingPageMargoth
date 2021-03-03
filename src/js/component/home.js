import React from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
            <Jumbotron/>
		</div>
	);
}
