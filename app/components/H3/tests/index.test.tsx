import H3 from '../index';

import expect = require('expect');
import { shallow } from 'enzyme';
import React = require('react');
import ReactElement = React.ReactElement;

describe('<H3 />', () => {
  it('should render its text', () => {
    const children = 'Text' as any as ReactElement<any>;
    const renderedComponent = shallow(
      <H3>{children}</H3>,
    );
    expect(renderedComponent.contains(children));
  });
});
