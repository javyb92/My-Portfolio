import React from "react";
import "../AboutMe/style.css";
import portfoliopic from "../../img/portfoliopic.png"


function AboutMe() {
    return (
        <section className="container col-lg-7">
            <article className="row align-items-center justify-content-center">
                <div id="aboutme">
                    <img src={portfoliopic} width="180" height="257" className="float-left d-flex flex-wrap javier" alt="Javier A. Barragan" />
                    <h5><b>Location:</b> Dallas, Texas</h5>
                    <h5><b>Email:</b> javier.a.barragan92@gmail.com</h5>
                    <p><b>Bio: </b>Full-Stack web developer and US Army Veteran with a deep desire to learn the latest technologies and gain experience help create better user experiences on the web.</p>
                    <p>Current bachelor’s graduate of the University of Texas at El Paso, with pursuing a Certificate from the Southern Methodist University's Coding Bootcamp Program. Skills in HTML5, JavaScript, CSS, Node.js, and other applications. 
                        I have proven leadership and teamwork experience as a US Army Officer deployed overseas in the Middle East and currently in the Army Reserve. </p>  
                    <p>Not a stranger to hard work, team-communication, adapting to an ever-changing work environment, and adversity, I am willing to relocate <i>anywhere</i>. With proven social skills, team experience, tech skills and the strongest desire to learn, 
                        I can be a technically flexible and great addition to any team. </p>
                    <p><i>"Never was anything great achieved without danger"- Niccolo Machiavelli</i></p>
                </div>
            </article>
        </section>
        );
    };
    export default AboutMe;