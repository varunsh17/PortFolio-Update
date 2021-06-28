import React from 'react'
import "./home.css"
import Typical from 'react-typical'
function Home() {
    return (
        <div className="homeall">
            <div className="home" id="home">
                <div className="home-content">
                    <div className="text">
                        <div className="text-one">Hello</div>
                        <div className="text-two">I'm Varun Sharma</div>
                        <div className="text-three">
                        <Typical
        steps={['Frontend', 3000, 'Backend still learning', 3000,'React js',3000,'Mern',3000,'Python']}
        loop={Infinity}
        wrapper="p"
      />
                        </div>
                        <div className="text-four">From Delhi</div>

                    </div>
                    <div className="button">
                        <button>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
