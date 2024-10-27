import React from 'react';


const Bubble = (props) => {
    return (
      <div className={`bubble ${(props.no === '2' || props.no === '4') ? 'apply-padding' : ''}` }>
      <a href={props.link}>
         <img class="bubble1" src={props.img} alt="bubble1"></img>
         </a>
      </div>
    );
  };
  
  export default Bubble;