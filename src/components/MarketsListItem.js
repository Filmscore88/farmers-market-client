import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MarketsListItem extends Component {

  render() {
    return(
      <div style={{marginTop: '30px'}}>
        <div className="container-fluid text-center">
          <h3>
            <Link key={this.props.market.id} to={`/markets/${this.props.market.id}`}>{this.props.market.name}</Link> (Edit/Delete)
          </h3>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    markets: state.markets
  }
 }
export default connect(mapStateToProps, null)(MarketsListItem);
