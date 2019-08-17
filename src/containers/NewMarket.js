import React, { Component } from "react"
import { connect } from 'react-redux'
import {updateMarketFormData} from '../redux/actions/marketForm'


class NewMarket extends Component {

  handleOnChange = event => {
    const { name, value} = event.target;
    const currentMarketFormData= Object.assign({}, this.props.marketsFormData, {
      [name]:  value
    })
    this.props.updateMarketFormData(currentMarketFormData)
  }


  render() {
    const {name, address, GoogleLink, products, schedule } = this.props.marketsFormData;
    return(
      <div>
        Add a Market To Markets
        <form>
          <div>
            <label htmlFor= "name"> Name: </label>
            <input
              type= "text"
              onChange= {this.handleOnChange}
              name= "name"
              value= { name }
             />
           </div>
        <button type= "Submit"> Add Farmers Market</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    marketsFormData: state.marketsFormData
  })
}

export default connect(mapStateToProps, {updateMarketFormData})(NewMarket);
