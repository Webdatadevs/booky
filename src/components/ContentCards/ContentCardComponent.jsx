import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CardComponents from "../Cards/CardComponents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import { useDispatch, useSelector } from "react-redux";
import getBooks from "../axios/getBooks";
import { Skeleton } from "antd";
import SkeletonCard from "../Cards/SkeletonCard";

const ContentCardComponent = () => {
  const {booksData, isLoadingBooks} = useSelector(state => state.books)

    return (
        <>
            <Box
                width={"100%"}
            >
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    // slidesPerView={1}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                    navigation
                    style={{padding: '30px'}}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="w-[90%] m-[30px] flex gap-[5px] mx-[auto] overflow-x-auto"
                >
                    {
                   
                   isLoadingBooks===false ?  booksData?.map(element => (
                        <SwiperSlide key={element.id} style={{display:'flex', flex: "0 0 auto" , minWidth:'200px', maxWidth:'100%', alignSelf:'stretch'}}>
                          <>
                            <CardComponents element={element}/>
                          </>
                        </SwiperSlide>
                        
                      ))
                      :
                    <SwiperSlide style={{display:'flex', flex: "0 0 auto" , minWidth:'200px', maxWidth:'100%', alignSelf:'stretch', gap:'10px',}}>
                      <SkeletonCard />
                      <SkeletonCard />
                      <SkeletonCard />
                      <SkeletonCard />
                    </SwiperSlide>
                       
                    }
                </Swiper>
            </Box>
        </>
    );
};

export default ContentCardComponent;
