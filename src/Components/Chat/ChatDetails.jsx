import React from "react";

function ChatDetails() {
	return (
		<div className="flex flex-col">
			<div className="font-semibold text-xl py-4">Mern Stack Group</div>
			<img
				src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
				className="object-cover rounded-xl h-64"
				alt=""
			/>
			<div className="font-semibold py-4">Created April 6, 2023</div>
			<div className="font-light">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Deserunt, perspiciatis!
			</div>
		</div>
	);
}

export default ChatDetails;
