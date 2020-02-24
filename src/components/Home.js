import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=60133"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return;
      <div>Loading...</div>;
    } else {
      return (
        <div className="Homepage">
          <h1>Welcome</h1>
          <img src="https://www.shelmerdine.com/wp-content/uploads/2018/05/Farmers-Market.jpg" />
        </div>
      );
    }
  }
}
