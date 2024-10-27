import React from 'react';
import Bubble from './Bubble.js';
import '../styles/Home.css';
import separator from './separator.png';
import iyal from "./iyal_img.png";
import isai from "./isai_img.png";
import nadanam from "./nadanam_img.png";
import naadagam from "./naadagam_img.png";
import chithiram from "./chithiram_img.png";

const Home = () => {
  return (
     <div id="home">
        <div class="header">
           <div>அரசினர் பொறியியற் கல்லூரி</div>
           <div>கோவை - 13 </div>
           <div>தமிழ் மற்றும் நுண்கலை மன்றம் </div>
           <div>வழங்கும்</div>
        </div>
        <img class="eventName" src="./name.png" alt="name" />
        {/* <div className="segment3">
          <div class="dateDetails">
             <pre>
             DATE AND
             <br></br> 
             OTHER STUFFS
             </pre>
          </div>
         <img class="logo" src="./logo.png" alt="logo"/>
         <div class="dateDetails">
         <pre>
             DATE AND 
             <br></br>
             OTHER STUFFS
             </pre>
          </div>
        </div> */}

        <div class="date">
        <div class="englishdate">
        <h3 >நவம்பர் 15 & 16 </h3>
        <h2>2024</h2>
           <button class="btn">
            RULEBOOK
           </button> 
        </div>
      <div class="tamildate">
 

         <h3 class="date1">
            ஐப்பசி 29</h3>
            <h3 className='date2'>கார்த்திகை 01</h3>
            <button class="btn">
            REGISTRATION
           </button>  
            
      </div> 

        </div>
        
        <div class="about">
        <h2>முத்தமிழ் விழா '24 </h2>
        மகதத்தின் மகத்தான வித்தகனாம் ஏகலைவன் வழியில் திகழும் கோவை அரசினர் பொறியியல் கல்லூரியின் கலைவித்தகர்களாம் தமிழ் மற்றும் நுண்கலை மன்ற ஏகலைவர்களின் பெருமைபெற்ற நிகழ்வாக, தமிழின் தாய்மையைப் பறைசாற்றும் "முத்தமிழ் விழா '24" புது ஒளியுடன் அரங்கேறுகிறது. 


       
        </div>
      
        

        <div class="eventList">
        
           <Bubble no="1" img={iyal} link="/event/iyal"/>
           
           <Bubble no="2" img={isai} link="/event/isai"/>
           <Bubble no="3" img={nadanam} link="/event/nadanam"/>
           <Bubble no="4" img={naadagam} link="/event/naadagam"/>
           <Bubble no="5" img={chithiram} link="/event/chithiram"/>
           
        </div>


        <div class="footer">

        <div class="contact">
           <div class="contactHeading"><h2>Contact</h2></div>
           <p class="contactDetails">Madhumitha</p>
           <p class="contactDetails">9361140647</p>
           <p class="contactDetails">selvaKumar</p>
           <p class="contactDetails">7598232063</p>
           
        </div>

        <div class="separator">
            <img src={separator} alt="Separator"></img>
        </div>

        {/* <div style={containerStyle}> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2774441318093!2d76.93338377468712!3d11.017798289146016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858dc68b80bbf%3A0x24bab8d60d2bc693!2sGovernment%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1729670142383!5m2!1sen!2sin"
        width="50%"
        height="25%"
        class="iFrame"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    {/* </div> */}
        </div>
     </div>
  );
};

export default Home;
