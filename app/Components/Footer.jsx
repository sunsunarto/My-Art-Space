import React from "react";
import "../ComponentStyle/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footerCon">
              <p>© {new Date().getFullYear()} My Art Space | Created with ❤️</p>
            </div>
        </div>
    );
}

export default Footer;