import expect = require('expect');
import { mount } from 'enzyme';
import React = require('react');

import List from 'components/List';
import ListItem from 'components/ListItem';

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = mount(
      <List component={ListItem} />,
    );
    expect(renderedComponent.find(ListItem)).toExist();
  });

  it('should render the items', () => {
    const items = [
      'Hello',
      'World',
    ];
    const renderedComponent = mount(
      <List items={items} component={ListItem} />,
    );
    expect(renderedComponent.find(items)).toExist();
  });
});
