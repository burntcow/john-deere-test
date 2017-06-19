import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: '', sort: false };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleOnChange(e) {
    this.setState({ filter: e.target.value });
  }

  handleSort() {
    this.setState({ sort: !this.state.sort });
  }

  render() {
    if (!this.props.items.length) {
      return <div>Loading...</div>;
    }
    return (
      <div className="app">
        <div className="filter">
          <input type="text" onChange={this.handleOnChange} />
          <button type="button" onClick={this.handleSort}>{this.state.sort ? 'Unsort' : 'Sort'}</button>
        </div>
        <div className="list">
          {this.props.items
            .filter(item => item.toLowerCase().includes(this.state.filter))
            .sort((a, b) => {
              if (this.state.sort) {
                return b.toLowerCase() > a.toLowerCase();
              }
            })
            .map((item, key) => <div key={key}>{item}</div>)}
        </div>
      </div>
    );
  }
}

export default Filter;
