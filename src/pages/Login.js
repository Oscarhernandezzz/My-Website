import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
 import LoginForm from './LoginForm';
 import './Login.css';

function Login() {
        const adminUser= {
                email: "admin@admin.com",
                password: "admin123"
        }
        const [user, setUser] = useState({name: "", email: ""});
        const [error, setError] = useState("");
        
        const Login = details => {
                console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
        console.log("Logged in");
        setUser({
                name: details.name,
                email: details.email
        });
        } else {
         console.log("Details do not match!");
         setError("Details do not match!");
        }
        }



        const Logout = () => {
              setUser({ name: "", email: ""});
              
        }

    return (
        <div>
        <header>
        
        <a href="/" class="brand-logo"><i class="large material-icons">directions_run</i></a>

        
 </header>

{(user.email != "") ? (
        <div className="Welcome">
<h2>Welcome, <span>{user.name}</span></h2>
<div className="img">
<h3>
        <img className="img" src="https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
</h3>
</div>
<h5>
<button className="Logout" onClick={Logout}>Logout</button>
</h5>
</div>

) : (
        <LoginForm Login={Login} error={error} />
)}



       
      </div>
    )
}

export default Login;