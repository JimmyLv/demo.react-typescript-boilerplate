/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React = require('react');
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { selectLocale } from './selectors';

interface IProps {
  locale?: string;
  messages: { [locale: string]: { [id: string]: string; }; };
  children?: React.ReactNode;
}

export class LanguageProvider extends React.Component<IProps, {}> { // eslint-disable-line react/prefer-stateless-function
  public render() {
    return (
      <IntlProvider locale={this.props.locale} messages={this.props.messages[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  locale: selectLocale(),
});

export default connect<{}, {}, IProps>(mapStateToProps)(LanguageProvider);
