import React from 'react';


const MarketCard = ({market}) => (
  <div key= {market.id} className= "MarketCard">
    <h3>{market.name.replace(/\d*/g,'')}</h3>
    <img src= "https://s3-media3.fl.yelpcdn.com/bphoto/PTd0DMmirVaUICMvCObj3w/258s.jpg"/>
    <p>Address: {market.address} </p>
    <p>Products: {market.products} </p>
    <p>Schedule: {market.schedule.replace(/\<br\>/g," ")} </p>
    <a href= {`${market.GoogleLink}`}> GoogleMaps </a>
  </div>

)


const mapStateToProps = (state) => {


    const event = state.events.events.find(event => event.id === id);

    return {
        event: event
    }
}

export default connect(mapStateToProps, {deleteEvent})(EventShow);

export default MarketCard;
