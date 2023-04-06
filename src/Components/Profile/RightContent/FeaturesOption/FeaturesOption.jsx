import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";

const FeaturesOption = () => {
	return (
		<div className="my-6 lg:flex justify-between">
			<div className="flex gap-4 mb-5 lg:mb-0">
				<Link
					to="/profile"
					className="active p-2 bg-gray-50 hover:bg-cyan-500 hover:text-white text-cyan-500 rounded-md font-semibold"
				>
					Posts
				</Link>
				<Link
					to="/profile"
					className="p-2 bg-gray-50 hover:bg-cyan-500 hover:text-white text-cyan-500 rounded-md font-semibold"
				>
					Pictures
				</Link>
				<Link
					to="/profile"
					className="p-2 bg-gray-50 hover:bg-cyan-500 hover:text-white text-cyan-500 rounded-md font-semibold"
				>
					Videos
				</Link>
				<Link
					to="/profile"
					className="p-2 bg-gray-50 hover:bg-cyan-500 hover:text-white text-cyan-500 rounded-md font-semibold"
				>
					Friends
				</Link>
				<Link
					to="/profile"
					className="p-2 bg-gray-50 hover:bg-cyan-500 hover:text-white text-cyan-500 rounded-md font-semibold"
				>
					About
				</Link>
			</div>

			<div>
				<form className="flex">
					<div className="relative max-w-sm">
						<input
							type="text"
							id="voice-search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
							placeholder="Search"
							required
						/>
						<FiSearch className="absolute right-3 bottom-3 text-gray-500 hover:text-black"></FiSearch>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FeaturesOption;
