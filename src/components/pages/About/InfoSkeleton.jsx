import { Box, Heading, Icon, Img, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai"; 
import { SlBasket } from "react-icons/sl"; 
import { MdPayment } from "react-icons/md"; 
import { BsHeadphones } from "react-icons/bs"; 
import { Skeleton } from "antd";

const InfoSkeleton = () => {
    return (
        <>
            <Box width={'90%'} marginTop={'30px'} marginBottom={'30px'} marginX={'auto'} 
                display={'flex'} flexWrap={'wrap'} alignItems={'center'} gap={'20px'}>
                <Box>
                    <Skeleton.Image style={{
                        width:'300px',
                        height:'300px'
                    }} />
                </Box>
                <Box width={{base:'100%', lg:'60%'}}>
                    <Skeleton />
                    <Skeleton/>
                    <Skeleton  />
                </Box>
            </Box>
        </>
    );
};

export default InfoSkeleton;
