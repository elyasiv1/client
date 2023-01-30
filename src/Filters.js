import React from 'react'
import './styleing/Filters.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBasketballBall } from '@fortawesome/free-solid-svg-icons'

export default function Filters(props) {
  const iconBalls = <FontAwesomeIcon icon={faBasketballBall} />
  
    const filtersTabsList = [
        {
            className: ['liCatgory', props.departmentFilter.filterName === "all" ? 'liCatgoryOn' : ""].join(" "),
            name: 'הכל',
            icon:'https://cdn3.iconfinder.com/data/icons/shopping-deliver-part1/64/deliver-512.png',
            key: 'all',
            onClick: () => props.onClickfiltersHandler("all")
        },
        {
            className: ['liCatgory', props.departmentFilter.filterName ==="balls" ? 'liCatgoryOn' : ""].join(" "),
            name: "כדורים",
            icon:'https://cdn.iconscout.com/icon/premium/png-256-thumb/basketball-312-594135.png',
            key: 'balls',
            onClick: () => props.onClickfiltersHandler("balls")
        },
        {
            className: ['liCatgory', props.departmentFilter.filterName ==="coach" ? 'liCatgoryOn' : ""].join(" "),
            name: 'למאמן',
            icon:'https://cdn.iconscout.com/icon/premium/png-512-thumb/whistle-238-672357.png',
            key: 'coach',
            onClick: () => props.onClickfiltersHandler("coach")
        },
        {
            className: ['liCatgory', props.departmentFilter.filterName ==="players" ? 'liCatgoryOn' : ""].join(" "),
            name: 'לשחקן',
            icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8m7daNxn_rI4GJmWC_4JVP24XHgv0e5qoQ&usqp=CAU',
            key: 'players',
            onClick: () => props.onClickfiltersHandler("players")
        },
        {
            className: ['liCatgory', props.departmentFilter.filterName ==="yard" ? 'liCatgoryOn' : ""].join(" "),
            name: 'לחצר',
            icon:'https://p7.hiclipart.com/preview/800/1001/105/basketball-court-computer-icons-sport-athletics-field-basketball.jpg',
            key: 'yard',
            onClick: () => props.onClickfiltersHandler("yard")
        },


    ]
    return <div className='bigBoxFilters'>

            <ul className="catgoryBox">

                
                {filtersTabsList.map((tab) => {
                    return (
                        <li {...tab}>
                        {tab.name}
                            <br/>
                            <div className="downArrow">  v   </div>
                        </li>



                    )
                })}

            </ul>
        <div className="BoxPriceMediator">
            <h2 className= "barPriceText">טווח מחיר</h2>
            <div className='priceBarcontainer'>
                <input type="range" name='barPrice' min="30" max="2000" className="barPrice" onChange={props.barPriceChange} />
                <h2 className= "barPriceText">מ30 - {props.departmentFilter.barPrice}ש"ח</h2>
            </div>

        </div>
        <div className="BoxBrand"></div>
    </div>
}