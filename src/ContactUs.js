import React, { useState } from 'react';





export default function ContactUs(props) {
    const [formData, setformData] = useState({})

    const submitHandler = e => {
        console.log(formData);
        e.preventDefault()
    }

    const changeHandler = e => {
        const { name, value } = e.target
        setformData({
            values: {
                ...formData.values,
                [name]: value
            }
        })
    }





    return <div className="ContactUsMain">
        <button className="winExit" onClick={() => { props.CloseContactUs() }}>X</button>
        <h1 className="h1ContactUs">צור קשר</h1>
        <form onSubmit={submitHandler} onChange={changeHandler} >
            <input name='name'  className="inputbox" placeholder='שם מלא' type='text' required />
            <br />
            <input name='email'  className="inputbox" placeholder='דוא"ל' type='email' required />
            <br />
            <textarea className="bigTextBox" name="content" placeholder="מה אתה רוצה למסור לנו" type="text"></textarea>
            <br />
            <input value='שלח' type='submit' />
        </form>
    </div>

}