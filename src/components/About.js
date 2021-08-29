import React from 'react'
import image1 from "./images/person.jpg";
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
                            <div className="topic">MERN STACK DEVELOPER</div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                            </p>
                            <div className="button">
                                <button>Hire Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
