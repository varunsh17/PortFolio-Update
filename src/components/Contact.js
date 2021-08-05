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
                         simply dummy text of the printing and typesetting industry. 
                         Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                         <div className="button">
                            <button>Let's Chat</button>
                        </div>
                         <div className="contact-icons">
                         
                        <a href="https://github.com/varunsh17"><i class="fa fa-github" aria-hidden="true"></i></a>
        
                        <a href="mailto:varunsh170502@gmail.com?subject=Work for me &body=Hello Varun I wanted to takl to you"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                     </div>
                     
                     </div>
                </div>
            </section>
        </div>
    )
}

export default Conatct
