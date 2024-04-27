import { AiFillHeart } from "react-icons/ai"; 
import { FaShoppingCart } from "react-icons/fa"; 
import { SlBasket } from "react-icons/sl"; 
import { AiOutlineEye } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { Box, Button, Icon, IconButton, Img, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBasketBookData, getSaveBookData } from "../slice/booksSlice";

const CardComponents = ({element}) => {
    const {saveBookData, booksData, basket} = useSelector(state => state.books)
    const [isLike, setIsLike] = useState(
        saveBookData.find(item => +item.id === +element.id) ? 
        true : false
    )
    const searchBasketData = () => {
        if(basket?.find(item => +item.id === +element.id)){
            return true
        }
        else{
            return false
        }
    }
    const dispatch = useDispatch()
    
    const toast = useToast()

    return (
        <>  
            <Box display={'inline-flex'} padding={'10px'} borderRadius={'10px'} justifyContent={'space-between'} alignSelf={'stretch'} flexDirection={'column'} background={'#fff'}>
                <>
                <Link to={`/info/${element.id}`}>
                        <Img src={element.image} borderTopLeftRadius={'10px'} borderTopRightRadius={'10px'} width={'100%'} height={'100%'}/>
                </Link>
                </>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingX={'10px'} paddingY={'15px'}>
                    <Link to={`/info/${element.id}`}>
                        <Text textColor={'#222'} fontWeight={'semibold'} fontSize={'18px'}>{element.title}</Text>
                    </Link>
                    <IconButton 
                        onClick={() => {
                            // dispatch(getSaveBookData(element))
                            dispatch(getSaveBookData(booksData?.find(item => +item.id === +element.id)))
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
                        background={'none'} _hover={{background: 'none'}} fontSize={'24px'} textColor={'orange'} icon={isLike ? <AiFillHeart className="text-[orange]" /> : <AiOutlineHeart />}/>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingX={'10px'} paddingY={'15px'}>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <Icon textColor={'gray.600'} as={AiOutlineEye}/>
                            <Text textColor={'gray.600'} fontSize={'14px'}>0</Text>
                        </Box>
                        <Button background={'orange'} textColor={'#fff'} _hover={{background: 'orange'}}>Tıńlaw</Button>
                        <IconButton
                        onClick={() => {
                            dispatch(getBasketBookData(booksData?.find(item => +item.id === +element.id)))
                            
                            searchBasketData() ? 
                            toast({
                                title: 'Bul kitap sebette bar',
                                status: 'info',
                                duration: 1000,
                                isClosable: true,
                                position: 'top'
                            })
                             : 
                            toast({
                                title: 'Sebetke qosıldı',
                                status: 'success',
                                duration: 1000,
                                isClosable: true,
                                position: 'top'
                            })
                        }} 
                        background={'none'} fontSize={'24px'} _hover={{background: 'none'}} textColor={'orange'} icon={<FaShoppingCart />}/>
                </Box>
            </Box>
        </>
  )
}

export default CardComponents