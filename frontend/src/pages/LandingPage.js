import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <div className="body">
            <div className="title">
                <h1 className="mainTitle">SabOOra</h1>
            </div>
            <div className="loginOptions">
                <button className="button1">Log In</button>
                <Link to="/registration-page">
                    <button className="button1">Register</button>
                </Link>
                <button className="button1">Enter as Guest</button>
            </div>
        </div>
    )
}

export default LandingPage;