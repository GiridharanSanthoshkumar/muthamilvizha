import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Event from './components/Events';

import './App.css';

const events={
  "iyal":["இயற்றமிழ்",
    {"பேச்சுப்போட்டி" : "செவி கேட்ட செய்திகளைச் செவி கேட்கும் படி உரக்கப் பேச பேச்சுப்போட்டி.",
    "கவிதை": "நெஞ்சைக் கவர்ந்த வார்த்தைகளின் பிணைப்பைக் காகிதத்தில் கரை சேர்க்கக் கவிதைப் போட்டி.",
    "தமிழ் வினாடி வினா": "தமிழ் குறித்து உங்கள் அறிதல்களைத் தமிழில் விடை எழுதத் தமிழ் வினாடி வினா."

}]
,
  "isai":["இசைத்தமிழ்",{
    "இசை வினாடி வினா":"இன்னிசை குறித்த கேள்விகளுக்கு விடை அளிக்க இசை வினாடி வினா.",
    "வில்லுப்பாட்டு":"வில்லிசைப் போரில் தங்கள் அணியுடன் கலந்து களமேற போட்டிக் களமாம் வில்லுப்பாட்டு.",
    "solo-singing":"Showcase your talent in a solo singing event where you can explore the rich diversity of Indian music."
  }
  ],
  "nadanam":["நடனம்",{
    "கிராமிய நடனம்":"நாட்டுப்புற கலையின் துள்ளல் வடிவமும் பாரம்பரிய நடனங்களை அரங்கேற்றக் கிராமிய நடனம்",
    "Solo dance":"This captivating event showcases individual expression, with dancers enchanting the audience through powerful and emotive performances.",
    "Group dance":"This electrifying event turns the stage into a vibrant showcase of creativity, where teams perform dynamic and synchronized dance routines that mesmerize the audience."
  }
 ],
  "chithiram":["சித்திரத்தமிழ்",{
    "Soap carving":"An event where intricate designs are sculpted from bars of soap, transforming them into detailed, artistic pieces using simple tools.",
    "Pencil sketching":"An event which brings life to a blank sheet using graphite, creating impactful black-and-white images as vibrant as colorful ones.",
    "Illuminating the Dark":"This art uses white on black to symbolize light and hope breaking through darkness, highlighting resilience and positivity.",
    "Coffee Painting":"A unique art form that utilizes coffee as a medium to create intricate and expressive artworks.Let's manipulate coffee stains into earthy-toned masterpieces.",
    "Paper Dressing":"Fashion speaks without words, and this event provides a platform to craft sustainable dresses from newspapers.",
    "Body painting": "Here is an immersive art where human skin becomes the canvas for striking and temporary masterpieces."
  
  }
 

],
  "naadagam":["நாடகத்தமிழ்",{
    "Dumb C":"நடிப்பின் வழியாக நினைத்த வார்த்தைகளை வரையறுக்கச் செய்ய Dumb C",
    "கலக்கப்போவது யாரு?":'தள்ளாடிக் கிடந்த மனநிலையை தாங்கள் நகைச்சுவையின் வழியாகத் துள்ளச் செய்ய "கலக்கப்போவது யாரு?"',
    "தனிநபர் நாடகம்":"நாடகத் தமிழைத் தனி நபர் இழுத்து தன்னுள் பூட்டி நடிக்கத் தனிநபர் நாடகம்",
    "தனி நபர் மௌன மொழி நாடகம்":"உணர்ச்சிகள் கொட்டி உடல் பாவனையால் மௌனமாய் நடித்திடத் தனி நபர் மௌன மொழி நாடகம்"
  }
 
]


}


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/iyal" element={<Event eventlist={events["iyal"]}/>} />
          <Route path="/event/isai" element={<Event eventlist={events["isai"]}/>} />
          <Route path="/event/nadanam" element={<Event eventlist={events["nadanam"]}/>} />
          <Route path="/event/chithiram" element={<Event eventlist={events["chithiram"]}/>} />
          <Route path="/event/naadagam" element={<Event eventlist={events["naadagam"]}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
