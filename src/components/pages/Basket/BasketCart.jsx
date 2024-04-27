import { BsTrashFill } from "react-icons/bs"; 
import { Box, Button, Checkbox, Icon, Img, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasketBookDataDelete } from "../../slice/booksSlice";

const BasketCart = ({item, chekAll}) => {
    const {booksData} = useSelector(state => state.books)
    const dispatch = useDispatch()
    const toast = useToast()
    return (
        <>
            <Box display={'flex'} alignItems={'center'} flexWrap={{base:'wrap', sm:'nowrap'}} justifyContent={'start'} gap={'10px'}
                background={'rgba(255, 255, 200, 0.4)'}  paddingY={'10px'} paddingLeft={'10px'} paddingRight={'15px'} borderRadius={'10px'}
                position={'relative'}>
                <Img borderRadius={'10px'} width={'100px'} height={'100px'} src={item.image} />
                <Box display={'flex'} alignItems={'center'} gap={'15px'} justifyContent={'space-evenly'} width={'100%'}>
                    <Box>
                        <Text fontSize={'18px'} fontWeight={'bold'}>{item.title}</Text>
                        <Text fontSize={'14px'} fontWeight={'semibold'}>Author</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Text whiteSpace={'nowrap'}>{item.price} som</Text>
                        <Button
                        onClick={() => {
                            dispatch(getBasketBookDataDelete(booksData?.find(element => +element.id === +item.id) ))
                            toast({
                                title: 'Sebetten óshirildi ',
                                status: 'info',
                                duration: 1000,
                                isClosable: true,
                                position: 'top'
                              })
                        }}
                        textColor={'crimson'}
                        display={'flex'} alignItems={'center'} gap={'10px'} 
                        background={'none'} _hover={{background:'none'}}> 
                            <Icon fontSize={'14px'} as={BsTrashFill}/> 
                            <Text fontSize={'14px'}>Oshiriw</Text>
                        </Button>
                    </Box>
                    <Box position={'absolute'} top={'6px'} right={'6px'}>
                        <Checkbox border={'crimson'} size={'md'} colorScheme="green" _checked={chekAll ? true : false}/>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default BasketCart;
