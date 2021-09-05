import React from 'react'
import image1 from "./images/myimage.jpg";
import "./about.css"
function About() {
    return (
        <div>
            <section className="about" id="about">
                <div className="content">
                    <div className="title"><span>About Me</span></div>
                    <div className="about-details">
                        <div className="right">
                            <img src={image1} alt="image1" />
                        </div>
                        <div className="left">
                            <div className="topic">Qualifications</div>
                            <div className="pq">
                                <h5>Class-12 :Delhi public school ,Dwarka</h5>
                                <h5>Precentage :75% </h5>
                                <h5>College :NSUT(Netaji Subhas University of Technology)</h5>
                                <h5>Branch :Manufacturing Process and Automation Engineering</h5>
                                <h5>Currently :2nd Year</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
