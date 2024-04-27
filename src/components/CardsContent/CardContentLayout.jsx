import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ContentCardComponent from "../ContentCards/ContentCardComponent";

const CardContentLayout = () => {
    return (
        <div>
            <Box 
            background={'gray.200'}
            width={"100%"}
            paddingTop={"30px"}
            display={"flex"}
            gap={"15px"}
            marginX={"auto"}
            flexDirection={'column'}
            >
                <Heading fontSize={'24px'} width={'90%'} marginX={'auto'} paddingX={'30px'}>Sońǵı qosılǵanları</Heading>
                <ContentCardComponent />
            </Box>
            <Box background={'gray.200'}
            width={"100%"}
            paddingTop={"30px"}
            display={"flex"}
            gap={"15px"}
            marginX={"auto"}
            flexDirection={'column'}>
                <Heading fontSize={'24px'} width={'90%'} marginX={'auto'} paddingX={'30px'}>Trendtegi kitaplar</Heading>
                <ContentCardComponent />
            </Box>
        </div>
    );
};

export default CardContentLayout;
