import React from 'react'

function Card({card,img,title,text,dot,text1,btnClass,btn}) {
  return (
    <div>
      <div class={card} >
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <div className='d-flex justify-content-between justify-content-start align-items-center'>
              <p class="card-text">{text}</p>
              <p><span className='text-warning fw-bolder fs-4'>{dot}</span>{text1}</p>
            </div>
            <div className='d-grid'>
              <a href="" className={btnClass} >{btn}</a>
            </div>
            
        </div>
       </div>
    </div>
  )
}

export default Card
