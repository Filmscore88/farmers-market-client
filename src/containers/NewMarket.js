import React, { Component } from "react"
import { connect } from 'react-redux'
import {updateMarketFormData} from '../redux/actions/marketForm'
import { createMarket } from '../redux/actions/marketsActions'

class NewMarket extends Component {

  handleOnChange = event => {
    const { name, value} = event.target;

    const currentMarketFormData = Object.assign({}, this.props.marketsFormData, {
      [name]: value
    })

    this.props.updateMarketFormData(currentMarketFormData)
  }


  handleOnSubmit = event => {
    event.preventDefault()

    this.props.createMarket(this.props.marketsFormData)
  }


  render() {
    const { name, address, GoogleLink, products, schedule } = this.props.marketsFormData;

    return(

      <div>
        Add a Market To Markets
        <form onSubmit= {this.handleOnSubmit}>
          <div>
            <label htmlFor= "name"> Name: </label>
            <input
              type= "text"
              onChange= {this.handleOnChange}
              name= "name"
              value={name}
             />
           </div>
           <div>
             <label htmlFor= "address"> Address: </label>
             <input
               type= "text"
               onChange= {this.handleOnChange}
               name= "address"
               value={address}
              />
            </div>
            <div>
              <label htmlFor= "GoogleLink"> GoogleLink: </label>
              <input
                type= "text"
                onChange= {this.handleOnChange}
                name= "GoogleLink"
                value={GoogleLink}
               />
             </div>
             <div>
               <label htmlFor= "products"> Products: </label>
               <input
                 type= "text"
                 onChange= {this.handleOnChange}
                 name= "products"
                 value={products}
                />
              </div>
              <div>
                <label htmlFor= "schedule"> Schedule: </label>
                <input
                  type= "text"
                  onChange= {this.handleOnChange}
                  name= "schedule"
                  value={schedule}
                 />
               </div>
        <button type= "Submit"> Add Farmers Market</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    marketsFormData: state.marketsFormData
  }
}

export default connect(mapStateToProps, {updateMarketFormData, createMarket})(NewMarket);
