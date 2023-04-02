import React from 'react';
import CarouselSlider from 'react-carousel-slider';
const SuggestedUsers = () => {
    const sliderBoxStyle = {
     backgroundColor: "#fafafa",
        color: "white",
        borderRadius: "20px",
        height: "310px"
    }

    let manner = {
        autoSliding: { interval: "3s" },
        duration: "2s"
    };

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
        marginTop: "43px"
    }

    let rBtnCpnt = (<div style={btnWrapperStyle} >
        <button style={btnStyle} className="material-icons -mt-1" >
            <i className="fa-solid fa-arrow-right text-2xl" style={{ color: "#0E9F6E" }}></i>
        </button>
    </div>);

    let lBtnCpnt = (<div style={btnWrapperStyle}>
        <button style={btnStyle} className="material-icons -mt-1">
            <i className="fa-solid fa-arrow-left text-2xl" style={{ color: "#0E9F6E" }}></i>
        </button>
    </div>);
    const chatRoomDivUserImageStyle = {
        height: "381px",
        width: "150px",
        borderRadius: "14px",
        marginTop: "10px",
        border: "2px solid #0E9F6E"
    }
    // fetch api and map your data here by removing array of  number
    let items = [0, 1, 2, 3].map((index) =>
        <div key={index} className='h-42 w-32' style={{ height: "228px" }}>
            <div className="max-w-md border  border-gray-200 rounded-lg shadow p-2 -mt-12" style={{ width: "160px" }}>
                <div className="flex flex-col items-center pb-10">
                    <img className="shadow-lg border-2" src="https://i.ibb.co/4Zjxn5y/g2.jpg" style={chatRoomDivUserImageStyle} alt="Bonnie_image" />
                    <span className="text-md text-gray-500 dark:text-gray-400 my-3">Jhoan smith</span>
                    <div className="dark:text-gray-400 my-3 flex -mt-3 text-blue-600" style={{ fontSize: "12px" }}>Department of sociology</div>
                  <button type="button" className="text-white bg-gradient-to-r  mt-2 from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm ps-2 px-2 py-1 text-center mr-2 mb-5 "> Follow <i className="fa-regular fa-star text-white text-md mx-3"></i> </button>
                </div>
            </div>
        </div>
    )


    return (
        <>
            <div className="commonBackgroundColor p-4 rounded-xl border my-12">
                <div className="flex font-bold  my-5">
                    <i className="fa-solid fa-book-open-reader text-xl rounded-full w-10 h-10 flex items-center justify-center" style={{ color: "#FACA15", border: "2px solid #FACA15" }}></i>
                    <div className="flex flex-col mx-2">
                        <p className='text-lg text-blue-600'> Suggested </p>
                        <p className='text-small mt-1 mx-1 text-gray-400'> <i className="fa-solid fa-person-running"></i> Follow simmilar people</p>
                    </div>
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
        </>

    );
};

export default SuggestedUsers;
