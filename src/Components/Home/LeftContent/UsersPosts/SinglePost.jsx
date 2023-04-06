import React from "react";
import { Card, Dropdown, Avatar, Textarea, Label } from "flowbite-react";
import { NavLink } from "react-router-dom";
import like from "../../../../Assets/iconImage/like.png";
import heart from "../../../../Assets/iconImage/heart.png";
import sad from "../../../../Assets/iconImage/sad.png";
import sad2 from "../../../../Assets/iconImage/sad2.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function SinglePost() {
	const [commentStatues, setCommentStatus] = useState(false);
	const [showShareLink, setShowShareLink] = useState(false);
	const [copyStatus, setCopyStatus] = useState(false);

	return (
		<div className="w-full md:max-w-2xl   ms-52 md:ms-0 mt-5 mb-3">
			<Card>
				<div className="flex justify-between flex-col md:flex-row my-2">
					<div className="flex font-bold  my-5">
						<img
							src="https://i.ibb.co/nfGfPs0/dipika.webp"
							alt="user profile"
							className="h-12 w-12 rounded-full border-2 border-green-500"
						/>
						<div className="flex flex-col mx-2">
							<p className="text-lg text-blue-600">
						
								Susmita sen{" "}
								<span className="text-gray-400 text-sm">
									Create this post
								</span>{" "}
							</p>
							<p className="text-md mt-1 mx-1 text-gray-400">
						
								<i className="fa-solid fa-globe"></i> Published
								Sep, 12, 2022
							</p>
						</div>
					</div>
					<Dropdown inline={true} label="">
						<Dropdown.Item>
							<NavLink
								to="/"
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								<button
									data-modal-target="EditPostModal"
									data-modal-toggle="EditPostModal"
								>
							
									<i className="fa-solid fa-pen-to-square mx-2"></i>{" "}
									Edit post
								</button>
							</NavLink>
						</Dropdown.Item>
						<Dropdown.Item>
							<NavLink
								to="/"
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								<span>
							
									<i className="fa-solid fa-trash-can mx-2"></i>{" "}
									Delete post
								</span>
							</NavLink>
						</Dropdown.Item>

						<Dropdown.Item>
							<NavLink
								to="/"
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								<span>
							
									<i className="fa-solid fa-eye-slash mx-2"></i>{" "}
									Hide post
								</span>
							</NavLink>
						</Dropdown.Item>

						<Dropdown.Item>
							<NavLink
								to="/"
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								<button
									data-modal-target="ReportModal"
									data-modal-toggle="ReportModal"
								>
							
									<i className="fa-solid fa-flag-checkered mx-2"></i>{" "}
									Report post
								</button>
							</NavLink>
						</Dropdown.Item>
					</Dropdown>
				</div>

				<div className="flex flex-col items-center my-2 pb-10">
					<img
						className="mb-3 h-auto w-auto shadow-lg rounded-lg"
						src="https://i.ibb.co/9qJF3hJ/study.jpg"
						alt="Bonnie"
					/>
					<p className="mb-1 text-md  my-2 font-medium text-start text-gray-600">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>

					<p className="text-md text-gray-400 my-2">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Eius magni totam, saepe a atque, porro laudantium
						repellendus veniam ad minus ut optio facilis beatae nemo
						vel! Odit suscipit commodi laudantium quaerat,
						cupiditate dolore, accusamus ullam quibusdam eos impedit
						aliquam adipisci!
					</p>
					<hr className="bg-gray-400 border w-full my-4 clear-both" />
					<div className="flex justify-between flex-col md:flex-row">
						<div>
							<div className="grid md:grid-cols-2 lg:grid-cols-4 invisible	md:visible	 justify-around  my-10">
								<div className="mx-4">
									<i className="fa-solid fa-eye text-green-500"></i>{" "}
									<p className="-mt-10 ms-5 text-sm text-gray-500">
										560
									</p>
								</div>
								<div className="mx-4">
							
									<i className="fa-regular fa-message text-green-500"></i>{" "}
									<p className="-mt-10 ms-5 text-sm text-gray-500">
										200
									</p>
								</div>
								<div className="mx-4">
							
									<i className="fa-regular fa-star text-green-500"></i>{" "}
									<p className="-mt-10 ms-5 text-sm text-gray-500">
										230
									</p>
								</div>
								<div className="mx-4">
							
									<i className="fa-solid fa-share-nodes text-green-500"></i>{" "}
									<p className="-mt-10 ms-5 text-sm text-gray-500">
										110
									</p>
								</div>
							</div>
							<div className="mt-4 flex flex-col md:flex-row space-x-3 lg:mt-6">
								<button className="flex items-center my-2 rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
									<div className="flex justify-around">
								
										<p>Like</p>{" "}
										<i className="fa-regular fa-thumbs-up mx-2 text-lg mx-2 -mt-1"></i>{" "}
									</div>
								</button>

								<div>
									<button
										className="items-center my-2 rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
										onClick={() =>
											setCommentStatus(
												commentStatues === false
													? true
													: false
											)
										}
									>
										<div className="flex py-1">
									
											<p>Comment</p>{" "}
											<i className="fa-solid fa-comment-dots mx-2 text-lg -mt-1"></i>
										</div>
									</button>
								</div>
								<button
									className="inline-flex items-center my-2 rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
									onClick={() =>
										setShowShareLink(
											showShareLink === false
												? true
												: false
										)
									}
								>
									<span>
								
										Share{" "}
										<i className="fa-solid fa-share-from-square  mx-2 text-lg"></i>
									</span>
								</button>
							</div>
						</div>

						<div className="mx-8">
							<div className=" -ms-5 md:ms-12 mt-8">
						
								Replay{" "}
								<i className="fa-solid fa-reply-all mx-2 mb-12 text-lg"></i>
							</div>
							<div className="flex justify-center">
								<div className="hover:cursor-pointer">
									<React.Fragment>
										<div className="flex justify-between ms-7 -mt-8 hidden md:block">
											<Avatar.Group>
												<Avatar
													img={like}
													rounded={true}
												/>
												<Avatar
													img={heart}
													rounded={true}
												/>
												<Avatar
													img={sad}
													rounded={true}
												/>
												<Avatar
													img={sad2}
													rounded={true}
												/>
											</Avatar.Group>
										</div>
									</React.Fragment>
								</div>
								<p className="mx-3 -mt-5 text-gray-600">
							
									30+{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* write comment and show comments  */}
				{commentStatues && (
					<div className="commentSection -mt-5">
						<form>
							<div id="textarea">
								<div className="mb-2 block">
									<Label htmlFor="comment" />
								</div>
								<Textarea
									id="comment"
									placeholder="Write your comment here."
									className="p-4 bg-white"
									required={true}
									rows={3}
								/>
								<button className="text-white bg-gradient-to-r  ps-3  mt-5 from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm ps-2 px-2 py-1 pb-2 text-center mr-2 mb-5">
							
									Send comment{" "}
									<i className="fa-solid fa-paper-plane mx-2 text-white text-lg"></i>{" "}
								</button>
							</div>
						</form>

						{/* show comment  */}
						<>
							{[0, 1, 2, 3].map((index) => (
								<div key={index} className="mt-6 mb-10">
									<div className="flex font-bold  my-5">
										<img
											src="https://i.ibb.co/q7MNxRK/g3.jpg"
											alt="user profile"
											className="h-10 w-11 rounded-full border-2 border-green-500"
										/>
										<div className="flex flex-col mx-2">
											<p className="text-lg text-blue-600">
										
												Linda smith{" "}
												<span className="text-gray-400 text-sm -mt-2">
													post date: 04/03/2023
												</span>{" "}
											</p>
										</div>
									</div>

									<p className="comment text-sm text-gray-400 w-86">
										This is a nich planning I think we
										should to obey this. This is a nich
										planning I think we should to obey this.
										This is a nich planning I think we
										should to obey this. This is a nich
										planning I think we should to obey this.
										This is a nich planning I think we
										should to obey this.
									</p>
									<div className=" -ms-5 md:ms-12  float-right hover:cursor-pointer mb-5">
										<i className="fa-solid fa-heart mx-2 mb-12 text-lg text-green-600"></i>
										<i className="fa-solid fa-reply-all mx-2 mb-12 text-lg text-green-600"></i>
									</div>
								</div>
							))}
						</>
					</div>
				)}
				{/* show share link  */}
				<>
					{showShareLink && (
						<>
					
							{
								<div className="-mt-5">
									<CopyToClipboard
										text={`${" https://flowbite.com/docs/forms/toggle/#disabled-state"}`}
									>
										<p
											onClick={() => setCopyStatus(true)}
											className="hover:cursor-pointer mb-2"
										>
											{copyStatus ? (
												<p className="text-green-600 text-md">
											
													Copied !!
												</p>
											) : (
												<i className="fa-regular fa-copy text-2xl text-green-600"></i>
											)}
										</p>
									</CopyToClipboard>
									<a
										href="https://flowbite.com/docs/forms/toggle/#disabled-state"
										className="text-blue-400 text-md"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://flowbite.com/docs/forms/toggle/#disabled-state
									</a>
									<p className="my-3 text-gray-400 font-bold text-lg">
								
										Copy this link to share with your
										friends.
									</p>
								</div>
							}
						</>
					)}
				</>
			</Card>
		</div>
	);
}
