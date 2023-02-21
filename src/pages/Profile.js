import { Route, Routes } from "react-router-dom";
import React from "react";
import "./Profile.css";
import Templates from "./Templates";
import Popup from "./Popups/Popup";
import { useState, useEffect } from "react";
import StartPopup from "./Popups/Startpopup";
import Modal from "./Modal";
import Popup1 from "./Popups/Popup1";
import Popup2 from "./Popups/Popup2";


function Profile() {
 
  const [buttonStartpopup, setButtonStartpopup] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonSecondPopup, setButtonSecondPopup] = useState(false);
  const [buttonThirdPopup, setButtonThirdPopup] = useState(false);
  const [buttonForthPopup, setButtonForthPopup] = useState(false);
  const [buttonFifthPopup, setButtonFifthPopup] = useState(false);
  const [buttonSixthPopup, setButtonSixthPopup] = useState(false);

  return (
    <div>
     
      <header className="profileh">
        profile
        <h3 className="strtwrkt">Start Workout</h3>
        <h4>
          <button
            onClick={() => setButtonStartpopup(true)}
            type="button"
            text="text"
            className="startworkout"
          >
            Start an Empty Workout
          </button>
          <Popup1
            trigger={buttonStartpopup}
            setTrigger={setButtonStartpopup}
          >
            <header className="strtwork">My Workout
           
            <button onClick={() => setButtonSixthPopup(true)}
         type="button" 
         text="text" 
         className="more btn waves-effect waves-light grey darken-4">
          <i className="medium material-icons icon3">more_horiz</i>
        </button>
        <Popup
            trigger={buttonSixthPopup}
            setTrigger={setButtonSixthPopup}
          >
          <ul>
          <li>


          <li class="list2">Edit Workout Name</li>
      <li class="list3">Adjust Start/End Time</li>
      <li class="list4">Add Photo</li>
      



          </li>
          </ul>
          </Popup>
           
           </header>
            <p className="strtworkp">my workouts:</p>
          </Popup1>
        </h4>
      </header>

      <h1 className="h1temp">
        Templates
        </h1>
        
          
        <div className="templateButton">
        <button
            onClick={() => setButtonPopup(true)}
            type="button"
            text="text"
            className="templateButton btn waves-effect waves-light grey darken-4"

          >
           <i class="medium material-icons icon2">content_copy</i>
          </button>
          
          <Popup2 trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1 className="selectf">yoooo</h1>
          <p className="selectf">New one(No folder)</p>
        </Popup2>
        
       
          <button onClick={() => setButtonThirdPopup(true)}
           type="button"
            text="text"
             className="templateButton btn waves-effect waves-light grey darken-4">
          <i className="medium material-icons icon">create_new_folder</i>
        </button>
</div>
        <StartPopup trigger={buttonThirdPopup} setTrigger={setButtonThirdPopup}>
          <h1 className="selectf">yoooo</h1>
          <p className="selectf">foldertime(No folder)</p>
        </StartPopup>
        
       
        
      
      
      <h2>
        My Templates (0)
        <button onClick={() => setButtonSecondPopup(true)}
         type="button" 
         text="text" 
         className="more btn waves-effect waves-light grey darken-4">
          <i className="medium material-icons icon3">more_horiz</i>
        </button>
        <Popup
            trigger={buttonSecondPopup}
            setTrigger={setButtonSecondPopup}
          >
            <h1>hey</h1>
          </Popup>
      </h2>

      
        <h3 className="template">
          <button
            onClick={() => setButtonForthPopup(true)}
            type="button"
            text="text"
            className="newTemplate"
          >
            Tap to Add New Template
          </button>
           <Popup
            trigger={buttonForthPopup}
            setTrigger={setButtonForthPopup}
          >
            <h1>hey</h1>
          </Popup>

           
          
        </h3>
        <h4 className="exmpTemps">
          Example Templates (1)
          <button onClick={() => setButtonFifthPopup(true)}
         type="button" 
         text="text" 
         className="more1 btn waves-effect waves-light grey darken-4">
          <i className="medium material-icons icon4">more_horiz</i>
        </button>
        <Popup
            trigger={buttonFifthPopup}
            setTrigger={setButtonFifthPopup}
          >
            <h1>hey</h1>
          </Popup>
        </h4>
        <h6>
          <Templates />
        </h6>
      
    </div>
  );
}

export default Profile;
