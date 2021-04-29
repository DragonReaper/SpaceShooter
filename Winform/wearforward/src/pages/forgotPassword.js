import React from 'react';
import {Link} from "react-router-dom";

function ForgetPass(){
    return(
        <div className="reg-body">
            <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;800&display=swap" rel="stylesheet"/>
            </head>
            <div className="form">
                <div className="box">
                    <h4>FORGOT PASSWORD</h4>
                    <p className="sentence-2">Enter your email to receive a new password reset</p>
                    <ul>
                        <li><input className="input" type= "text" name= "Email" placeholder = "Email"></input></li>
                        <li><Link to="" className="submit">Submit</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ForgetPass;