import React, { useRef, useEffect } from "react";
import "../ComponentStyle/Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    const contactRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const contactEl = contactRef.current;
        const buttonEl = buttonRef.current;
        gsap.fromTo(
            contactEl,
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
                    trigger: contactEl,
                    start: "top center",
                    toggleActions: "play none none reverse",
                },
            }
        );
        gsap.fromTo(
            buttonEl,
            {
                scale: 0.5,
                backgroundColor: "#333",
            },
            {
                scale: 1,
                backgroundColor: "#fff",
                duration: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: buttonEl,
                    start: "top center",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="contact" ref={contactRef}>
            <div className="conCon">
                <h1>Contact</h1>
                <p>let's get in touch, we would love to hear from you, send us a message either by phone, email or by filling out the form below</p>
                <div className="fillCon">
                    <div className="leftCon">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            alert("Your message has been sent");
                        }}>
                            <input type="text" placeholder="name" name="name" required />
                            <input type="email" placeholder="email" name="email" required />
                            <input type="text" placeholder="subject" name="subject" required />
                            <textarea placeholder="message" name="message" required></textarea>
                            <button type="submit" ref={buttonRef}>send</button>
                        </form>
                    </div>
                    <div className="rightCon">
                        <p>address: mangga Dua, jakarta utara, Indonesia</p>
                        <p>phone: (+62) 59-3442-7040</p>
                        <p>email: sunaryo@outlook.com</p>
                        <div className="icon">
                            <a href="https://github.com/sunsunarto" target="_blank" rel="noreferrer"><img src="../icons/github.png" alt="" /></a>
                            <a href="https://www.youtube.com/@artos2166" target="_blank" rel="noreferrer"><img src="../icons/youtube.png" alt="" /></a>
                            <a href="https://www.instagram.com/artos216/" target="_blank" rel="noreferrer"><img src="../icons/IG.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
