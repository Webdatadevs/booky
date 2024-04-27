import React, { useContext } from "react";
import "../animation/BurgerMenu.css";
import AppContext from "../../context/AppContext";
const BurgerMenuAnimation = () => {
    const { toogleClick, toggleMenu } = useContext(AppContext);
    return (
        <>
            <div id="nav-icon1"
            className={toogleClick ? "open" : ""}
            onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
};

export default BurgerMenuAnimation;
