import React from "react"
import { Link } from 'react-router-dom'
import './OpenPage.css';



export default function OpenPage() {

    return <div className="allOpenPage">
        <h1 className="logoT">ESH Basketball Shop</h1>
       <Link to='/Home' className='hederLink' > <div className="btnInter">
            כניסה לאתר
        </div>
        </Link>
    </div>

}