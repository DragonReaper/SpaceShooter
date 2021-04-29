import React from 'react';
import {Link} from "react-router-dom";

function Authentication(){
    return(
        <div className="reg-body">
            <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;800&display=swap" rel="stylesheet"/>
            </head>
            <div className="form">
                <div className="box">
                    <h4>AUTHENTICATION</h4>
                    <p className="sentence-2">Please see your email for the code sent.</p>
                    <ul>
                        <li><input className="inputCode" type= "text" name= "code" placeholder = "Type Here"></input></li>
                        <li><Link to="/register-success" className="submit">Submit</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Authentication;