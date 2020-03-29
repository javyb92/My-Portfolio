import React, { Component } from "react";
// import "./style.css";
import apps from "../../data/apps.js";
import Card from "../Card/card";


class Cards extends Component {    

  render(){
    return (
        <section className="container col-9 justify-items-center" id="card-holder">
          <div class="card-deck">
          {apps.map(function(app, index){
                return (
                  <Card app={app} />
                );
              })}
          </div>
        </section>



    );
  } 
}


export default Cards;