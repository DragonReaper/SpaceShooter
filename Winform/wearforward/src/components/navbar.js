import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar =() =>{
    return(
    <div class = "NavBar">
        <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;800&display=swap" rel="stylesheet"/>
        </head>
        
        <div class="wearforwardnavigationbar">
            <Link className="Nav_link" to="/">
                <text class="hometext">
                    <label class="homelabel">home</label>
                </text>
            </Link>

            <Link className="Nav_link" to ="/about-us">
                <text class="aboutustext">
                    <label class="aboutuslabel">
                        <div class="aboutusdropdowndiv">
                            <button class ="aboutusdropdownbutton">about us<i class ="fa fa-carat-down"></i></button>
                            <div class ="aboutusdropdowncontent">
                                <a to="/about-us">Our Purpose</a>
                                <a to="/about-us">What we Offer</a>
                                <a to="/about-us">Meet the Wear Forward Family</a>
                                <a to="/about-us">FAQ</a>
                            </div>
                        </div>
                    </label>
                </text>
            </Link>

            <Link className="Nav_link" to= "/service">
                <text class="servicetext">
                    <label class = "servicelabel">service</label>
                </text>
            </Link>

            <Link className="Nav_link" to ="/projects">
                <text class="projectstext">
                    <label class="projectslabel">
                        <div class="projectsdropdowndiv">
                            <button class ="projectsdropdownbutton">projects<i class = "fa fa-carat-down"/></button>       
                            <div class = "projectsdropdowncontent">
                                <a to = "/projects">events</a>   
                            </div>
                        </div>
                    </label>
                </text>
            </Link>

            <Link className="Nav_link" to = "/marketplace">
                <text class="marketplacetext">
                    <label class="marketplacelabel">
                        <div class="marketplacedropdowndiv">
                            <button class ="marketplacedropdownbutton">marketplace<i class = "fa fa-carat-down"/></button>   
                            <div class = "marketplacedropdowncontent">
                                <a to = "/marketplace">fashion on demand</a>
                                <a to = "/marketplace">collaborator's closet</a>
                                <a to = "/marketplace">featured philippine textile</a>
                                <a to = "/marketplace">ladies</a>
                                <a to = "/marketplace">gentlemen</a>
                                <a to = "/marketplace">children</a>
                                <a to = "/marketplace">basics</a>
                                <a to = "/marketplace">coats</a>
                                <a to = "/marketplace">tops</a>
                                <a to = "/marketplace">bottoms</a>
                                <a to = "/marketplace">skirts</a>
                                <a to = "/marketplace">overalls</a>
                                <a to = "/marketplace">shoes</a>
                            </div>
                        </div>
                    </label>
                </text>
            </Link>

            <Link className="Nav_link" to = "/fashion-stories">
                <text class="fashionstoriestext">
                    <label class="fashionstorieslabel">
                        <div class="fashionstoriesdropdowndiv">
                            <button class = "fashionstoriesdropdownbutton">fashion stories<i class ="fa fa-carat-down"></i></button>  
                            <div class ="fashionstoriesdropdowncontent">
                                <a to = "/fashion-stories">feature of the month</a>
                            </div>
                        </div>
                    </label>
                </text>
            </Link>

            <Link className="Nav__link" to = "/community">
                <text class="communitytext">
                    <label class="communitylabel">community</label>
                </text>
            </Link>

            <Link className="Nav__link" to = "/contact-us">
                <text class="contactustext">
                    <label class="contactuslabel">contact us</label>
                </text>
            </Link>

            <text class = "usertext">
                <img class = "usericonnextusertext" src ={require('../assets/Icons/UserIcon.png').default} alt = "user icon"/>
                <label class = "userlabel">user</label>
            </text>
        </div> 
    </div>
)};
export default NavBar;