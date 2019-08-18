import React from 'react';
import MarketsContainer from '../containers/MarketsContainer';
import {NavLink} from  'react-router-dom';


class MarketsList extends React.Component {

constructor(props){
  super(props)

}


  render(){

    return(
    <div className="container-fluid text-center">

    <NavLink style={{marginTop: '30px'}} to= {`/markets/${this.props.id}`}> {this.props.name} </NavLink>
    </div>

    )
  }
}


export default MarketsList;
