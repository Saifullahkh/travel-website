import React, { useEffect } from 'react'
import './Home.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';


function Home() {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  return (
    <>
    <div className='container-fluid' >
      <div className="row" id='home'>
        <div className="col">
            <h1 className='text-center text-white mt-5 fw-bolder'>Plan Your Trip With Travel <br /> Dot</h1>
            <p className='lead text-center text-light'>Travel to your favourite city with respectful of the <br /> environment</p>
            <div className="text-center">
               <button className="btn btn-warning mb-2">Explore Now</button>
            </div>
        </div>
      </div>

      <div className="row rounded   shadow-lg p-2 bg-white" id='home1'>
            <div className='col-md-3 form-group'>
                <label htmlFor="" >Location</label>
                <input type="text" className='form-control' placeholder='Dream Destination' />
            </div>
            <div className='col-md-3 form-group'>
                <label htmlFor="" >Distance</label>
                <input type="text" className='form-control' placeholder='K/Meters' />
            </div>
            <div className='col-md-3 form-group'>
                <label htmlFor="" >Price Range</label>
                <input type="text" className='form-control' placeholder='$140-3000' />
            </div>
            <div className='col-md-3 d-flex justify-content-center align-items-end'>
                <button className="btn btn-warning px-4">Submit</button>
            </div>
      </div>
    </div>

   
    </>
  )
}

export default Home
