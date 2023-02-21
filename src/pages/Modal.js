import React, { useState } from "react";

const Modal = ({ open }) => {
  if (!open) return null;

  return (




 <div id="modal1" class="modal">
   <div class="modal-content">
     <h4>New Template</h4>
     <h1>Template name</h1>
     <p>Notes</p>
   </div>
   <div class="modal-footer">
     <a href="#!" class="modal-close waves-effect waves-green btn-flat">Add Exercises</a>
   </div>
 </div>
         





   
  );
};

export default Modal;
