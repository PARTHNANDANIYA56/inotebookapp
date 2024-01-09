import React from 'react'

function Contacts() {
    return (
        <>
            <div className="mt-3 container text-center">
                <h1 className="mb-3"><b>Contacts</b></h1>
                <div className="d-flex row">
                    <div className="col">
                        <form className="form mt-5 ">
                            <div className="form-group ">
                                <input type="text" className="request-form w-75 user_login" autocomplete="off" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Your Name" />
                            </div>
                            <div className="form-group ">
                                <input type="text" className="request-form w-75 mt-5 no-outline user_login" autocomplete="off"
                                    id="exampleInputPassword1" placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="request-form w-75 mt-5 user_login" id="exampleInputEmail1" autocomplete="off"
                                    aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <textarea className="request-form w-75 mt-5 user_login" id="exampleFormControlTextarea1" rows="1"
                                    placeholder="Message"></textarea><br />
                                <button type="submit" className="user_submit mt-4">Submit</button>
                            </div>
                        </form>

                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Contacts