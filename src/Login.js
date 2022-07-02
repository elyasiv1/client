import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

class Login extends React.Component {
    state = {
        isLogin: false,
        values: {},
        error: ''
    }


    test = () => {
        localStorage.token = "asdasdasdkjgsdjvlkajshdcahvcbasckhasdvchjasvdckjgvasdlkchv"
        localStorage.email = this.state.values.email
        this.props.onLogIn()
    }
    submitHandler = e => {

        e.preventDefault()

        const { isLogin, values } = this.state
        this.setState({ error: '' })
        fetch(
            `http://localhost:5555/user/${isLogin ? 'login' : ''}`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            }
        ).then(r => r.json())
            .then(res => {
                if (res.error)
                    this.setState({ error: res.error.message || res.error })

                else {

                    localStorage.token = res.token
                    localStorage.email = values.email
                    // localStorage.name = values.name
                    this.props.history.push('/')
                }
            })
            .catch(err => {
                this.setState({ error: err.message || err })
            })
    }

    changeHandler = e => {
        const { name, value } = e.target
        this.setState({
            values: {
                ...this.state.values,
                [name]: value
            }
        })
    }

    render(props) {

        const { isLogin, error } = this.state
        const creditCardIcon = <FontAwesomeIcon icon={faCreditCard} />
        if (localStorage.token) {
            this.props.history.push('/')
            return null
        }

        return <div className='mainLogin'>
            <button className="winExit" onClick={() => { this.props.CloseLoginWin() }}>X</button>
            <h1>{isLogin ? 'כניסה' : 'הרשמה'}</h1>
            <form onSubmit={this.submitHandler} onChange={this.changeHandler} >
                {isLogin ? null : <input name='name' className="inputbox" placeholder='שם' type='text' required />}
                <br />
                <input name='email' className="inputbox" placeholder='דוא"ל' type='email' required />
                <br />
                {isLogin ? null : <input name='Address' className="inputbox" placeholder='כתובת מגורים למשלוח' type='text' required />}
                <br />
                <input name='password' className="inputbox" placeholder='סיסמא ' type='password' required />
                <br />
                {isLogin ? null : <label for="creditCard">{creditCardIcon}מספר כרטיס אשראי</label>}
                <br />
                {isLogin ? null : <input name='creditCard' className="inputbox" type="tel" inputmode="numeric" required pattern="[0-9\s]{13,16}"
                    autocomplete="cc-number" maxlength="16" placeholder="xxxx xxxx xxxx xxxx" ></input>}

                <br />
                <input value='שלח' type='submit' />
            </form>
            <button onClick={() => { this.test() }}> test</button>
            {error ? <h3 style={{ color: 'red' }}>{error}</h3> : null}
            <button onClick={() => this.setState({ isLogin: !isLogin })}>{isLogin ? 'עוד לא רשום? לחץ כאן' : 'כבר רשום? לחץ כאן'}</button>
        </div>
    }
}

export default withRouter(Login)