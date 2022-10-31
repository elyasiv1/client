import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBasketballBall } from '@fortawesome/free-solid-svg-icons'

export default function Filters(props) {
  const iconBalls = <FontAwesomeIcon icon={faBasketballBall} />
  
    const filtersTabsList = [
        {
            className: ['liCatgory', props.departmentFilter.all ? 'liCatgoryOn' : ""].join(" "),
            name: 'הכל',
            icon:'https://cdn3.iconfinder.com/data/icons/shopping-deliver-part1/64/deliver-512.png',
            key: 'all',
            onClick: () => props.onClickfiltersHandler("all")
        },
        {
            className: ['liCatgory', props.departmentFilter.balls ? 'liCatgoryOn' : ""].join(" "),
            name: "כדורים",
            icon:'https://cdn.iconscout.com/icon/premium/png-256-thumb/basketball-312-594135.png',
            // icon:'https://e7.pngegg.com/pngimages/947/895/png-clipart-basketball-official-nba-street-spalding-basketball-sport-basketball-court-thumbnail.png',
            key: 'balls',
            onClick: () => props.onClickfiltersHandler("balls")
        },
        {
            className: ['liCatgory', props.departmentFilter.coach ? 'liCatgoryOn' : ""].join(" "),
            name: 'למאמן',
            icon:'https://cdn.iconscout.com/icon/premium/png-512-thumb/whistle-238-672357.png',
            // icon:'https://w7.pngwing.com/pngs/898/308/png-transparent-basketball-coach-euroleague-basketball-playbook-basketball-game-text-sport-thumbnail.png',
            key: 'coach',
            onClick: () => props.onClickfiltersHandler("coach")
        },
        {
            className: ['liCatgory', props.departmentFilter.players ? 'liCatgoryOn' : ""].join(" "),
            name: 'לשחקן',
            icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8m7daNxn_rI4GJmWC_4JVP24XHgv0e5qoQ&usqp=CAU',
            // icon:'https://static.thenounproject.com/png/1646796-200.png',
            // icon:'https://w7.pngwing.com/pngs/417/820/png-transparent-lebron-james-dunk-basketball-slam-dunk-basketball-trapeze-sport-basketball-court-computer-wallpaper-thumbnail.png',
            key: 'players',
            onClick: () => props.onClickfiltersHandler("players")
        },
        {
            className: ['liCatgory', props.departmentFilter.yard ? 'liCatgoryOn' : ""].join(" "),
            name: 'לחצר',
            icon:'https://p7.hiclipart.com/preview/800/1001/105/basketball-court-computer-icons-sport-athletics-field-basketball.jpg',
            // icon:'https://www.pikpng.com/pngl/m/29-294791_indoor-mini-basketball-hoop-streetball-clipart.png',
            key: 'yard',
            onClick: () => props.onClickfiltersHandler("yard")//משום מה  לא עובד הקלאס 16.6
        },
    ]
    return <div className='bigBoxFilters'>'
        <div className="catgoryBox" >
            <ul>

                
                {filtersTabsList.map((tab) => {
                    return (
                        <li {...tab}>
                       
                        {tab.icon? <img className="filimg" src={tab.icon}/>:null}
                        {tab.name}
                        </li>
                    )
                })}

            </ul>
        </div>
        <div className="BoxPriceMediator">
            <h2 >טווח מחיר</h2>
            <br />
            <div className='priceBarcontainer'>
                <input type="range" name='barPrice' min="30" max="2000" className="barPrice" onChange={props.barPriceChange} />
                <h2>מ30 - {props.departmentFilter.barPrice}ש"ח</h2>
            </div>

        </div>
        <div className="BoxBrand"></div>
    </div>
}