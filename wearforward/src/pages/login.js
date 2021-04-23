import React from 'react';
import "../styles/login.css";

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
            <p className="sentence1">If you have an account, please log in.</p>
            <ul>
                <li><input className="input" type= "text" name= "Email" placeholder = "Email"></input></li>
                <li><input className="input" type= "password" name= "Password" placeholder = "Password"></input></li>
                <li><a className = "forgPass" href="">Forgot Password</a></li>
                <li><p className ="loginwith">Login with:</p></li>
                <li><a href=""><img className = "fbIcon" src={require('../assets/fbIcon.png').default}/></a></li>
                <li><a href=""><img className = "gmIcon" src={require('../assets/gmailIcon.png').default}/></a></li>
            </ul>
            </div>
            <div>
                <p className="wala"> </p>
            </div>
            <div className="box">
            <h3>FIRST TIME IN WEAR FORWARD?</h3>
            <p className="sentence2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus
ante, dapibus gravida diam eget, cursus porta nibh. rcu. Phasellus
porttitor, mauris vitae consequat consequat, mauris urna feugiat lorem,
et lacinia nunc dui vitae purus.</p>
            <p className="sentence3">If you have any concerns, please email us at (wear forward email).</p>
            <a className = "accountCR" href ="">CREATE AN ACCOUNT</a>

            </div>
        </div>
        </body>
    )
}

export default Login;