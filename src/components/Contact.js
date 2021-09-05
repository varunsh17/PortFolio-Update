import React from 'react'
import "./contact.css"
function Conatct() {
    return (
        <div>
            <section className="contact" id="contact">
                <div className="content">
                    <div className="title"><span>Contact Me</span></div>
                    <div className="text">
                        <div className="topic">Have Any Work For Me ?</div>
                        <p style={{ fontSize: "1.3rem" }}>
                            Hope you like the visit, reach me out at any time ! </p>
                        <div className="button">
                            <a href="mailto:varunsh170502@gmail.com?subject=Regarding Hiring you &body=Hello Varun, I am ..."><button>Let's Chat</button></a>
                        </div>
                        <div className="contact-icons">

                            <a href="https://github.com/varunsh17"><i className="fa fa-github" aria-hidden="true" target="_blank"></i></a>

                            <a href="mailto:varunsh170502@gmail.com?subject=Regarding Hiring you &body=Hello Varun I am .."><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Conatct
