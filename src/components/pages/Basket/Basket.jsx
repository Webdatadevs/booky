import { Box, Button, Checkbox, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import BasketCart from "./BasketCart";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(state => state.books)
    const [chekAll, setChekAll] = useState(false)

    return (
        <>
            <Box width={'100%'}  display={'flex'} flexWrap={'wrap'} flexDirection={'column'}  minHeight={'60vh'} background={'#e2e8f0'} paddingY={'15px'}>
                <Text width={'90%'} textAlign={'center'} marginX={'auto'} 
                      fontSize={'38px'} marginBottom={'10px'}>Sebet</Text>
                    <Box width={'90%'} display={'flex'} flexWrap={{base: "wrap-reverse", lg:'nowrap'}} 
                        justifyContent={'space-between'} gap={'25px'} marginX={'auto'}>
                        <Box width={{base: '100%', lg:'calc(100% - 250px)'}} gap={'10px'} display={'grid'} gridTemplateColumns={'repeat(1, 1fr)'}>
                        {
                            basket?.map(item => (
                                <BasketCart item={item} key={item.id} chekAll={chekAll}/>
                            ))
                        }
                            
                        </Box>
                        <Box width={'400px'} minWidth={'250px'} display={basket.length >0 ? 'flex' : 'none'} height={'150px'} justifyContent={'space-between'} flexDirection={'column'} 
                            gap={'20px'}  border={'1px solid #222'} padding={'10px'} borderRadius={'10px'}>
                                <Text fontWeight={'semibold'} fontSize={'calc(16px + 4 * (100vw - 320px) / 1280)'}>Dawam ettiriw ushın, satıp almaqshı bolǵan kitaplarıńızdı belgileń</Text>
                                {
                                    !chekAll ?
                                    <Button
                                        onClick={() => {
                                            setChekAll(() => true)
                                        }}  
                                        textColor={'#fff'} background={'#222'} _hover={{background:'#222'}} _active={{opacity:'0.5'}}> Bárshesin belgilew</Button>
                                    : 
                                    <NavLink to={'/buy'} style={{
                                        width:'100%'
                                    }}>
                                       <Button
                                        textColor={'#fff'} background={'#222'} _hover={{background:'#222'}} _active={{opacity:'0.5'}} width={'100%'}> Satıp alıw</Button> 
                                    </NavLink>
                                }
                        </Box>
                </Box>
            </Box>
        </>
    );
};

export default Basket;
