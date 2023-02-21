import React from 'react';
import './Popup1.css'

function Popup1(props) {
    return (props.trigger) ? (
<div className="popup1">
   <div clasName="popup-inner1">
<button className="close-btn1" onClick={() => props.setTrigger(false)}>X</button>
  { props.children }
   </div>
   

</div>
 ) : "";
}



export default Popup1;