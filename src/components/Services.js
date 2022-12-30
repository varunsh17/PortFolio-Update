import React from 'react'
import "./services.css"
import image from "./images/movie1.png"
function Services() {
    return (
        <div>
            <section className="services" id="services">
                <div className="content">
                    <div className="title"><span>Projects</span></div>
                </div>
            </section>
            <div className="d-flex justify-content-around flex-wrap mx-5">
                <div className="card my-4" style={{ width: '20rem' }}>
                    <img src={image} className="card-img-top" alt="..." style={{ height: "35vh" }} />
                    <div className="card-body">
                        <h5 className="card-title">Maps clone  </h5>
                        <p className="card-text">Google Maps clone using API and get to know your current area of location </p>
                        <a href="https://maps-clone-varun.netlify.app/" target="_blank" className="btn btn-info">View Project</a>
                    </div>
                </div>
                {/* 2ND */}
                <div className="card my-4" style={{ width: '20rem' }}>
                    <img src="https://lh3.googleusercontent.com/I_UNnMoOxIXPSINHFgvbZ5_Yo-0v7eF_YYWcqsjUje79fQIeUQFsuiPwRwd9sesax0Wdu9BNJcSlfVcQv1Zas0Ejjg=w640-h400-e365-rj-sc0x00ffffff" className="card-img-top" alt="..." style={{ height: "35vh" }} />
                    <div className="card-body">
                        <h5 className="card-title">Chrome Extension</h5>
                        <p className="card-text">A Water Reminder for drinking water in desired amount of time .</p>
                        <a href="https://chrome.google.com/webstore/detail/stay-hydrated/fomabijmpnfclpemikfcenpgpampogmo?hl=en-US" target="_blank" className="btn btn-info">View Project</a>
                    </div>
                </div>
                {/* 3RD */}
                <div className="card my-4" style={{ width: '20rem' }}>
                    <img src="https://blog.logrocket.com/wp-content/uploads/2022/06/react-firebase-chat-app.png" className="card-img-top" alt="..." style={{ height: "35vh" }} />
                    <div className="card-body">
                        <h5 className="card-title">FireChat</h5>
                        <p className="card-text">A Chatting website made using Firebase and React-js as real time database with google authentication  </p>
                        <a href="https://firechat17.netlify.app" target="_blank" className="btn btn-info">View Project</a>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Services

