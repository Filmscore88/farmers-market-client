import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputSubmitted: false,
      zipSearch: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ zipSearch: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    fetch(
      "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" +
        `${event.target.id}`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    fetch(
      "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" +
        `${this.state.zipSearch}`
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
    const { inputSubmitted, items, zipSearch } = this.state;
    console.log({ inputSubmitted });
    if (!inputSubmitted) {
      return (
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Farmers Markets Near:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    } else {
      return (
        <div className="Homepage">
          <ul>
            {items.map(item => (
              <li
                onClick={this.handleClick.bind(this)}
                id={item.id}
                key={item.id}
              >
                {item.marketname}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
