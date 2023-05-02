
import ScaleLoader from "react-spinners/ScaleLoader";
import SinglePost from "./SinglePost";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonLoader from "../../../Shared/ButtonLoader/ButtonLoader";
const UsersPosts = () => {
	//toggle message  and share
	const navigate = useNavigate();
	//set limitation 
const [limitation, setLimitation] = useState(5) ;
	console.log("limitation", limitation);
	// Queries
	const { data = [], isLoading , refetch } = useQuery({
		queryKey: ["limitation"],
		queryFn: () => fetch(`https://scholar-net-subrota.vercel.app/posts/${limitation}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("scholar-net")}`
			}
		})
			.then(res => {
				if (res.status === 403) {
					return navigate("/login")
				} else {
					return res.json();
				}
			})
			.then(data => data)

	});

	return (
		<>
			{data?.map((post) => (
				<>
	
					<SinglePost  data={post}  refetch={refetch} key={post?._id} ></SinglePost>
					

				</>
			))}

			<div className="mt-12">
				<div className="flex  justify-center my-4">

					<ScaleLoader color="#36d7b7" />
				</div>
				<div className="flex  justify-center mb-8 mt-3">
					<div>

						<button
							onClick={ () => setLimitation(limitation+5)}
							type="button"
							className="text-white w-72 bg-gradient-to-r  mt-2 from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-12 py-3 text-center mr-2 mb-5 "
						>
							<>
							{
								isLoading ? <ButtonLoader></ButtonLoader> : "Load more..."
							}
							</>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default UsersPosts;
