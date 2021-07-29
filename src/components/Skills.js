import React from 'react'
import "./skills.css"
function Skills() {
    return (
        <div>
            <section className="skills" id="skills">
                <div className="content">
                    <div className="title"><span>My Skills</span></div>
                    <div className="skill-details">
                        <div className="left">
                            <div className="topic">Skills reflect our knowledge</div>
                            <p>Right now learning web development since 6 months ,backend is still ongoing and going to 
                            become Full stack soon Here are my skills ratio till now.</p>
                            <div className="experience">
                                <div className="num">0</div>
                                <div className="exp">Years <br/>Of experience</div>
                            </div>
                            Hoping to gain more knowledge and experience from you 
                        
                    </div>
                    <div className="boxes">
                        <div className="bux">
                            <div className="topic">HTML</div>
                            <div className="num">90%</div>
                        </div>
                        <div className="bux">
                            <div className="topic">CSS</div>
                            <div className="num">70%</div>
                        </div>
                        <div className="bux">
                            <div className="topic">REACT JS</div>
                            <div className="num">80%</div>
                        </div>
                        <div className="bux">
                            <div className="topic">NODE JS</div>
                            <div className="num">50%</div>
                        </div>
                        <div className="bux">
                            <div className="topic">MONGO DB</div>
                            <div className="num">70%</div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills
