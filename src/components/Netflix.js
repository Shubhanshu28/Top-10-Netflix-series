import React from 'react'

function Netflix(props) {
  return (
    <>
    <div className='cards'>
        <div className='card'>
        <img src={props.imgsrc} 
        alt='myPic'
        className='card_img'/>
        <br/>
       
        <div className='card_info'>
        <span className='card_category'>{props.title}</span>
    <h3 className='card_title'>{props.sname}</h3>
    <a 
    href={props.link} target = ' '>
    <button>Watch Now</button>
    </a>
    </div>
    </div>
    </div>
    </>
  )
}

export default Netflix