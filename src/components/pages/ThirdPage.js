import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <form action="/forth">
                <p>
                    <label>Where can we reach you</label><br/>
                    <input type="tel" name="first_name" className='button-38' required />
                </p>
                <p>
                    <label>Preferred city to work</label><br/>
                    <select className='button-38'>
                        <option value="Bangaluru">Bangaluru</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                    </select>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
        </div>
    )

}
