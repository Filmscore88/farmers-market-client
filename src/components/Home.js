import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputSubmitted: false,
      areaCode: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ areaCode: event.target.value });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    fetch(
      "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" +
        `"${this.state.areaCode}"`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          inputSubmitted: true,
          items: json["results"]
        });
      });
  };

  render() {
    const { inputSubmitted, items, areaCode } = this.state;
    console.log({ inputSubmitted });
    if (!inputSubmitted) {
      return (
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Area Code:
            <input type="number" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <img src="https://www.shelmerdine.com/wp-content/uploads/2018/05/Farmers-Market.jpg" />
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
        </div>
      );
    }
  }
}
