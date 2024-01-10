import React from 'react'

function footer() {
  return (
    <>
      <div className='bg-dark text-white mt-5 p-4'>
        <div className='d-flex row p-5'>
          <div className='col-lg-3'>
            <h3>INOTEBOOK</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Category</li>
              <li>Books</li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <h3><b>HIGH STUDY</b></h3>
            <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae est eligendi hic quaerat quidem laudantium perspiciatis. Atque dolor molestiae voluptatibus eaque provident nobis harum magnam doloribus? Quidem quam a rem enim voluptas, distinctio praesentium inventore itaque accusantium iste pariatur tempora veniam adipisci sint est autem sapiente incidunt natus consequuntur nihil.</p>
          </div>
          <div className='col-lg-3'>
            <h4>Information</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
          </div>
          <div className='col-lg-3'>
            <h4>Helpful Links</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='col'>
            <p>@This Contecnt is Copyright</p>
          </div>
          <div className='gap col d-flex'>
            <a href="#"><img src="fb-icon.png" alt="" /></a>
            <a href="#"><img src="instagram-icon.png" alt="" /></a>
            <a href="#"><img src="linkedin-icon.png" alt="" /></a>
            <a href="#"><img src="twitter-icon.png" alt="" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default footer
