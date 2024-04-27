import { Carousel } from "antd";
import React from "react";
const contentStyle = {
    color: "#fff",
    background: "#364d79",
    
};
const CarouselCom = () => {
    return (
        <>
            <Carousel autoplay className="bg-[#364d79]">
                <div className="p-[50px] bg-[#364d79]">
                    <img className="min-w-[200px] max-w-[80%] mx-[auto]" style={contentStyle} src="./public/karsoftBanner.jpg" />
                </div>
                <div className="p-[50px] bg-[#364d79]">
                    <img className="min-w-[200px] max-w-[80%] mx-[auto]" style={contentStyle} src="./public/karsoftBannerWhite.jpg" />
                </div>
            </Carousel>
        </>
    );
};

export default CarouselCom;
