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

           {/*<div class="details">
           <div class="eventHeading">
                கவிதை :  
              </div>
              <br />
              <div class="eventContent">
              நெஞ்சைக் கவர்ந்த வார்த்தைகளின் பிணைப்பைக் காகிதத்தில் கரை சேர்க்கக் கவிதைப் போட்டி.
              </div>
           </div>

           <div class="details">
           <div class="eventHeading">
              தமிழ் வினாடி வினா:  
              </div>
              <br />
              <div class="eventContent">
              தமிழ் குறித்து உங்கள் அறிதல்களைத் தமிழில் விடை எழுதத் தமிழ் வினாடி வினா.
              </div>
           </div>


           <div class="details">
           <div class="eventHeading">
              தமிழ் வினாடி வினா:  
              </div>
              <br />
              <div class="eventContent">
              தமிழ் குறித்து உங்கள் அறிதல்களைத் தமிழில் விடை எழுதத் தமிழ் வினாடி வினா.
              </div>
           </div>


           <div class="details">
           <div class="eventHeading">
              தமிழ் வினாடி வினா:  
              </div>
              <br />
              <div class="eventContent">
              தமிழ் குறித்து உங்கள் அறிதல்களைத் தமிழில் விடை எழுதத் தமிழ் வினாடி வினா.
              </div>
           </div>*/}
        </div>
        </div>
     </div>
  );
};

export default Event;
