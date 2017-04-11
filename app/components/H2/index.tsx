import React = require('react');

const styles = require('./styles.css');

class H2 extends React.Component<{}, {}> {
  public render() {
    return(
      <h2 className={styles.heading2} {...this.props} />
    );
  }

}

export default H2;
