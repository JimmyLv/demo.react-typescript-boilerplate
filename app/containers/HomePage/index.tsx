/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React = require('react');
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { createStructuredSelector } from 'reselect';

import {
  selectRepos,
  selectLoading,
  selectError,
} from 'containers/App/selectors';

import {
  selectUsername,
} from './selectors';

import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';

import { FormattedMessage } from 'react-intl';
import RepoListItem from 'containers/RepoListItem';
import Button from 'components/Button';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

const styles = require('./styles.css');

interface IHomePageProps {
  changeRoute?: (route: string) => void;
  loading?: boolean;
  error?: Error | false;
  repos?: any[];
  onSubmitForm?: () => React.EventHandler<React.FormEvent<any>>;
  username?: string;
  onChangeUsername?: () => React.EventHandler<React.FormEvent<any>>;
}

export class HomePage extends React.Component<IHomePageProps, {}> {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  private componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  private openRoute = (route) => {
    this.props.changeRoute(route);
  }

  /**
   * Changed route to '/features'
   */
  private openFeaturesPage = () => {
    this.openRoute('/features');
  }

  public render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator} />);

      // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListItem item={'Something went wrong, please try again!'} />
      );
      mainContent = (<List component={ErrorComponent} />);

      // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.repos) {
      mainContent = (<List items={this.props.repos} component={RepoListItem} />);
    }

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <section className={`${styles.textSection} ${styles.centered}`}>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </section>
          <section className={styles.textSection}>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <form className={styles.usernameForm} onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <span className={styles.atPrefix}>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </span>
                <input
                  id="username"
                  className={styles.input}
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </form>
            {mainContent}
          </section>
          <Button handleRoute={this.openFeaturesPage}>
            <FormattedMessage {...messages.featuresButton} />
          </Button>
        </div>
      </article>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) { evt.preventDefault(); }
      dispatch(loadRepos());
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
  username: selectUsername(),
  loading: selectLoading(),
  error: selectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect<{}, {}, IHomePageProps>(mapStateToProps, mapDispatchToProps)(HomePage);
