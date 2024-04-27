import { BiSearch } from "react-icons/bi"; 
import { AiOutlineLogout } from "react-icons/ai"; 
import { Box, Button, FormControl, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Text, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
import Sidebar from "../sidebar/Sidebar";
import { Link, NavLink } from "react-router-dom";
import '../header/Header.css'
import BurgerMenuAnimation from "./animation/BurgerMenuAnimation";
import '../header/animation/animation'
import HeaderSidebar from "./headerSidebar/HeaderSidebar";
import AppContext from "../context/AppContext";
import SearchModal from "./SearchModal";
import { useSelector } from "react-redux";
const Header = () => {
    const { toogleClick, toggleMenu } = useContext(AppContext);
    const { isOpen:isOpenS, onOpen:onOpenS, onClose:onCloseS } = useDisclosure();
    const {saveBookData, basket} = useSelector(state => state.books)
    const searchOpenFunction = () => {
        onOpenS()
    }
    return (
        <>
            <Box width={'100%'} background={'gray.100'} position={'sticky'} top={'0px'} zIndex={'999'}>
                <Box display={"flex"} width={'90%'} marginX={'auto'} paddingY={'20px'} 
                    justifyContent={'space-between'} alignItems={'center'}>
                   <Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} gap={'30px'}>
                       <Box display={'flex'} gap={'10px'} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                        <Link to={'/'}>
                                <Heading textColor={'#222'} fontSize={'24px'}>Booky.uz</Heading>
                        </Link>
                        <Box display={{base:'block', lg:'none'}}>
                            <IconButton
                            onClick={() => searchOpenFunction()}  
                            _hover={{background:'#222'}} _active={{opacity:'0.5'}} textColor={'#fff'}  background={'#222'} icon={<BiSearch />}/>
                        </Box>
                       </Box>
                        <Box display={{base: toogleClick ? '' : 'flex', lg:'none'}}>
                            <BurgerMenuAnimation />
                        </Box>
                   </Box>
                    <Box display={{base:'none', lg:'block'}}>
                        <ul className="flex items-center gap-[20px]">
                            <li><IconButton onClick={() => searchOpenFunction()} background={'#fff'} icon={<BiSearch />}/></li>
                            <li className="text-[#222] p-[10px]  relative"><NavLink to={'/saylanganlar'}>Saylanǵanlar
                                <span className=" absolute top-[-8px] right-[-6px] rounded-[100%] text-[12px] py-[2px] px-[6px] flex justify-center items-center bg-[#222] text-[#fff]">{saveBookData.length}</span>
                            </NavLink></li>
                            <li className="text-[#222] p-[10px]   relative "><NavLink to={'/sebet'}>Sebet
                            <span className=" absolute top-[-8px] right-[-6px] rounded-[100%] text-[12px] py-[2px] px-[6px] flex justify-center items-center bg-[#222] text-[#fff]">{basket.length}</span>
                            </NavLink></li>
                            <li className="text-[#222] p-[10px] "><NavLink to={'/kitablarim'}>Kitaplarım</NavLink></li>
                            <li className="">
                                <Link style={{
                                    display:'flex',
                                    alignItems:'center',
                                    gap:'20px',
                                    color:'#222',
                                    padding:'10px'
                                }}>
                                    <Text>Shıǵıw </Text><AiOutlineLogout />
                                </Link>
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            {/* <Box position={'absolute'} top={'30px'} width={'100%'} height={'100%'} background={'gray.100'} zIndex={'999'}>
                <form>
                    <FormControl>
                        <Input placeholder=""/>
                    </FormControl> 
                </form>
            </Box> */}
            <Box width={'90%'} marginX={'auto'}>
                <Sidebar />
            </Box>
            <Box>
                <HeaderSidebar />
            </Box>
            <SearchModal isOpen={isOpenS} onOpen={onOpenS} onClose={onCloseS}/>
        </>
    );
};

export default Header;
