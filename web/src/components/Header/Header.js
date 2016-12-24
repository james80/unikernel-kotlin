import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-imgBlock">
                <img className="Header-img"/>
            </div>
            <div className="Header-textBlock">
                <span className="Header-title">Most Amazing Companies</span>
                <span className="Header-subTitle">Companies that do good things.</span>
            </div>
        </div>
    );
}

export default Header;