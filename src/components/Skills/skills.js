import React from "react";
import "./style.css";

function Skill(props) {
    // console.log(this.props);
    const app = props.app;
    return(
        <div className="skills">
            <img src={app.image} width="30" height="30"></img>
            <p>{app.name}</p>
        </div>
    )
}

export default Skill;