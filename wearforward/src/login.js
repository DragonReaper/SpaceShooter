import React from 'react';
import "./App.css";

function Login(){
    return(
        <body>
            <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;800&display=swap" rel="stylesheet"/>
            </head>
        <div className="form">
            <div className="box">
            <h3>LOGIN</h3>
            <p>If you have an account, please log in.</p>
            <ul>
                <li><input className="input" type= "text" name= "Email" placeholder = "Email"></input></li>
                <li><input className="input" type= "password" name= "Password" placeholder = "Password"></input></li>
                <li><a href="">Forgot Password</a></li>
            </ul>
            </div>
        </div>
        </body>
    )
}

export default Login;
