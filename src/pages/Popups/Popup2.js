import React from 'react';
import './Popup2.css'

function Popup2(props) {
    return (props.trigger) ? (
<div className="popup2">
   <div clasName="popup-inner2">
<button className="close-btn2" onClick={() => props.setTrigger(false)}>X</button>
  { props.children }
   </div>
   

</div>
 ) : "";
}



export default Popup2;