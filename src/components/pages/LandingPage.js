import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto" >
            <form action="/first" >
                <p>
                    <label>Your Mobile Number</label><br/>
                    <input type="tel" name="first_name" className='button-38' required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" className='button-38' required /> <span>I checking this you confirm that you accept our<br></br> <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms and condition</a> and have read out our <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms and condition</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
        </div>
    )

}
