import React from 'react';
import '../styles/Events.css';
import arrow from "./arrow.png";

const Event = (props) => {


  return (
     <div id="Event">
        <div class="arrow">
        <a href="/">
           <img src={arrow} alt="Arrow"></img>
           </a>
        </div>

        <div class="content">
        <div class="eventTitle">
            <h1>{props.eventlist[0]}</h1>
        </div>

        <div class="eventList1">
        {Object.entries(props.eventlist[1]).map(([key, value]) => (
        <div className="details" key={key}>
          <div className="eventHeading">
            {key} :
          </div>
          <br />
          <div className="eventContent">
            {value}
          </div>
        </div>
      ))}
        </div>
        </div>

        <button className="btn1" onClick={()=>window.location.href ="https://drive.google.com/drive/folders/1u6XB05VPV0i58JJ0MZo4EqVVMm7T2Iau"}>RULEBOOK</button>
     </div>
  );
};

export default Event;
