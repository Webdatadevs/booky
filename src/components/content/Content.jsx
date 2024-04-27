import { AiFillApple } from "react-icons/ai"; 
import { BsGooglePlay } from "react-icons/bs"; 
import { Box, Heading, Icon, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Content = () => {
    return (
        <>
            <Box width={"90%"} marginX={'auto'} padding={{base:'80px 20px 20px 20px', lg:'60px 60px 20px 60px'}} display={"flex"} alignItems={"center"} gap={'20px'} flexDirection={{md:'column', lg:'row'}}>
                <Box width={{base:"100%", lg:'50%'}}>
                    <Heading fontSize={'calc(36px + 12 * (100vw - 320px) / 1280)'}>
                        «Booky» — qaraqalpaq tilindegi audiokitaplar
                        platformasına xosh kelipsiz!
                    </Heading>
                    <Text textColor={'#202020'} marginTop={'25px'} opacity={'0.7'} fontSize={'calc(12px + 4 * (100vw - 320px) / 1280)'}>
                        Bul platformada qaraqalpaq tilinde basıp shıǵarılǵan
                        jáhán, ózbek hám qaraqalpaq ádebiyatınıń dúrdana
                        shıǵarmaları jáne qaraqalpaq awızeki dóretiwshiliginiń
                        hasıl marjanlarınınıń audio variantların jaratamız.
                        Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy dóretpeleri,
                        sonday-aq qaraqalpaq folklorınıń dúrdana shıǵarmalarınıń
                        elektron variantların islep shıǵamız hám saytqa
                        jaylastıramız.
                    </Text>
                    <Box display={'flex'} alignItems={'center'} gap={'20px'} marginTop={'40px'}>
                        <Link to={'https://play.google.com/store/apps/details?id=com.karsoft.bookienew'} target="_blank">
                            <Box background={'#222'} textColor={'#fff'} display={'flex'} alignItems={'center'} gap={'10px'} padding={'10px'} rounded={'10px'}>
                                <Icon as={BsGooglePlay}/>
                                <Text>Google play</Text>
                            </Box>
                        </Link>
                        <Link>
                            <Box background={'#222'} textColor={'#fff'} display={'flex'} alignItems={'center'} gap={'10px'} padding={'10px'} rounded={'10px'}>
                                <Icon as={AiFillApple} />
                                <Text>App Store</Text>
                            </Box>
                        </Link>
                    </Box>
                </Box>
                <Box  width={"50%"} flex={'1'} display={{md:'none', lg:'flex'}} justifyContent={'flex-end'} alignItems={'flex-end'}>
                    <Img src="public/girl-jtrnoXsF.jpg"/>
                </Box>
            </Box>
        </>
    );
};

export default Content;
