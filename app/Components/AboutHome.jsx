import React, { useRef, useEffect } from "react";
import "../ComponentStyle/AboutHome.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutHome() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const aboutEl = aboutRef.current;
        gsap.fromTo(
            aboutEl,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: aboutEl,
                    start: "top center",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="about" ref={aboutRef}>
            <div className="containerAbout">
                <div className="text">
                    <h2>your Art Space </h2>
                    <p>Your space is where colors, typography, and layout blend to create stunning visuals.<br />we offer a range of services to help you bring your ideas to life, including design, development, and deployment.</p>
                </div>
                <img src="/projects.png" alt="Projects" />
            </div>
        </div>
    );
}

export default AboutHome;

