import React, { useState } from 'react';
import LoginForm from "./LoginForm"
import './ForgotPassword.css';
import Login from "./Login"
function ForgotPassword() {


return (
<div>
    <header>
    <a href="/" class="brand-logo"><i class="large material-icons">directions_run</i></a>
    <div class="image-grid">
    <img class="image-grid-col-2 image-grid-row-2" src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2022/08/iStock-1404450332_Nine-characteristics-of-great-teamwork_v1-1120x630.jpg" alt="figures-holding-lightbulb"></img>

    </div>
    </header>
    <div>
    <h4>Forgot Password?</h4>
    {/* <Login /> */}
    
    




    <p>Enter your email address and we'll send you instructions to reset your password.</p>

   
    </div><a href="/Login" target="_blank">
   <h4>
SEND RESET INSTRUCTIONS
   </h4>
   </a>
</div>
    );
}




export default ForgotPassword;