import React from 'react'

function Ourservice() {
  return (
    <>
      <h1 className='text-center'>Our Sevices</h1>
      <div className="mt-5 row container d-flex justify-evenly our-service gap  git">
        <div className="col shadow-lg mb-5 bg-white rounded">
          <div className="bookicon"></div>
          <h4 className="broadband_text"> STUDY ABROAD </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et d</p>
          <button type="button" className="btn btn-dark btn-sm mb-3">Read More</button>
        </div>
        <div className="col shadow-lg mb-5 bg-white rounded ">
          <div className="service_icon"></div>
          <h4 className="broadband_text" style={{ color: '#d7b911' }}>PREPARATIONS SERVICE</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et d</p>
          <button type="button" className="btn btn-dark btn-sm">Read More</button>
        </div>
        <div className="col shadow-lg mb-5 bg-white rounded">
          <div className="language_book"></div>
          <h4 className="broadband_text">LANGUAGE CLASSES</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et d</p>
          <button type="button" className="btn btn-dark btn-sm">Read More</button>
        </div>
      </div>
    </>
  )
}

export default Ourservice
