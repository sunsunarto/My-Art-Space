import { useEffect, useRef } from "react";
import "../ComponentStyle/Project.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Project() {
    const projectRefs = useRef([]);
  
    useEffect(() => {
        projectRefs.current.forEach((el, index) => {
            gsap.fromTo(el, 
                { opacity: 0, y: -50 },
                {
                    opacity: 1, y: 0, duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top center",
                        toggleActions: "play none none reverse",
                        onLeaveBack: () => gsap.to(el, { opacity: 0, y: -100, duration: 1 })
                    },
                    delay: index * 0.3,
                }
            );
        });
    }, []);
  
    return(
        <div className="projectCon">
            <h1>My Art Colection</h1>
            <div className="proContainer">
                <div className="projectAbout index1" ref={(el) => projectRefs.current[0] = el}>
                    <h1>Socio</h1>
                    <img src="../Projects/Screenshot 2025-03-27 101644.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/Quiz_16_Sunaryo/">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://quiz-16-sunaryo.vercel.app/"> Link</a>
                        </div>
                    </div>
                </div>
                <div className="projectAbout index2" ref={(el) => projectRefs.current[1] = el}>
                    <h1>Cerita Anekdot</h1>
                    <img src="../Projects/Screenshot 2025-03-27 105058.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/Projekbi">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://projekbi-3i6x.vercel.app"> Link</a>
                        </div>
                    </div>
                </div>
                <div className="projectAbout index3" ref={(el) => projectRefs.current[2] = el}>
                    <h1>Dessert shop</h1>
                    <img src="../Projects/Screenshot 2025-03-27 110325.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/Dessert-Shop-Part-2">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://dessert-shop-part-2.vercel.app/"> Link</a>
                        </div>
                    </div>
                </div>
                <div className="projectAbout index4" ref={(el) => projectRefs.current[3] = el}>
                    <h1>Post Management App</h1>
                    <img src="../Projects/Screenshot 2025-03-27 112937.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/Post-Management-App">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://post-management-app-939m.vercel.app/"> Link</a>
                        </div>
                    </div>
                </div>
                <div className="projectAbout index4" ref={(el) => projectRefs.current[4] = el}>
                    <h1>User Registration Form</h1>
                    <img src="../Projects/Screenshot 2025-03-27 113854.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/User-Authentication-System">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://user-authentication-system-ten.vercel.app/"> Link</a>
                        </div>
                    </div>
                </div>
                <div className="projectAbout index4" ref={(el) => projectRefs.current[5] = el}>
                    <h1>movie collection</h1>
                    <img src="../Projects/Screenshot 2025-03-27 115030.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/Sunaryo_movie_collection_gsap_part_2">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://sunaryo-movie-collection-gsap-part-2-9mco.vercel.app/"> Link</a>
                        </div>
                    </div>
                </div>
                <div className="projectAbout index4" ref={(el) => projectRefs.current[6] = el}>
                    <h1>charity organization (copy)</h1>
                    <img src="../Projects/Screenshot 2025-03-27 115551.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/quiz-GSAP-ScrollTrigger">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://quiz-gsap-scroll-trigger-bi21.vercel.app//"> Link</a>
                        </div>
                    </div>
                </div>
                <div className="projectAbout index4" ref={(el) => projectRefs.current[7] = el}>
                    <h1>Paste (copy)</h1>
                    <img src="../Projects/Screenshot 2025-03-27 120319.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/Sunaryo-mid-test-gsap">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://sunaryo-mid-test-gsap-e86f.vercel.app/"> Link</a>
                        </div>
                    </div>
                </div>
                <div className="projectAbout index4" ref={(el) => projectRefs.current[8] = el}>
                    <h1>Advice Generator</h1>
                    <img src="../Projects/Screenshot 2025-03-27 120348.png" alt="" />
                    <div className="githubAndLink">
                        <div className="github">
                            <a href="https://github.com/sunsunarto/Advice-Generator">Github Link</a>
                        </div>
                        <div className="link">
                            <a href="https://advice-generator-coral-iota.vercel.app/"> Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;

