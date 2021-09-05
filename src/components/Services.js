import React from 'react'
import "./services.css"
import image from "./images/movie.png"
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
                        <h5 className="card-title">Movie streaming Website </h5>
                        <p className="card-text">use of API for search bar ,html,css</p>
                        <a href="https://movie17.netlify.app/" target="_blank" className="btn btn-primary">Project Link</a>
                    </div>
                </div>
                {/* 2ND */}
                <div className="card my-4" style={{ width: '20rem' }}>
                    <img src="https://lh3.googleusercontent.com/I_UNnMoOxIXPSINHFgvbZ5_Yo-0v7eF_YYWcqsjUje79fQIeUQFsuiPwRwd9sesax0Wdu9BNJcSlfVcQv1Zas0Ejjg=w640-h400-e365-rj-sc0x00ffffff" className="card-img-top" alt="..." style={{ height: "35vh" }} />
                    <div className="card-body">
                        <h5 className="card-title">Chrome Extension</h5>
                        <p className="card-text">A Water Reminder for drinking water in desired amount of time .</p>
                        <a href="https://chrome.google.com/webstore/detail/stay-hydrated/fomabijmpnfclpemikfcenpgpampogmo?hl=en-US" target="_blank" className="btn btn-primary">Project Link</a>
                    </div>
                </div>
                {/* 3RD */}
                <div className="card my-4" style={{ width: '20rem' }}>
                    <img src="https://i2.wp.com/devdactic.com/wp-content/uploads/2020/10/ionic-firebase-chat.png?resize=720%2C400&ssl=1" className="card-img-top" alt="..." style={{ height: "35vh" }} />
                    <div className="card-body">
                        <h5 className="card-title">FireChat</h5>
                        <p className="card-text">A firebase Chatting website made using Firebase and React-js as real time datebase with google authentication  </p>
                        <a href="https://firechat17.netlify.app" target="_blank" className="btn btn-primary">Go to Firechat</a>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Services

