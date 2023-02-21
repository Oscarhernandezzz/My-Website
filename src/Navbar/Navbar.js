import React, { Component} from "react";


import './Navbar.css'
import 'materialize-css/dist/css/materialize.min.css'


class Navbar extends Component {
  
     render () {
       return(
        <nav>
<div className="nav-wrapper">
  <a href="/" class="brand-logo"><i class="large material-icons">directions_run</i>Fitness Development</a>
  <ul className="right hide-on-med-and-down">
    <li><a href="/Profile"><i className="material-icons">account_circle</i></a></li>
    <li><a href="/Search"><i className="material-icons">search</i></a></li>
    <li><a href="/Settings"><i className="material-icons">file_upload</i></a></li>
    <li><a href="/Login"><i className="material-icons">fast_forward</i></a></li>
  </ul>
</div>
</nav>


  )
 }
}



export default Navbar










