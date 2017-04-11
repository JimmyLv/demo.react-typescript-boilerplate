/*
 *
 * LocaleToggle
 *
 */

import React = require('react');

// import { FormattedMessage } from 'react-intl';
const styles = require('./styles.css');
import ToggleOption from '../ToggleOption';

interface IMessageMap {
  [locale: string]: ReactIntl.FormattedMessage.MessageDescriptor;
}

interface IProps {
  values: any[];
  messages: IMessageMap;
  onToggle?: (e: any) => any;
}

class Toggle extends React.Component<IProps, {}> {  // eslint-disable-line react/prefer-stateless-function
  public render() {
    let content = [(<option>--</option>)];

    // If we have items, render them
    if (this.props.values) {
      content = this.props.values.map((value) => (
        <ToggleOption key={value} value={value} message={this.props.messages[value]}/>
      ));
    }

    return (
      <select onChange={this.props.onToggle} className={styles.toggle}>
        {content}
      </select>
    );
  }
}

export default Toggle;
