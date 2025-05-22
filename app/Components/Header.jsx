import React from "react";
import "../ComponentStyle/Header.css";
function Header() {
    return (
        <div className="headerCon">
            <div className="container">
                <div className="left">
                    <h6>Sunaryo <span>Portfolio</span></h6>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header