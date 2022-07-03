import React, { useState } from 'react';
import './Cart.css';
import Login from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShekelSign, faShoppingCart, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { bindActionCreators } from 'redux';
import * as actionsCreators from './actions/index.js';
import { connect } from 'react-redux';

const Cart = (props) => {
    const [showLogIn, setshowLogIn] = useState(false)
    const { cartItem = [] } = props

    let curntTotalPrice = null
    let totalPrice = cartItem.map((i) => {
        curntTotalPrice = curntTotalPrice + (i.price * i.count)

    })
    const shekel = <FontAwesomeIcon icon={faShekelSign} />
    const iconCart = <FontAwesomeIcon icon={faShoppingCart} />
    const iconpay = <FontAwesomeIcon icon={faHandshake} />
    const CloseLoginWin = () => {
        setshowLogIn(false)
    }
   

    // פונקצית הרכישה בוצע צריך להיות פה ואם כן אז היא צריכה להעביר את פרטי העגלה למשתמש בדאטא בייס ולמחוק את הפרטי העגלה לאחר מכן



    let cartLength = cartItem.length
    let show = <div className='mainCart'>
        <h2 className='cartTitel'>  {iconCart} העגלה ריקה</h2>
        <h3>כדי למלא את העגלה יש להוסיף מוצרים מהרשימה</h3>
    </div>


    if (cartLength <= 0) {
        return show
    }
    else if (cartLength >= 1) {


        return <div className='mainCart'>
            {showLogIn ? <Login onLogIn={() => { setshowLogIn(false) }}
                CloseLoginWin={CloseLoginWin}
            /> : null}
            <h2 className='cartTitel'>{iconCart}עגלת הקניות שלך</h2>
            {cartItem.map((i, index) => {

                let totalItemPrice = i.price * i.count
                let btn = <div className='CartNamber' >
                    <div className='CartPM' onClick={(e) => { props.changeItemCount(i.id, -1) }}>-</div>
                    <h2 className="cuntNumber">{i.count}</h2>
                    <div className='CartPM' onClick={(e) => { props.changeItemCount(i.id, 1) }}>+</div>
                </div>
                let CartIndividual = <div className='CartIndividual' key={index} >

                    <div className='imageCart'>
                        <img className='itemImageCart' src={i.image} alt={i.name} />

                    </div>
                    <div className="CartIndividualName">
                        <p> {i.name}</p>
                        <br />
                    </div>
                    <div className="CartIndividualPC">
                        <p>{totalItemPrice}{shekel}</p>
                        <br />
                        <div > {btn} </div>
                        <br />
                    </div>

                </div>
                show = CartIndividual

                return <div className="t" key={index}>
                    {show}
                </div>

            })}
            {localStorage.email ? <div className="totalPrice" >
                לתשלום :{curntTotalPrice} {shekel}
                <div className="pay" onClick={(e) => { props.payProsse(curntTotalPrice) }}
                > {iconpay} </div>
            </div> :
                <div className="totalPrice" onClick={(e) => {

                    setshowLogIn(true)
                    return                                           //?
                }}>לתשלום :{curntTotalPrice} {shekel}
                </div>
            }


        </div>
    }
}

const mapStateToProps = state => {
    return {
        shop: state.shop
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
