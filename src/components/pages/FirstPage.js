import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <form action="/second">
                <p>
                    <label>Enter the OTP</label><br/>
                    <input type="tel" name="first_name" id="partitioned" maxlength="4" className='button-38' required />
                </p>
                <p>
                    <a>Resend Code</a>    
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
        </div>
    )

}
