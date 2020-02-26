import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputSubmitted: false,
      areaCode: 0
    };
  }

  handleChange(event) {
    this.setState({ areaCode: event.target.value });
  }

  handleOnSubmit = event => {
    event.preventDefault();

    fetch(
      "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" +
        `"${areaCode}"`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isSubmitted: true,
          items: json["results"]
        });
      });
  };

  render() {
    const { inputSubmitted, items, areaCode } = this.state;
    if (!inputSubmitted) {
      return (
        <form onSubmit ={this.handleOnSubmit}/>
          <label>
            Area Code:
          <input type="number" value={this.state.areaCode} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
          </form>
      );
    } else {
      return (
        <div className="Homepage">
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.marketname}</li>
            ))}
          </ul>
          <img src="https://www.shelmerdine.com/wp-content/uploads/2018/05/Farmers-Market.jpg" />
        </div>
      );
    }
  }
}
