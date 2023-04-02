import React from 'react';
import { NavLink } from 'react-router-dom';
import CarouselSlider from 'react-carousel-slider';
import chatRoomImageIcon from "../../../../assets/iconImage/chatRoomImageIcon.PNG";
import ChatModal from '../Modals/ChatModal/ChatModal';
const ChatRoom = () => {
    const sliderBoxStyle = {
        backgroundColor: "#fafafa",
        color: "white",
        padding: "0px",
        borderRadius: "20px",
        height: "310px"
    }

    let manner = {
        autoSliding: { interval: "3s" },
        duration: "2s"
    };

    let accEleSetting;

    let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
    if (mobileRegx.test(navigator.userAgent)) {
        accEleSetting.button = false;
    }

    let buttonSetting = {
        placeOn: "middle-inside",
        hoverEvent: true,
        style: {
            left: {
                height: "50px",
                width: "50px",
                color: "#929393",
                background: "rgba(6, 3, 55 )",
                borderRadius: "50%"
            },
            right: {
                height: "50px",
                width: "50px",
                color: "#929393",
                background: "rgba(6, 3, 55 )",
                borderRadius: "50%"
            }
        }
    };

    let itemsStyle = {
        padding: "0px",
        background: "white",
        margin: "0 15px",
        borderRadius: "4px",
        height: "120px"
    };

    let imgStyle = {
        height: "70%",
        borderBottom: "1px solid #9E9E9E",
        width: "60%",
    };

    let btnStyle = {
        display: "inline-block",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "36px",
    }
    let btnWrapperStyle = {
        position: "relative",
        borderRadius: "50%",
        height: "50px",
        width: "50px",
        boxShadow: "1px 1px 1px 1px #9E9E9E",
        textAlign: "center",
        marginTop: "-10px"
    }

    let rBtnCpnt = (<button style={btnWrapperStyle} >
        <button style={btnStyle} className="material-icons -mt-1" >
            <i className="fa-solid fa-arrow-right text-2xl" style={{ color: "#0E9F6E" }}></i>
        </button>
    </button>);

    let lBtnCpnt = (<button style={btnWrapperStyle}>
        <button style={btnStyle} className="material-icons  -mt-1" >
            <i className="fa-solid fa-arrow-left text-2xl -mt-12" style={{ color: "#0E9F6E" }}></i>
        </button>
    </button>);
    const chatRoomDivUserImageStyle = {
        height: "281px",
        width: "55px",
        borderRadius: "50%",
        marginTop: "10px",
    }
    // fetch api and map your data here by removing array of  number
    let items = [0, 1, 2, 3].map((index) =>
        <div key={index} className='h-42 w-32' style={{ height: "185px" }}>
            <div className="w-full max-w-lg   border  border-gray-200 rounded-lg shadow p-2 -mt-10" style={{ width: "140px" }}>
                <div className="flex flex-col items-center pb-10">
                    <img className="shadow-lg border-2 border-green-600" src="https://i.ibb.co/4Zjxn5y/g2.jpg" style={chatRoomDivUserImageStyle} alt="Bonnie_image" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 my-3">Arrash william</span>
                    <div className="flex justify-center items-center h-24 mt-8">
                        <button type="button w-10" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2">Join</button>
                        <button className='w-1 -mt-2' data-modal-target="ChatModal" data-modal-toggle="ChatModal"><i className="fa-regular fa-comment text-blue-600 text-md py-1 px-1 border-2 rounded-full" style={{ border: "1px solid #0E9F6E", color: "#0E9F6E" }}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <>
            <div className="commonBackgroundColor p-4 rounded-xl border my-12">
                <div className="flex justify-between py-1 px-3 rounded-lg mt-8">

                    <div className="flex font-bold mb-8">
                        <img src={chatRoomImageIcon} alt="chat room icon" className='mx-2' />
                        <p className='text-lg text-gray-600'>Chatting Rooms </p>
                        <p className='text-small mt-1 mx-1 text-gray-400'>video chat with friends</p>
                    </div>
                    <NavLink to="/create-room" className="text-blue-600">Create Room </NavLink>
                </div>

                <div className='-mt-2'>
                    <CarouselSlider
                        itemsStyle={itemsStyle}
                        imgStyle={imgStyle}
                        sliderBoxStyle={sliderBoxStyle}
                        buttonSetting={buttonSetting}
                        slideCpnts={items}
                        manner={manner}
                        rBtnCpnt={rBtnCpnt}
                        lBtnCpnt={lBtnCpnt}

                    />
                </div>
            </div>
            <ChatModal></ChatModal>
        </>

    );
};

export default ChatRoom;