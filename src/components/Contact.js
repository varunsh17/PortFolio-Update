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
                        <p>
                            Hope you like the visit, reach me out at any time ! </p>
                        <div className="button">
                            <button>Let's Chat</button>
                        </div>
                        <div className="contact-icons">

                            <a href="https://github.com/varunsh17"><i className="fa fa-github" aria-hidden="true"></i></a>

                            <a href="mailto:varunsh170502@gmail.com?subject=Work for me &body=Hello Varun I wanted to takl to you"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Conatct
