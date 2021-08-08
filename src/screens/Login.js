import React, { useState } from 'react'
import data from "../loginData.json"
import Home from "./Home"

const Login = () => { 

    const [its, setIts] = useState("")
    const [password, setPassword] = useState("" )
    const [error, setError] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data[its] || data[its].password !== password){

            console.log("incorrect");
            setError(true);

        }
        else{
            setLoggedIn(true);
            console.log("correct");
        }    
    }

    if(loggedIn)
        return <Home/>
    // console.log(error)
    return (

        <>
    <nav className="navbar navbar-custom navbar-expand-lg navbar-light">
        <div className="container-fluid ">
            <a className=" navbar-brand d-inline-flex align-items-center" href="index.php" stle={{marginLeft: "10px"}} >
                <img src="/img/logo.png" alt="logo" />
                <div className="flex">
                    <h1>Anjuman-e-Najmi</h1>
                    <h5 className="heading" style={{float: "right"}}>Hakimi Mohalla Ujjain</h5>
                </div>
            </a>

        </div>
    </nav>

    <section id="hero">
        <img src="/img/jali.png" className="jali" alt="jali" />
        <div className="container full-height">
            <div
                className="row align-items-center justify-content-center full-height col-md-6 col-12 mx-auto my-auto logbox">
                <div className="loginbox">
                    <h1>login for majlis relay</h1>
                    {error && 
                    <p className='error'>Incorrect ITS id or Password</p>
                    }
                    <form onSubmit={handleSubmit} method="POST">
                        <input type="text" placeholder="Enter ITS" name="its" value={its} onChange={(e) => setIts(e.target.value)}  />

                        <input type="password" placeholder="Enter Password" name="password" value={password} onChange = {(e) => setPassword(e.target.value)} />
                        <br></br>
                        <input type="submit" value="Login" name="submit" />
                        <br></br>
                    </form>
                </div>

            </div>
        </div>
    </section>


    <section className="footer">
        <img src="/img/Footer%20panel.png" alt="" />
        <div className="container">

            <div className="row text-center col-md-12 col-12">

                <p>
                    © 2021 Anjuman-E-Najmi - All rights reserved.<br></br>
                    <span>Designed and developed by<b> Mustafa Panjiwala</b>.</span>
                </p>
            </div>
        </div>
    </section>
   
        </>
    )
}

export default Login
