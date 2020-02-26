import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputSubmited: false,
      areaCode: 0
    };
  }

  userSubmition = e => {
    e.preventDefault();

    fetch(
      "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=60133"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json["results"]
        });
      });
  };

  render() {
    const { inputSubmited, items } = this.state;
    if (!inputSubmited) {
      return (
        <div>
          Search Markets
          <label areaCode="Zipcode"> AreaCode: </label>
          <input type="number" value={areaCode} />
        </div>
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
