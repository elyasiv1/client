import React, { useEffect, useState } from 'react'
import ItemAvailable from './ItemAvailable'
import Filtrs from './Filters'
import Cart from './Cart'
import { bindActionCreators } from 'redux';
import * as actionsCreators from './actions/index.js';
import { connect } from 'react-redux';
import Header from './Header';
// import AbutUs from './AbutUs';
import AbutUsCopy from './AbutUsCopy';
import FuterVideo from "./FuterVideo"


const Home = (props) => {
    const [showCartOpen, setShowCartOpen] = useState(false)
    const [items, setItems] = useState([])//מוצרים

    const [showedItems, setSowedItems]= useState([])
    const [cartItem, setcartItem] = useState([])// פרטים בעגלה
    const [ShowAbutUsOpen, setShowAbutUsOpen] = useState(false)
    const [departmentFilter, setdepartmentFilter] = useState({//state שמכיל את הקטגוריות של המוצרים
        // all: false,
        // balls: false,
        // coach: false,
        // players: false,
        // yard: false,
        barPrice: 2000,
        filterName: "all"
    })

    const [payDone, setpayDone] = useState({
        email: localStorage.email,
        date: new Date(),
        Order: [],
    })
    const de = () => {
        ShowAbutUsOpen ?
            setShowAbutUsOpen(false) :
            setShowAbutUsOpen(true)
    }
    useEffect(() => {
        console.log("effect")
        loadingItem()


    },
        []// אולי צריך להוציא מההוקס
    )

    const selectedItem = (item) => {
        item.count = 1

        const newSelectedItemsList = [...cartItem, item]
        // item.count = 1// הוספת מוצר לעגלה בפעם הרשונה

        setcartItem(newSelectedItemsList)
        console.log("add to cart", item);
    }

    const changeItemCount = (itemId, counterAdd) => {
        var newItemCount = [...cartItem]

        newItemCount = newItemCount.map((item, index) => {
            if (item.id === itemId) {
                item.count = item.count + counterAdd
                if (item.count < 1) {
                    return null
                }

            }
            return item
        })
        newItemCount = newItemCount.filter(i => i !== null)
        setcartItem(newItemCount)

    }


    const onClickfiltersHandler = (filterName) => {//פונקציה שמקבלת את בקשת הקטגוריה ומשנה את state
        setdepartmentFilter({...departmentFilter, filterName} )
        console.log({filterName})
        console.log(departmentFilter)
    }

    function barPriceChange(e) {//stateפונקצי שמשנה את מד המחיר המבוקש ומעדכנת את ה

        const { name, value } = e.target

        const newdepartmentFilter = { ...departmentFilter, [name]: value }

        setdepartmentFilter(newdepartmentFilter)

    }

    // async function getItems() {//פונקציה שמקבלת את המוצרים הנבחרים
    //     let url = `http://localhost:5555/items/?price=${departmentFilter.barPrice}&department=${departmentFilter.filterName}`
    //     try {
    //         const res = await fetch(url)
    //             .then(r => r.json())
    //         console.log("spechel");
    //         setItems(res)
    //         setSowedItems(res)
    //     } catch (error) { }
    // }

    async function getAllItems() {//פונקציה שמקבלת את כל המוצרים
        try {
            const res = await fetch(`http://localhost:5555/itemss/?price=${departmentFilter.barPrice}`)
                .then(r => r.json())
            console.log("all");
            setItems(res)
            setSowedItems(res)
        } catch (error) { }
    }

    const loadingItem = () => {//פונקציה שמציגה את הקטגוריה המבוקשת
        if (departmentFilter.filterName !== "all") {
            // getItems();
            setdepartmentFilter()
            console.log("in if");
        }

        else {
            getAllItems();//פונקציה שמציגה את כל המוצרים
            console.log("in else if");
        }
    }


    const payProsse = async () => {
        const Order = cartItem

        let curntTotalPrice = null
        Order.map((i) => {

            curntTotalPrice = curntTotalPrice + (i.price * i.count)

            setpayDone({ ...payDone, curntTotalPrice, Order })
        })


        try {
            const res = await fetch(`http://localhost:5555/user/order/?date=${payDone}`,
                {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payDone)
                }
            )
                .then(r => r.json())
            console.log("pay Done", payDone)
            setpayDone(res)
        }

        catch (error) {
            console.log("pay faild", payDone);
        }

    }
    const itemPresintishon = () => {
        return <div className='homePage'>
            <FuterVideo />
            <AbutUsCopy />
            <div className="poster"></div>

            <Filtrs
                departmentFilter={departmentFilter}
                onClickfiltersHandler={onClickfiltersHandler}
                barPriceChange={barPriceChange} />

            <div className="homePageMain">

                <ItemAvailable
                    items={items}
                    cartItem={cartItem}
                    selectedItem={selectedItem}
                    changeItemCount={changeItemCount}
                    departmentFilter={departmentFilter}
                />

                {props.shop.show ? <Cart
                    cartItem={cartItem}
                    changeItemCount={changeItemCount}
                    payProsse={payProsse}
                /> : null}
            </div>
        </div>

    }

    return <div className='homePage'>
        <header>
            <Header
                de={de}
                showCartOpen={showCartOpen}
                ShowAbutUsOpen={ShowAbutUsOpen}
                cartItem={cartItem}
            />
        </header>
        {ShowAbutUsOpen ? <AbutUsCopy/> : itemPresintishon()}
        {/* <div className="poster"></div>

        <div className="homePageMain">

            <Filtrs
                departmentFilter={departmentFilter}
                onClickfiltersHandler={onClickfiltersHandler}
                barPriceChange={barPriceChange} />

             <ItemAvailable
                items={items}
                cartItem={cartItem}
                selectedItem={selectedItem}
                changeItemCount={changeItemCount}
            />

            {props.shop.show ? <Cart
                cartItem={cartItem}
                changeItemCount={changeItemCount}
                payProsse={payProsse}
            /> : null}
        </div> */}
    </div>

}

const mapStateToProps = state => {
    return {
        shop: state.shop
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setShowCart: actionsCreators.setShowCart,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);