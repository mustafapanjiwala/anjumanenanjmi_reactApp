import React from 'react'
import "./Login"

const Home = () => {
    return (
        <>
          <nav className="navbar navbar-custom navbar-expand-lg navbar-light">
        <div className="container-fluid ">
            <div className="flex2 d-flex justify-content-between align-items-end w-100">
                <div className="col-lg-6 col-md-6 col-12">
                    <a className=" navbar-brand d-inline-flex align-items-center" href="Login"
                        style={{marginLeft:"10px"}}>
                        <img src="/img/logo.png" alt="logo" />
                        <div className="flex">
                            <h1>Anjuman-e-Najmi</h1>
                            <h5 className="heading" style={{float: "right"}}>Hakimi Mohalla Ujjain</h5>
                        </div>
                    </a>
                </div>
                <a href="/">
                    <div className="logout">
                        <button  className="btn btn-warning btn-lg" type="submit" value="Logout" name="submit" > Logout </button>
                    </div>
                </a>


            </div>


        </div>
    </nav>

    <section id="hero">
        <div className="container full-height">
            <div className="row align-items-center justify-content-center full-height col-md-10 col-12 mx-auto my-auto">
                <div className="youtube">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oSJSxT6HrY0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </section>


    <section className="footer">
        <img src="/img/Footer%20panel.png" alt="" />
        <div className="container">

            <div className="row text-center col-md-12 col-12">

                <p>
                    © 2021 Anjuman-E-Najmi - All rights reserved.<br />
                    <span>Designed and developed by<b> Mustafa Panjiwala</b>.</span>
                </p>
            </div>
        </div>
    </section>
   
        </>
    )
}

export default Home
