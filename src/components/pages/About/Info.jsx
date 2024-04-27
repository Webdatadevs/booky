import { Box, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderSidebar from "../../header/headerSidebar/HeaderSidebar";
import { useParams } from "react-router-dom";
import InfoCard from "./InfoCard";
import InfoSkeleton from "./InfoSkeleton";

const Info = () => {
    const { booksData } = useSelector(state => state.books);
    const { bookId } = useParams();
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const selectedBook = booksData.find(item => +item.id === +bookId);
        setCart(selectedBook);
        localStorage.setItem('cart', JSON.stringify(selectedBook));
    }, [booksData, bookId]);

    return (
        <>
           {!cart ? 
           <>
            <InfoSkeleton />
           </>
           :
           <InfoCard cart={cart} />
           }
        </>
    );
};

export default Info;
