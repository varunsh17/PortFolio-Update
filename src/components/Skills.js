import React from 'react'
import "./skills.css"
function Skills() {
    return (
        <div>
            <section className="skills" id="skills">
                <div className="content">
                    <div className="title"><span>My Skills</span></div>
                    <div className="skill-details">

                        <span className="badge bg-dark" >Node js</span>
                        <span className="badge bg-dark" >React js</span>
                        <span className="badge bg-dark" >Mongo DB</span>
                        <span className="badge bg-dark" >Express js</span>
                        <span className="badge bg-dark" >Python</span>
                        <span className="badge bg-dark" >Bootstrap</span>
                        <span className="badge bg-dark" >Html & Css</span>
                        <span className="badge bg-dark" ><a href="https://www.codechef.com/users/shanky17" target="_blank" style={{ color: "white" }}>Codechef</a></span>
                        <span className="badge bg-dark" ><a href="https://leetcode.com/varunsh170502/" target="_blank" style={{ color: "white" }}>Leetcode</a></span>




                    </div>
                </div>
            </section>


        </div>
    )
}

export default Skills
