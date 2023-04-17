import React from "react";

function ChatName() {
	return (
		<div className="flex flex-row py-4 px-2 justify-center items-center border-b-2 border-l-4 border-blue-400">
			<div className="mr-2 aspect-square w-16">
				<img
					src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
					className="object-cover  rounded-full"
					alt=""
				/>
			</div>
			<div className="w-full hidden lg:block">
				<div className="text-lg font-semibold">MERN Stack</div>
				<span className="text-gray-500">Lusi : Thanks Everyone...</span>
			</div>
		</div>
	);
}

export default ChatName;
