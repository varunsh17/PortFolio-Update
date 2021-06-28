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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                                a galley of type and scrambled .</p>
                            <div className="experience">
                                <div className="num">10</div>
                                <div className="exp">Years <br/>Of experience</div>
                            </div>
                        
                    </div>
                    <div className="boxes">
                        <div className="box">
                            <div className="topic">HTML</div>
                            <div className="num">90%</div>
                        </div>
                        <div className="box">
                            <div className="topic">CSS</div>
                            <div className="num">70%</div>
                        </div>
                        <div className="box">
                            <div className="topic">REACT JS</div>
                            <div className="num">60%</div>
                        </div>
                        <div className="box">
                            <div className="topic">NODE JS</div>
                            <div className="num">80%</div>
                        </div>
                        <div className="box">
                            <div className="topic">MONGO DB</div>
                            <div className="num">80%</div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills
