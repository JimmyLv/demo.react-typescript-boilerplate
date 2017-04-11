/*
 * FeaturePage
 *
 * List all the features
 */
import React = require('react');
import { connect } from 'react-redux';
import { push, RouterAction } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import H1 from 'components/H1';

const styles = require('./styles.css');

interface IFeaturePageProps {
  dispatch?: (action: RouterAction) => void;
}

export class FeaturePage extends React.Component<IFeaturePageProps, {}> {

  private openHomePage = () => {
    this.props.dispatch(push('/'));
  }

  public render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
              <FormattedMessage {...messages.scaffoldingHeader} />
            </p>
            <p>
              <FormattedMessage {...messages.scaffoldingMessage} />
            </p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
              <FormattedMessage {...messages.feedbackHeader} />
            </p>
            <p>
              <FormattedMessage {...messages.feedbackMessage} />
            </p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
              <FormattedMessage {...messages.routingHeader} />
            </p>
            <p>
              <FormattedMessage {...messages.routingMessage} />
            </p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
              <FormattedMessage {...messages.networkHeader} />
            </p>
            <p>
              <FormattedMessage {...messages.networkMessage} />
            </p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
              <FormattedMessage {...messages.intlHeader} />
            </p>
            <p>
              <FormattedMessage {...messages.intlMessage} />
            </p>
          </li>
        </ul>
        <Button handleRoute={this.openHomePage}>
          <FormattedMessage {...messages.homeButton} />
        </Button>
      </div>
    );
  }
}

export default connect()(FeaturePage);
