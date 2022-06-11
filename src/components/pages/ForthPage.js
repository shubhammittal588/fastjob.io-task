import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <form action="/forth">
                <p>
                    <label>Role you are looking for</label><br/>
                    <select className='button-38'>
                        <option value="Frontend_Developer">Frontend Developer</option>
                        <option value="UI_Developer">UI Developer</option>
                        <option value="Web_Developer">Web Developer</option>
                    </select>
                    <br></br>
                    <br></br> <button className='button-38'>Frontend Developer</button> &nbsp;
                    <button className='button-38'>UI Developer</button>&nbsp;
                    <button className='button-38'>Web Developer</button>&nbsp;
                    
                </p>
                <p>
                    <label>How many years of experience</label><br/>
                    <button className='button-38'>Fresher</button> &nbsp;
                    <button className='button-38'>1-3 years</button>&nbsp;
                    <button className='button-38'>3-6 years</button>&nbsp;
                    <button className='button-38'>6+ years</button>&nbsp;
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
        </div>
    )

}
