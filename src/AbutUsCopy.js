import React from 'react'
import './styleing/AbutUs.css'
import mainLogo from "./Assets/AbutUsPik.jpg"

export default function AbutUs() {
    return <div className= "mainAbutUs">
        {/* <img className="AbutUsPic" src={mainLogo} alt="AbutUs" /> */}
        <div className="abutUsInfo">
        <h1 className="h1AbutUs" >ESH Basketball Shop</h1>
            <h2 className="abutUsP" >עלינו</h2>
            <p className="abutUsP">
                אש ספורט בע"מ חברתינו מתמחה ביבוא מוצרי איכות ברמה הגבוה ביותר בנוסף למתן שרות ואחריות ברמה אחת מעל כולם
                חברתינו מתמחה ביבוא מוצרי איכות במחיר נוחות,בלי פשרות. המוצרים הטובים ביותר יגיעו אליכם בלחיצת כפתור ובקלות מירבית.
                <br />
                <span className="signature">אלישיב הרץ
                    <br />
                    מנכ"ל אש ספורט
                </span>
            </p>
        </div>
    </div>
}