import React from 'react';
import Wearforward_logo from '../assets/Icons/Wearforward.png';
import Helmet from 'react-helmet';
import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

function MissionVision(){
    return (
       <div class="max-h-full max-w-full">
           <Helmet bodyAttributes={{style: 'background-color : #fad2e0'}}/>
            <div class=" pt-80 float-right">
                <h2 class="text-4xl text-right pr-96 underline mr-24">VISION</h2> <br/> 
                <p class="float-right text-1xl mr-16 ml-96 pl-60 pr-40 mt-2 text-justify w-4/7 ">To be the premier clothing as a service fashion recommerce and social enterprise in the world; an inspiration to the people and fashion industry in making relevant positive actions toward clothing issues both consumers and producers face today; and an advocate of the Quadruple Bottom Line framework of purpose, people, planet, and profit for a sustainable and circular fashion.
                </p>
            </div> 
            <div class="pt-16 float-right">
                <h2 class = "text-4xl text-right underline pr-96 mr-20">MISSION</h2> <br/>
                <p class="float-right text-1xl mr-16 ml-96 pl-60 pr-40 mt-2 text-justify w-4/7 pb-56 ">To revolutionize fashion and mindsets and build a proactive, progressive, and purpose-driven community that embraces circular fashion and encourages collaborative consumption through clothing as a service—an all-in-one circular fashion marketspace and a fashion freelancing and hiring platform—while making profit and improving the planet and lives of the people.
                </p>
            </div>
            
            <div class="absolute pt-96 pl-96 bottom-96">
                <img src = {Wearforward_logo} alt = "wf" height={400} width={400} class="object-bottom"/>
                <h2 class="text-3xl underline text-center absolute pl-36 pt-5">The Logo</h2>
                <h1 class="text-2xl underline text-center absolute pl-24 pt-16">Information about logo</h1>
            </div>
            <h3 class=" text-center items-center text-red-primary">Scroll Down</h3>
        </div>
    )
}

export default MissionVision;