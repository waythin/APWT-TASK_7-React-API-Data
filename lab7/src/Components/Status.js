import React, { useState } from "react";

const Status=()=>{

    var [color, setColor] = useState("none");


    

    return(
        <div>
            <h1 style={{backgroundColor: color}}>Current Status : {color}!</h1>
            <button type="button" onClick={() => setColor("red")} >Busy</button>
            <button type="button" onClick={() => setColor("green")} >Available</button>
            <button type="button" onClick={() => setColor("yellow")} >Away</button>
        </div>
    )
}
export default Status;