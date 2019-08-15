import React from 'react';
import MarketsContainer from '../containers/MarketsContainer';
import {NavLink} from  'react-router-dom';
// import EditMarketContainer from '../containers/EditMarketContainer'


class MarketsList extends React.Component {

constructor(props){
  super(props)

}


  render(){

    return(
    <div>
    <NavLink to= {`/markets/${this.props.id}`}> {this.props.name} </NavLink>

    </div>
    )
  }
}


export default MarketsList;
