/**
 *
 * ToggleOption
 *
 */

import React = require('react');
import ReactIntl, { injectIntl } from 'react-intl';

interface IProps {
  value: string;
  message: ReactIntl.FormattedMessage.MessageDescriptor;
}

class ToggleOptionInternal extends React.Component<IProps & ReactIntl.InjectedIntlProps, {}> {
  public render() {
    return (
      <option value={this.props.value}>
        {this.props.intl.formatMessage(this.props.message)}
      </option>
    );
  }
}

// prevent the requirement of passing in intl prop. TODO: better way to do this?
// tslint:disable:max-classes-per-file
class ToggleOption extends React.Component<IProps, {}> {
  public render() {
    const ToggleOptionInternalInjected = injectIntl(ToggleOptionInternal);
    return (
      <ToggleOptionInternalInjected {...this.props} />
    );
  }
}

export default ToggleOption;
