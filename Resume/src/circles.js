import React from 'react'
import img from './images/reactlogo.jpg'
import './circle.css'

const Circles = () => {
  return (
    <div>
        <div className="avatar-group">
  <div className="hidden-avatars">+10</div>
  <div className="avatar" style={{}} >
    <img src={img} alt="" style={{"height":"30px" , "width":"30px"}}/>
  </div>
  <div className="avatar">
    <img src={img} alt="" style={{"height":"30px" , "width":"30px"}}/>
  </div>
  <div className="avatar">
    <img src={img} alt="" style={{"height":"30px" , "width":"30px"}}/>
  </div>
  <div className="avatar">
    <img src={img} alt=""style={{"height":"30px" , "width":"30px"}} />
  </div>
  <div className="avatar">
    <img src={img} alt="" style={{"height":"30px" , "width":"30px"}}/>
  </div>
</div>

    </div>
  )
}

export default Circles