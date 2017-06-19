import React, { Component } from 'react';
import classNames from 'classnames';

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
    return (
      <div className="container">
        <header className="section-header section-header--icon-left">

          <div className="section-title">
            <svg className="section-title__icon" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 48 48">
              <g  transform="translate(0, 0)">
                <path data-cap="butt" data-color="color-2" fill="none" stroke="#444444" strokeWidth="2" strokeMiterlimit="10" d="M14.6,24.4 c0.7,0.4,1.5,0.6,2.4,0.6c2.8,0,5-2.2,5-5c0-2-1.2-3.7-2.8-4.5" strokeLinejoin="miter" strokeLinecap="butt"/>
                <circle data-color="color-2" fill="none" stroke="#444444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="27" cy="30" r="3" strokeLinejoin="miter"/>
                <path data-cap="butt" fill="none" stroke="#444444" strokeWidth="2" strokeMiterlimit="10" d="M39.2,35.9C34.7,37.8,29.2,39,24,39 s-10.6-1.3-15.2-3.2" strokeLinejoin="miter" strokeLinecap="butt"/>
                <path fill="none" stroke="#444444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M5.7,42 c5.6,2.6,11.8,4,18.3,4s12.7-1.4,18.3-4L24,6L5.7,42z" strokeLinejoin="miter"/>
              </g>
              </svg>

            <h2 className="section-title__heading">Pizza Flavors</h2>
          </div>

          <div className="section-controls">
            <div className="input-group input-group--inline">
              <label htmlFor="filter">Filter</label>
              <input id="filter" type="text" className="input pizza-list__input" placeholder="Type to filter" onChange={this.handleOnChange} />
            </div>
            <button type="button" id="sort" className={classNames('button button--icon-left pizza-list__sort-button', { 'icon--sort-asc': !this.state.sort, 'icon--sort-desc': this.state.sort })} onClick={this.handleSort}>
              <span>Sort</span>
            </button>
          </div>

        </header>

        <ul className="list list--unstyled list--relaxed list--blocked">
          {this.props.items
            .filter(item => item.toLowerCase().includes(this.state.filter.toLowerCase()))
            .sort((a, b) => {
              if (this.state.sort) {
                return b.toLowerCase() > a.toLowerCase();
              }
              return a.toLowerCase() > b.toLowerCase();
            })
            .map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default Filter;
