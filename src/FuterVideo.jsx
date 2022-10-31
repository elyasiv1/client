import React from "react";
import './styleing/FuterVideo.css'
import NikeBasketball from "./Assets/NikeBasketball.mp4"

export default function Futer() {
    return <div className="mainFutter">1
        <video className="futerVideo" src={NikeBasketball} title="Nike Basketball" 
         autoPlay loop muted ></video>
        {/* <iframe width="727" height="409" src="https://www.youtube.com/embed/Tn70NxIMk2Q"
            title="Nike Basketball 2017-2018 NBA Commercial" frameborder="0" allow="accelerometer; autoplay;
         clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </div>
}