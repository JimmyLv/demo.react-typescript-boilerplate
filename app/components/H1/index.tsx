import React = require('react');

const styles = require('./styles.css');

class H1 extends React.Component<{}, {}> {
  public render() {
    return (
      <h1 className={styles.heading1} {...this.props} />
    );
  }
}

export default H1;
