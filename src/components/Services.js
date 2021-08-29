import React from 'react'
import "./services.css"
import "../vanilla-tilt"
function Services() {
    return (
        <div>
            <section className="services" id="services">
                <div className="content">
                    <div className="title"><span>My Projects & Achievements</span></div>
                    <div className="boxes">
                        <div className="box">
                            <div className="icon">
                                <i class="fa fa-desktop" aria-hidden="true"></i>
                            </div>
                            <div className="topic">E-sports website</div>
                            <p><a href="https://riotgaming.herokuapp.com/" target="_blank" style={{ color: "white" }}>VIEW PROJECT</a></p>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <i class="fa fa-desktop" aria-hidden="true"></i>
                            </div>
                            <div className="topic">Backend</div>
                            <p>Currently learning, will update soon !</p>
                        </div>
                        <div className="box">
                            <div className="icon">
                                <i class="fa fa-desktop" aria-hidden="true"></i>
                            </div>
                            <div className="topic">Competetive</div>
                            <p><a href="https://www.codechef.com/users/varunsh17" target="_blank" style={{ color: "green" }}>CodeChef</a>
                                <a href="https://leetcode.com/varunsh170502/" target="_blank" style={{ color: "brown" }}>   LeetCode</a>
                                <a href="https://codeforces.com/profile/varunsh17" target="_blank" style={{ color: "blue" }}>    CodeForces</a></p>
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
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Services

