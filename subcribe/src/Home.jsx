import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
    return (
        <div className='Home'>
            <div className="Home-content">
                <h1>
                    <FaCheckCircle className='Home-icon' /> <br />
                    Thanks for subcribing!
                </h1>
                <p>A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</p>
                <button>Dissmiss message</button>
            </div>
        </div>
    )
}
