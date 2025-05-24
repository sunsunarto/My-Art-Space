import React, { useRef, useEffect } from "react";
import "../ComponentStyle/Header.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        const headerEl = headerRef.current;
        const buttonList = headerEl.querySelectorAll(".right ul li");

        gsap.fromTo(
            headerEl,
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
                    trigger: headerEl,
                    start: "top center",
                    toggleActions: "play none none reverse",
                },
            }
        );

        buttonList.forEach((button, index) => {
            gsap.fromTo(
                button,
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
                        trigger: button,
                        start: "top center",
                        toggleActions: "play none none reverse",
                    },
                    delay: 0.3 + index * 0.1,
                }
            );

            button.addEventListener("mouseenter", () => {
                gsap.to(button, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power3.out",
                });
            });

            button.addEventListener("mouseleave", () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power3.out",
                });
            });
        });
    }, []);

    return (
        <div className="headerCon" ref={headerRef}>
            <div className="containerHead">
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

export default Header;
