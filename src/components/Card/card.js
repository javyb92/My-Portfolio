import React from "react";
// import "../Cards/style.css";

function Card(props) {
    // console.log(this.props);
    const app = props.app;
    return(
            <div class="card">
                <img src= {app.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{app.name}</h5>
                        <p class="card-text">{app.description}</p>
                        <p className="card-text"><b>Tools Used: </b>{app.tools}</p>
                        <button type="button" className="btn btn-light btn-sm"><a href={app.links.githubUrl}>GITHUB</a></button>
                        <button type="button" className="btn btn-light btn-sm"><a href={app.links.demoUrl}>WEBSITE</a></button>
                    </div>
            </div>
    )
}

export default Card;
