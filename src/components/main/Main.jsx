import React from "react";
import Content from "../content/Content";
import CarouselCom from "../carousel/CarouselCom";
import CardComponents from "../Cards/CardComponents";
import ContentCardComponent from "../ContentCards/ContentCardComponent";
import CardContentLayout from "../CardsContent/CardContentLayout";

const Main = () => {
    return (
        <div>
            <Content />
            <CarouselCom />
           <CardContentLayout />
        </div>
    );
};

export default Main;
