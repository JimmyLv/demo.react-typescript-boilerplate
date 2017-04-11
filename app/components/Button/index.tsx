/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React = require('react');

const styles = require('./styles.css');

interface IButtonProps extends React.ClassAttributes<Button> {
  className?: string;
  handleRoute?: React.EventHandler<React.MouseEvent<any>>;
  href?: string;
  onClick?: React.EventHandler<React.MouseEvent<any>>;
  children?: React.ReactNode;
}

class Button extends React.Component<IButtonProps, {}> {
  public render() {
    const className = this.props.className ? this.props.className : styles.button;

    // Render an anchor tag
    let button = (
      <a className={className} href={this.props.href} onClick={this.props.onClick}>{this.props.children}</a>
    );

    // If the Button has a handleRoute prop, we want to render a button
    if (this.props.handleRoute) {
      button = (
        <button className={className} onClick={this.props.handleRoute}>{this.props.children}</button>
      );
    }

    return (
      <div className={styles.buttonWrapper}>
        {button}
      </div>
    );
  }
}

export default Button;
