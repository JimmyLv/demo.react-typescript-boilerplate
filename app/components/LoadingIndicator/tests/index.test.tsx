import LoadingIndicator from 'components/LoadingIndicator';

import expect = require('expect');
import { shallow } from 'enzyme';
import React = require('react');

describe('<LoadingIndicator />', () => {
  it('should render 14 divs', () => {
    const renderedComponent = shallow(
      <LoadingIndicator />,
    );
    expect(renderedComponent.find('div').length).toEqual(14);
  });
});
