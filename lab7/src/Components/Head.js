import React from "react"
import { Link } from "react-router-dom";

const Head = () =>{
    return(
        <div>
            <Link to="/">Home </Link>
            <Link to="/usestate">UseState </Link>
            <Link to="/count">Count </Link>
            <Link to="/post">All Post </Link>
            
        </div>
    )
}

export default Head;