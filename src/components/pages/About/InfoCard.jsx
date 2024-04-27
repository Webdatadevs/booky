import { BiBookBookmark } from "react-icons/bi"; 
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
import { SlBasket } from "react-icons/sl"; 
import { MdPayment } from "react-icons/md"; 
import { BsHeadphones } from "react-icons/bs"; 
import { Box, Button, Heading, Icon, IconButton, Img, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSidebar from "../../header/headerSidebar/HeaderSidebar";
import infoCartData from "./infoCartData";
import { getBasketBookData, getSaveBookData } from "../../slice/booksSlice";
import { NavLink } from "react-router-dom";

const InfoCard = ({cart}) => {
    const {saveBookData, booksData, basket} = useSelector(state => state.books)
    const toast = useToast()
    const dispatch = useDispatch()
    const [isLike, setIsLike] = useState(
        saveBookData.find(item => +item.id === +cart.id) ? 
        true : false
    )
    const [searchBasketData, setSearchBasketData] = useState(
        basket?.find(item => +item.id === +cart.id) ? 
        true : false
    )

    return (
        <>
            <Box width={'100%'} marginTop={'30px'} marginBottom={'30px'} key={cart.id} >
            <Box 
                width={'90%'} marginX={'auto'}
                // display={'grid'} gridTemplateColumns={'repeat(auto-fit, minmax(500px, 1fr))'} 
                display={'flex'}
                flexWrap={'wrap'}
                alignItems={'center'} gap={'20px'}>
                <Box width={{lg:'345px', base:''}}>
                    <Img src={cart.image} width={'100%'} height={'100%'}/>
                </Box>
                <Box width={{base:'100%', lg:'60%'}}>
                    <Heading>{cart.title}</Heading>
                    <Text display={'inline-block'} marginTop={'15px'} background={'purple'} padding={'5px'} borderRadius={'15px'} textColor={'#fff'} fontSize={'12px'}>Jáhán ádebiyatı</Text>
                    <Text fontWeight={'semibold'} marginTop={'20px'}>Shıńǵıs Aytmatov</Text>
                    <Text fontSize={'14px'} marginTop={'20px'}>
                        {cart.description}
                    </Text>
                    <Text fontSize={'28px'} marginTop={'10px'} fontWeight={'bold'}>{cart.price} som</Text>
                    <Box  marginTop={'10px'} display={'flex'} flexWrap={'wrap'} alignItems={'center'} gap={'15px'}>
                        <Button background={'#edf2f7'} display={'flex'} alignItems={'center'} gap={'10px'} padding={'10px'}>
                            <Icon as={BsHeadphones}/>
                            <Text>Tıńlap kóriw</Text>
                        </Button>
                        <Button background={'#edf2f7'} display={'flex'} alignItems={'center'} gap={'10px'} padding={'10px'}>
                            <Icon as={MdPayment}/>
                            <Text>Satıp alıw</Text>
                        </Button>
                       {
                        searchBasketData ? 
                        <NavLink 
                            to={'/sebet'}
                            style={{
                                color:'orange',
                                display:'flex',
                                alignItems: 'center',
                                padding: '10px',
                                gap: '10px',
                                border:'1px solid orange',
                                borderRadius:'10px'
                            }}
                            >
                            <Text>Sebetke ótiw</Text>
                        </NavLink>
                        :
                        <Button 
                            onClick={() => {
                                dispatch(getBasketBookData(booksData?.find(item => +item.id === +cart.id)))
                                setSearchBasketData(value => !value) 
                            }}
                            background={'orange'} _hover={{background:'orange'}} 
                            textColor={'#fff'}
                            display={'flex'} alignItems={'center'} gap={'10px'} padding={'10px'}>
                            <Icon as={SlBasket}/>
                            <Text>Sebetke salıw</Text>
                        </Button>
                       }
                        <>
                            <IconButton  
                            onClick={() => {
                                dispatch(getSaveBookData(booksData?.find(item => +item.id === +cart.id)))
                                setIsLike(value => !value)
                                isLike ?  toast({
                                    title: 'Saylandılar bóliminen óshirildi.',
                                    status: 'info',
                                    duration: 1000,
                                    isClosable: true,
                                    position: 'top'
                                  })
    
                                  : 
                                  toast({
                                    title: 'Saylandılarǵa qosıldı ',
                                    status: 'success',
                                    duration: 1000,
                                    isClosable: true,
                                    position: 'top'
                                  })
                            }}
                            background={'none'} _hover={{background:'none'}}
                            fontSize={'28px'} textColor={'orange'} icon={isLike ? <AiFillHeart className="text-[orange]" /> : <AiOutlineHeart />}/>
                        </>
                    </Box>
                </Box>
                
            </Box>
            <Box width={'90%'} marginX={'auto'} display={'flex'} alignItems={'center'} gap={'20px'} 
                flexWrap={'wrap'} marginTop={'40px'} paddingX={'20px'}>
                <Text fontSize={'18px'}>Dawis berin:</Text>
                <Box display={'flex'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'}>
                    {
                        infoCartData.map(item => (
                        <Button key={item.id} background={'#edf2f7'}  
                                textColor={'#222'}
                                display={'flex'} alignItems={'center'} gap={'10px'} padding={'10px'}>
                                <Icon as={item.icon}/>
                                <Text>{item.title}</Text>
                                <Text >0</Text>
                        </Button>
                        ))
                    }
                </Box>
            </Box>
            </Box>
        </>
    );
};

export default InfoCard;
