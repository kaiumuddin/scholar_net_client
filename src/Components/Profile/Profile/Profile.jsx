import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";

const Profile = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto px-2 my-12">
			<div className="order-last md:order-none md:col-span-1">
				<LeftContent></LeftContent>
			</div>
			<div className="md:col-span-2">
				<RightContent></RightContent>
			</div>
		</div>
	);
};

export default Profile;
