import React from 'react';
import { mount } from 'enzyme';
import Filter from '../src/filter.jsx';
import { pizzas } from '../pizza.json';

describe('Filter View', () => {
    it('should have default state', () => {
      const wrapper = mount(<Filter />);

      expect(wrapper.state('filter')).toEqual('');
      expect(wrapper.state('sort')).toEqual(false);
    });

    it('should have a list of pizzas shown', () => {
      const wrapper = mount(<Filter items={pizzas} />);

      expect(wrapper.props().items).toEqual(pizzas);
    });

    it('should filter pizzas from input', () => {
      const wrapper = mount(<Filter items={pizzas} />);

      const filter = wrapper.find('[type="text"]');

      filter.simulate('change', { target: { value: 'Pepp' } });

      const items = wrapper.find('li');

      expect(items.length).toEqual(2);
      expect(items.at(0).text()).toEqual('Pepperoni');
      expect(items.at(1).text()).toEqual('Sausage and Pepperoni');
    });

    it('should filter in a case insensitive way', () => {
      const wrapper = mount(<Filter items={pizzas} />);

      const filter = wrapper.find('[type="text"]');

      filter.simulate('change', { target: { value: 'pepp' } });

      const items = wrapper.find('li');

      expect(items.length).toEqual(2);
      expect(items.at(0).text()).toEqual('Pepperoni');
      expect(items.at(1).text()).toEqual('Sausage and Pepperoni');
    });

    it('should sort and list pizzas in reverse alphabetic order', () => {
      const wrapper = mount(<Filter items={pizzas} />);

      const sort = wrapper.find('[type="button"]');

      sort.simulate('click');

      const items = wrapper.find('li');

      expect(items.length).toEqual(pizzas.length);
      expect(items.at(0).text()).toEqual('vegetable');
    });

    it('should also reverse alphabetic sort filtered pizzas', () => {
      const wrapper = mount(<Filter items={pizzas} />);

      const filter = wrapper.find('[type="text"]');

      filter.simulate('change', { target: { value: 'pepp' } });

      const sort = wrapper.find('[type="button"]');

      sort.simulate('click');

      const items = wrapper.find('li');

      expect(items.length).toEqual(2);
      expect(items.at(0).text()).toEqual('Sausage and Pepperoni');
      expect(items.at(1).text()).toEqual('Pepperoni');
    });
});
