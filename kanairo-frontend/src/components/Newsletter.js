import React from 'react'
import "../assets/styles/footer.css"

function Newsletter() {
  return (
    <div className='newsletter'>
        <h4>Our Newsletter</h4>
        <div className='newsletter-form'>
            <p>Email</p>
            <form className='subscribe'>
                <input className='email-sub' type='email' placeholder='Enter your email'/>
                <input className='button-sub' type='submit' name='Subscribe'/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter