import React from 'react';
import './Startpopup.css'

function StartPopup(props) {
    return (props.trigger) ? (
<div className="startpopup">
   <div clasName="startpopup-inner">
<button className="close-btn1" onClick={() => props.setTrigger(false)}>X</button>
  { props.children }
   </div>
   

</div>
 ) : "";
}



export default StartPopup;