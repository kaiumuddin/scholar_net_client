import React from "react";
import ChatBodyMyself from "./ChatBodyMyself";
import ChatBodyOther from "./ChatBodyOther";
import ChatDetails from "./ChatDetails";
import ChatUserList from "./ChatUserList";

export default function ChatHomePage() {
	return (
		<div>
			<div className="container mx-auto border-2 mb-10">
				{/* <!-- headaer --> */}
				<div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
					<div className="font-semibold text-2xl">Chat</div>
					{/* <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
						RA
					</div> */}
				</div>
				{/* <!-- end header --> */}
				{/* <!-- Chatting --> */}
				<div className="flex flex-row justify-between bg-white">
					{/* <!-- chat list --> */}
					<div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
						{/* <!-- search compt --> */}
						<div className="border-b-2 py-4 px-2">
							<input
								type="text"
								placeholder="search chatting"
								className="py-2 px-4 border-2 border-gray-200 rounded-full w-full"
							/>
						</div>
						{/* <!-- end search compt --> */}
						{/* <!-- user list --> */}

						<ChatUserList></ChatUserList>
						<ChatUserList></ChatUserList>
						<ChatUserList></ChatUserList>

						{/* <!-- end user list --> */}
					</div>
					{/* <!-- end chat list --> */}
					{/* <!-- message --> */}
					<div className="w-full px-5 flex flex-col justify-between">
						<div className="flex flex-col mt-5">
							<ChatBodyMyself></ChatBodyMyself>
							<ChatBodyOther></ChatBodyOther>
							<ChatBodyMyself></ChatBodyMyself>
							<ChatBodyOther></ChatBodyOther>
						</div>
						<div className="py-5">
							<input
								className="w-full py-5 px-5 rounded-full"
								type="text"
								placeholder="Your message here..."
							/>
						</div>
					</div>

					{/* <div className="w-2/5 border-l-2 px-5 hidden md:block">
						<ChatDetails></ChatDetails>
					</div> */}
				</div>
			</div>
		</div>
	);
}
