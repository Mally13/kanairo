import React from 'react'
import "../assets/styles/planner.css"
import paris from "../assets/images/paris.png"


function TripPlanner() {
  return (
    <div className='trip-planner container'>
      <div className="planner-wrapper">
        <div className='planner'>
          <div className='planner-text'>
              <h2>
                  Trip Planners
              </h2>
                <p>
                20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.
                </p>
                <div className='text-button'>
                  <p>View all trip plans</p>            
                </div>
          </div>
          <div className='planner-cards'>
            <img src={paris} alt=""/>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default TripPlanner