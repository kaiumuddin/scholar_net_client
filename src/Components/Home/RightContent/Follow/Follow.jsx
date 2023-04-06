import React from "react";
import follow from "../../../../Assets/friend-avatar.jpg";
import follow2 from "../../../../Assets/friend-avatar2.jpg";
import follow3 from "../../../../Assets/friend-avatar3.jpg";
import follow4 from "../../../../Assets/friend-avatar4.jpg";
import follow5 from "../../../../Assets/friend-avatar5.jpg";

const Follow = () => {
<<<<<<< HEAD
    return (
        <div className='mb-10'>
            <div className='p-5 border-gray-300 bg-gray-50 rounded-md border'>
                <p className='font-semibold text-gray-600 pb-5 text-xl'>Who's follownig</p>
                <div>
                    <div className='flex items-center gap-3 w-full mb-5'>
                        <img className="w-10 h-10 rounded-full" src={follow} alt="Rounded avatar" />
                        <div className='flex w-full items-center justify-between'>
                            <div>
                                <p className='font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300'>Kelly Bill</p>
                                <p className='text-gray-600 text-xs'>Dept colleague</p>
                            </div>
                            <p className='text-sky-500'>Follow</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 w-full mb-5'>
                        <img className="w-10 h-10 rounded-full" src={follow2} alt="Rounded avatar" />
                        <div className='flex w-full items-center justify-between'>
                            <div>
                                <p className='font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300'>Issabel</p>
                                <p className='text-gray-600 text-xs'>Dept colleague</p>
                            </div>
                            <p className='text-sky-500'>Follow</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 w-full mb-5'>
                        <img className="w-10 h-10 rounded-full" src={follow3} alt="Rounded avatar" />
                        <div className='flex w-full items-center justify-between'>
                            <div>
                                <p className='font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300'>Andrew</p>
                                <p className='text-gray-600 text-xs'>Dept colleague</p>
                            </div>
                            <p className='text-sky-500'>Follow</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 w-full mb-5'>
                        <img className="w-10 h-10 rounded-full" src={follow4} alt="Rounded avatar" />
                        <div className='flex w-full items-center justify-between'>
                            <div>
                                <p className='font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300'>Sophia</p>
                                <p className='text-gray-600 text-xs'>Dept colleague</p>
                            </div>
                            <p className='text-sky-500'>Follow</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 w-full'>
                        <img className="w-10 h-10 rounded-full" src={follow5} alt="Rounded avatar" />
                        <div className='flex w-full items-center justify-between'>
                            <div>
                                <p className='font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300'>Allen</p>
                                <p className='text-gray-600 text-xs'>Dept colleague</p>
                            </div>
                            <p className='text-sky-500'>Follow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
=======
	return (
		<div className="mb-10">
			<div className="p-5 border-gray-300 bg-gray-50 rounded-md border">
				<p className="font-semibold text-gray-600 pb-5 text-xl">
					Who's follownig
				</p>
				<div>
					<div className="flex items-center gap-3 w-full mb-5">
						<img
							className="w-10 h-10 rounded-full"
							src={follow}
							alt="Rounded avatar"
						/>
						<div className="flex w-full items-center justify-between">
							<div>
								<p className="font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300">
									Kelly Bill
								</p>
								<p className="text-gray-600 text-xs">
									Dept colleague
								</p>
							</div>
							<p className="text-sky-500">Follow</p>
						</div>
					</div>
					<div className="flex items-center gap-3 w-full mb-5">
						<img
							className="w-10 h-10 rounded-full"
							src={follow2}
							alt="Rounded avatar"
						/>
						<div className="flex w-full items-center justify-between">
							<div>
								<p className="font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300">
									Issabel
								</p>
								<p className="text-gray-600 text-xs">
									Dept colleague
								</p>
							</div>
							<p className="text-sky-500">Follow</p>
						</div>
					</div>
					<div className="flex items-center gap-3 w-full mb-5">
						<img
							className="w-10 h-10 rounded-full"
							src={follow3}
							alt="Rounded avatar"
						/>
						<div className="flex w-full items-center justify-between">
							<div>
								<p className="font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300">
									Andrew
								</p>
								<p className="text-gray-600 text-xs">
									Dept colleague
								</p>
							</div>
							<p className="text-sky-500">Follow</p>
						</div>
					</div>
					<div className="flex items-center gap-3 w-full mb-5">
						<img
							className="w-10 h-10 rounded-full"
							src={follow4}
							alt="Rounded avatar"
						/>
						<div className="flex w-full items-center justify-between">
							<div>
								<p className="font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300">
									Sophia
								</p>
								<p className="text-gray-600 text-xs">
									Dept colleague
								</p>
							</div>
							<p className="text-sky-500">Follow</p>
						</div>
					</div>
					<div className="flex items-center gap-3 w-full">
						<img
							className="w-10 h-10 rounded-full"
							src={follow5}
							alt="Rounded avatar"
						/>
						<div className="flex w-full items-center justify-between">
							<div>
								<p className="font-semibold text-gray-600 cursor-pointer hover:text-sky-500 duration-300">
									Allen
								</p>
								<p className="text-gray-600 text-xs">
									Dept colleague
								</p>
							</div>
							<p className="text-sky-500">Follow</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
>>>>>>> 6d07a1f480fca25c0f7db1e99f06f465c58d0331
};

export default Follow;
