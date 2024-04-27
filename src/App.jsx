import React, { useEffect, useState } from "react";
import AppContext from "./components/context/AppContext";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import getBooks from "./components/axios/getBooks";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import sidebarElementsData from "./components/sidebar/sidebarElData";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Info from "./components/pages/About/Info";
import Save from "./components/pages/Save";
import headerSideabrElData from "./components/header/headerSidebar/headerSidebarElData";

const App = () => {
    // const booksData = useSelector(state => state.booksData)
    const dispatch = useDispatch()
    const [toogleClick, setToogleClick] = useState();
    
    const toggleMenu = () => {
        setToogleClick(!toogleClick);
      };
    useEffect(() =>{
        getBooks(dispatch)
    } ,[])
    
    return (
        <Box overscrollY={toogleClick ? "none" : ''}>
            <AppContext.Provider value={{ toogleClick, toggleMenu }}>
               <Header />
               <Routes>
                <Route path="/" element={<Layout />} />
                    {
                        sidebarElementsData.map(element => (
                            <Route key={element.id} path={(element.pathName)} element={<element.componentName/>}/>
                        ))
                    }
                    <Route path="/info/:bookId" element={<Info/>}/>
                    {
                        headerSideabrElData.slice(5, 9).map(item => (
                            <Route key={item.id} path={(item.pathName)} element={<item.componentName/>}/>
                        ))
                    }
               </Routes>
               <Footer />
            </AppContext.Provider>
        </Box>
    );
};

export default App;
