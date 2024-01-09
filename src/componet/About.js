import React from 'react'

function About() {
    return (
        <>
            <div className="about-img">
                <div className="container">
                    <div className="row">
                        <div className="col pt-5 about_edu_img">
                            <img src="img-2.png" alt="" />
                        </div>
                        <div className="col p-5 mt-5">
                            <h1 className="text-white"><b>About Educations</b></h1>
                            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet,
                                consectetur adipiscing veniam</p>
                            <button type="button" className="btn-1 btn-sm mt-5">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
