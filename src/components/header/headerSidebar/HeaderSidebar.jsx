import { Box, Icon, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import BurgerMenuAnimation from "../animation/BurgerMenuAnimation";
import AppContext from "../../context/AppContext";
import { NavLink } from "react-router-dom";
import headerSideabrElData from "./headerSidebarElData";

const HeaderSidebar = () => {
  const { toogleClick, toggleMenu } = useContext(AppContext);
    return (
        <>
      
            <Box width={'300px'} display={{ base: "flex", lg: "none" }} flexDirection={'column'} 
              position={'fixed'}
              top={"0px"}
              height={"100vh"}
              zIndex={"99999"}
              background={'#edf2f7'}
              right={'0px'}
              // marginLeft={toogleClick ? '0px' : '-300px'} 
              marginRight={toogleClick ? '0px' : '-300px'}
              padding={'20px'}
              transition={'all 0.6s'}>
              <Box
                display={'flex'}
                justifyContent={'flex-start'}
              >
                <BurgerMenuAnimation />
              </Box>
              <Box display={'flex'} flexDirection={'column'} width={'100%'} paddingX={'10px'} gap={'10px'}>
                {
                  headerSideabrElData.map((item) => (
                      <NavLink key={item.id} to={item.pathName}>
                        <Box  display={'flex'}  alignItems={'center'} gap={'15px'} padding={'5px'} 
                          borderRadius={'5px'} _hover={{background:'gray.300'}}>
                            <Icon as={item.icon}/>
                            <Text> {item.title}</Text>
                        </Box>
                      </NavLink>
                  ))
                }
              </Box>
            </Box>
      
        </>
    );
};

export default HeaderSidebar;
