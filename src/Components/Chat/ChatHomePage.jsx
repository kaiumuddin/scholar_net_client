import React from "react";

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

						<div className="flex flex-row py-4 px-2 justify-center items-center border-b-2 border-l-4 border-blue-400">
							<div className="mr-2 aspect-square w-16">
								<img
									src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
									className="object-cover  rounded-full"
									alt=""
								/>
							</div>
							<div className="w-full hidden lg:block">
								<div className="text-lg font-semibold">
									MERN Stack
								</div>
								<span className="text-gray-500">
									Lusi : Thanks Everyone...
								</span>
							</div>
						</div>

						{/* <!-- end user list --> */}
					</div>
					{/* <!-- end chat list --> */}
					{/* <!-- message --> */}
					<div className="w-full px-5 flex flex-col justify-between">
						<div className="flex flex-col mt-5">
							<div className="flex justify-end mb-4">
								<div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
									Welcome to group everyone !
								</div>
								<img
									src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
									className="object-cover h-8 w-8 rounded-full"
									alt=""
								/>
							</div>
							<div className="flex justify-start mb-4">
								<img
									src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
									className="object-cover h-8 w-8 rounded-full"
									alt=""
								/>
								<div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quaerat at praesentium,
									aut ullam delectus odio error sit rem.
									Architecto nulla doloribus laborum illo rem
									enim dolor odio saepe, consequatur quas?
								</div>
							</div>
							<div className="flex justify-end mb-4">
								<div>
									<div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
										Lorem ipsum dolor, sit amet consectetur
										adipisicing elit. Magnam, repudiandae.
									</div>

									<div className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Debitis, reiciendis!
									</div>
								</div>
								<img
									src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
									className="object-cover h-8 w-8 rounded-full"
									alt=""
								/>
							</div>
							<div className="flex justify-start mb-4">
								<img
									src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
									className="object-cover h-8 w-8 rounded-full"
									alt=""
								/>
								<div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
									happy holiday guys!
								</div>
							</div>
						</div>
						<div className="py-5">
							<input
								className="w-full py-5 px-5 rounded-full"
								type="text"
								placeholder="Your message here..."
							/>
						</div>
					</div>

					<div className="w-2/5 border-l-2 px-5 hidden md:block">
						<div className="flex flex-col">
							<div className="font-semibold text-xl py-4">
								Mern Stack Group
							</div>
							<img
								src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
								className="object-cover rounded-xl h-64"
								alt=""
							/>
							<div className="font-semibold py-4">
								Created April 6, 2023
							</div>
							<div className="font-light">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Deserunt, perspiciatis!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
