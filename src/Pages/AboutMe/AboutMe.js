import React from "react";
import "../AboutMe/style.css";
import portfoliopic from "../../img/portfoliopic.png";
// import portfoliopicwebp from "../../img/portfoliopic."

function AboutMe() {
  return (
    <section className="container col-10" id="about">
      <div className="aboutme">
        <img
          src={portfoliopic}
          width="180"
          height="auto"
          className="float-left d-flex flex-wrap javier"
          alt="Javier A. Barragan"
        />

        <p>
          <b>Location:</b> Dallas, Texas and open for relocation anywhere in the
          US.
        </p>
        <p>
          <b>Email:</b> javier.a.barragan92@gmail.com
        </p>
        <p>
          <b>Bio: </b>Full-Stack Software Developer and US Army Veteran with a
          deep desire to learn the latest technologies and gain experience help
          create better user experiences on the web.
        </p>
        <p>
          Current bachelor’s graduate of the University of Texas at El Paso,
          with pursuing a Certificate from the Southern Methodist University's
          Coding Bootcamp Program. Skills in HTML5, JavaScript, CSS, React,
          Node.js, and other applications. I have proven leadership and teamwork
          experience as a US Army Officer deployed overseas in the Middle East
          and currently in the Army Reserve having already served 8 years.{" "}
        </p>
        <p>
          Not a stranger to hard work, team-communication, adapting to an
          ever-changing work environment, and adversity, I am willing to
          relocate <i>anywhere</i>. With proven social skills, team experience,
          tech skills and the strongest desire to learn any technology, I can be
          a technically flexible and great addition to any team.{" "}
        </p>
        <p>
          <i>
            "Never was anything great achieved without danger"- Niccolo
            Machiavelli
          </i>
        </p>
      </div>
    </section>
  );
}
export default AboutMe;
