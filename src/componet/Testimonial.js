import React from 'react'

function Testimonial() {
    return (
        <>
            {/* <h1 style={{ textAlign: 'center' }}>Our Teams</h1> */}
            <h1 className='text-center mt-3'>Teams</h1>
            <div className='d-flex justify-evenly mt-4 '>
                <div className=' Magna w-3 shadow-lg mb-5 bg-white rounded'>
                    <div className='d-flex aline-item gap'>
                        <img src="client1.png" alt="" />
                        <div className='g-50'>
                            <b>Magna</b><br />
                            <span>Consectetur adipiscing</span>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                    </p>
                </div>
                <div className=' Magna w-3 shadow-lg  mb-5 bg-white rounded'>
                    <div className='d-flex aline-item gap'>
                        <img src="client2.png" alt="" />
                        <div className='g-50'>
                            <b>Magna</b><br />
                            <span>Consectetur adipiscing</span>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                    </p>
                </div>

            </div>
        </>
    )
}

export default Testimonial