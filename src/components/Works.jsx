import React from 'react'
import {Button} from 'react-bootstrap'


const Works = (props) => {
  const {info, active,i} = props
  return (
    <div className='works' style={active[i] ? {display: 'block'}:{display: 'none'}}>
      <div className="pc">
      <div className="mock1">
        <img src={process.env.PUBLIC_URL+info.img} alt="pc" />
        <img src={process.env.PUBLIC_URL+"img/hover.png"} alt="hoverImg" className='hover' />
        </div>
      </div>
      {
        info.mobileImg===null||
        <div className="mobile">
        <div className="mock2">
          <img src={process.env.PUBLIC_URL+info.mobileImg} alt="mobile"/>
          <img src={process.env.PUBLIC_URL+"img/hover.png"} alt="hoverImg" className='hover' />
        </div>
      </div>
      }
      <div className="detail">
        <h3>0{info.id}</h3>
        <h2>{info.title}</h2>
        <h5> {info.project}</h5>
        <p>
        {info.contents}
        </p>
        <div className="btnGroup1">
        {
          info.button.map((button,i)=>  
          <Button variant="dark" key={i}>{button}</Button>
        )
        }
        </div>

        <div className="btnGroup2">
        <Button variant="outline-dark" onClick={()=>{
          window.open(info.page)
        }}>Web-Page</Button>{' '}
        <Button variant="outline-dark" onClick={()=>{
          window.open(info.port)
        }}>Document</Button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Works