import React from "react";
import "../ComponentStyle/AboutHome.css";

function AboutHome() {
    return (
        <div className="about">
            <div className="container">
                <div className="text">
                    <h2>your Art Space </h2>
                    <p>Your space is where colors, typography, and layout blend to create stunning visuals.<br/>we offer a range of services to help you bring your ideas to life, including design, development, and deployment.</p>
                </div>
                 <img src="/projects.png" alt="Projects" />
            </div>
        </div>
    );
}

export default AboutHome;
