import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <form action="/third">
                <p>
                    <label>What should we call you</label><br/>
                    <input type="tel" name="first_name" className='button-38' required />
                </p>
                <p>
                    <label>Gender</label><br/>
                    <input type="radio" value="Male" name="gender" /> Male<br></br>
                    <input type="radio" value="Female" name="gender" /> Female
                    
                    </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
        </div>
    )

}
