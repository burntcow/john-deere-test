import React from 'react';
import { mount } from 'enzyme';
import Filter from '../src/filter.jsx';
import { pizzas } from '../pizza.json';

describe('Filter View', () => {
    it('should have default state', () => {
      const wrapper = mount(<Filter items={pizzas} />);

      expect(wrapper.state('filter')).toEqual('');
      expect(wrapper.state('sort')).toEqual(false);
    });

    it('', () => {
      const wrapper = mount(<Filter items={pizzas} />);

      const filter = wrapper.find('input[type="text"]');

      filter.simulate('change', { target: { value: 'Pepp' } });

      console.log(wrapper.html());
    });
});
