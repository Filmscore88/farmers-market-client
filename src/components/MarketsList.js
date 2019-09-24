import React from 'react';
import MarketsContainer from '../containers/MarketsContainer';
import {NavLink} from  'react-router-dom';


class MarketsList extends React.Component {

constructor(props){
  super(props)

}



  // fetch("http://localhost:3001/api/markets")
  // .then(res => {
  //   if(res.status != 200) {
  //     throw new Error(res.statusText)
  //   } else {
  //     return res.json()
  //   }
  // })
  // .then(markets =>
  //   console.log('c', markets)
  // )
  // .catch(err => console.log(''))
  //



// }
  render(){

    return(
      <div className="container-fluid text-center">

      <NavLink style={{marginTop: '30px'}} to= {`/markets/${this.props.id}`}> {this.props.name} </NavLink>
      </div>
    )
  }
}


export default MarketsList;
