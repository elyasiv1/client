import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShekelSign, faShoppingCart, faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function ItemAvailable(props) {
    const [showItemOpen, setshowItemOpen] = useState(false)
    const [showItemDiteail, setShowItemDiteail] = useState({
        item: {}
    })
    const { items = [] } = props
    const shekel = <FontAwesomeIcon icon={faShekelSign} />
    const iconCart = <FontAwesomeIcon icon={faShoppingCart} />
    

    const itemDiteail = <div className='itemDiteail'>
        <button className="winExit" onClick={() => { setshowItemOpen(false) }}>X</button>
        <div className="nameAndImg">
            <h2 className='itemName'>{showItemDiteail.item.name}</h2>
            <img className="bigItemImg" src={showItemDiteail.item.image} alt={showItemDiteail.item.name} />
        </div>

        <h3><span className='liCatgoryOn'>שם היצרן:</span> {showItemDiteail.item.brand}</h3>
        <p> <span className='liCatgoryOn'>תאור המוצר</span>
            <br />
            {showItemDiteail.item.description}</p>
        <h3>מחיר ליחידה:{showItemDiteail.item.price}{shekel}</h3>
    </div>

    return <div className='boxItem'>

        {showItemOpen ? itemDiteail : null}
        {items.map((item, index) => {
            let btn = <div className='addToCart' key={index} onClick={(e) => { props.selectedItem(item) }}
            >הוסף {iconCart}</div>
            if (item.count >= 1)

                btn = <div className='addToCartNamber' key={index}>
                    <div className='addToCartP' onClick={(e) => { props.changeItemCount(item.id, 1) }}>+</div>
                    <h2 className="cuntNumber">{props.cartItem, item.count}</h2>
                    <div className='addToCartM' onClick={(e) => { props.changeItemCount(item.id, -1) }}>-</div>
                </div>

            const itemPresentation =
                <div className="itemAvailable" key={index}>

                    <div className='imeDiv'>
                        <img className='itemImg' src={item.image} alt={item.name} />
                        <br />
                    </div>
                    <div className='itemName' onClick={(e) => {

                        setShowItemDiteail({ item })
                        setshowItemOpen(true)

                    }}
                    >{item.name}
                    </div>
                    <br />
                        <div> דרוג:{item.tags}</div>
                    <div className='itemPrice'>
                      <div> מחיר: {item.price} {shekel} </div>
                      <div className="natPrice" >  {(item.price *1.15) .toFixed()} {shekel} </div>

                    </div>
                   
                    {btn}

                </div>
            return itemPresentation
        })}
    </div >
}