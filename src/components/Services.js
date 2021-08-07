import React from 'react'
import "./services.css"
import "../vanilla-tilt"
function Services() {
    return (
        <div>
            <section className="services" id="services">
                <div className="content">
                    <div className="title"><span>My Projects</span></div>
                    <div className="boxes">
                        <div className="box">
                            <div className="icon">
                                <a href="https://github.com/varunsh17/Water-reminder-chrome-extension"><i class="fa fa-desktop" aria-hidden="true"></i></a>
                            </div>
                            <div className="topic">Chrome Extension</div>
                            <p>Chrome Extension for water reminder via notifications</p>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <a href="https://riotgaming.herokuapp.com/"><i class="fa fa-desktop" aria-hidden="true"></i></a>
                            </div>
                            <div className="topic">Esports Website</div>
                            <p>Website for hackathon !</p>

                        </div>
                        <div className="box">
                            <div className="icon">
                                <a href="https://node-app-17.herokuapp.com/"><i class="fa fa-desktop" aria-hidden="true"></i></a>
                            </div>
                            <div className="topic">Weather Website</div>
                            <p>using Nodejs to make water API calls</p>
                        </div>
                        {/* <div className="box">
                            <div className="icon">
                                <i class="fa fa-desktop" aria-hidden="true"></i>
                            </div>
                            <div className="topic">Competetive Programming</div>
                            <p>Practice makes a man perfect </p>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <i class="fa fa-desktop" aria-hidden="true"></i>
                            </div>
                            <div className="topic">Python</div>
                            <p>Know Python, but also familiar with Java </p>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <i class="fa fa-desktop" aria-hidden="true"></i>
                            </div>
                            <div className="topic">Coming Soon</div>
                            <p>Will update </p>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
