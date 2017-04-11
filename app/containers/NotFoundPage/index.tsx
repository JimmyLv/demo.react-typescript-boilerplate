/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React = require('react');
import { connect } from 'react-redux';
import { push, RouterAction} from 'react-router-redux';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import H1 from 'components/H1';

interface INotFoundProps {
  dispatch?: (action: RouterAction) => void;
}

export class NotFound extends React.Component<INotFoundProps, {}> {

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  private redirect() {
    this.props.dispatch(push('/'));
  }

  public render() {
    return (
      <article>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Button
          handleRoute={this.redirect}
        >
          <FormattedMessage {...messages.homeButton} />
        </Button>
      </article>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(NotFound);
