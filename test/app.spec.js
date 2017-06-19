import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../src/app.jsx';
import Filter from '../src/filter.jsx';
import { pizzas } from '../pizza.json';

describe('App View', () => {
  it('should show a loading screen when no pizzas loaded', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.text()).toEqual('Loading...');
  });

  it('should resolve pizzas and return Filter', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ pizzas });

    expect(wrapper.state('pizzas')).toEqual(pizzas);
    expect(wrapper.contains(<Filter items={pizzas} />)).toEqual(true);
  });
});
