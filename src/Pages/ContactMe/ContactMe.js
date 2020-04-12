import React from "react";
import "./style.css";

function ContactMe() {
    return (
        <section className="container col-10">
            <div className="contact-me">
                <h5>Contact Me!</h5>
                <form name="contact" action="POST" data-netlify="true" >
                    <div className="labels">
                        <label>Your Name: <input type="text" name="name" /></label>
                        <label>Your Email: <input type="email" name="email"/></label>   
                    </div>
                    <label>Message: </label>
                    <div>
                        <textarea name="message" placeholder="Your message...."></textarea>
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </section>
        );
    };
export default ContactMe;