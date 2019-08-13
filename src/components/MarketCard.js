import React, { Component } from "react"
import { connect } from 'react-redux'
import MarketsContainer from 'MarketsContainer'


const MarketCard = (props) => {

return (
  <div key= {market.id} className= "MarketCard">
    <h3>{market.name.replace(/\d*/g,'')}</h3>
    <img src= "https://s3-media3.fl.yelpcdn.com/bphoto/PTd0DMmirVaUICMvCObj3w/258s.jpg"/>
    <p>Address: {market.address} </p>
    <p>Products: {market.products} </p>
    <p>Schedule: {market.schedule.replace(/\<br\>/g," ")} </p>
    <a href= {`${market.GoogleLink}`}> GoogleMaps </a>
  </div>
)

}



export default MarketCard;
