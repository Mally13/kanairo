import React from 'react'
import "../assets/styles/campaign.css"
import calender from "../assets/images/calender.svg"
import support from "../assets/images/expert.svg"
import money from "../assets/images/price.svg"

function Campaign() {
  return (
    <div className='container campaign'>
      <div className='campaign-box'>
        <img className='campaign-img' src={support} alt='support'/>
        <div className='campaign-text'>
          <h5>Mon-Sun 09:00-22:00</h5>
          <p>Get travel experts provide quality service whenever you need it.</p>
        </div>
      </div>
      <div className='campaign-box'>
          <img className='campaign-img' src={money} alt='support'/>
          <div className='campaign-text'>
            <h5>Price Match Promise</h5>
            <p>We offer the best rates for your flights accross the world.</p>
          </div>
      </div>
      <div className='campaign-box'>
          <img className='campaign-img' src={calender} alt='calender'/>
          <div className='campaign-text'>
            <h5>Same Day Cancellation</h5>
            <p>No hastle, no extra costs, Cancellations made easy.</p>
          </div>
        </div> 
      </div>
  )
}

export default Campaign