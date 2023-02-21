import React from 'react';
import './Settings.css';

function Settings() {
    return (
        <div>
<div className="new1">
        <h1 className="upgradeh1">
            Upgrade Your Account Now!
 </h1>
<p class="p1">Get Fitness PRO and unlock all exclusive features to take your workouts to the extreme.</p>
    <div className="special">
    <ul>
    <img className="upgrade" src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg" alt= "" />

      <li class="list1">Store Unlimited Routines</li>
      <li class="list1">workouts, analytics, insights</li>
      <li class="list1">Track body part measurements</li>
      <li class="list1">Tools to speed up your workout</li>
      <i class="material-icons">arrow_downward</i>

    </ul>
   

    </div>
    
    <a href="#!"><button type="button" text="text" className="probutton">See Fitness PRO Pricing</button>
  </a>
</div>
  <header className="headerstore">Store unlimited routines</header>
 <p className="para1">Store your entire routine folder and fain acces to Fitness' growing database of custom proogramming</p>
 <p className="limit"> <i class="material-icons">https</i>Current free limit: 3 routines.</p>
  <img className="workoutpic" src="https://evolvefitnessinc.com/wp-content/uploads/sites/15/2019/04/1.jpg" alt= "" />
  <header className="charts">Charts, analytics and Insights.</header>
 <p className="para2">Gain valuable insights to optimize your training and workout program for maximum growth.</p>
 <img className="chartimg" src="https://miro.medium.com/max/640/1*lascsfTmQsCOwO4XMM4p1A.webp" alt= "" />
  </div>
    )
}
export default Settings;