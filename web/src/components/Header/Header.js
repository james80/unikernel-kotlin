import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-imgBlock">
                <img className="Header-img"/>
            </div>
            <div className="Header-textBlock">
                <div className="Header-title">The Most Amazing Companies</div>
                <div className="Header-subTitle">Companies that do good things.</div>
            </div>
        </div>
    );
}

export default Header;