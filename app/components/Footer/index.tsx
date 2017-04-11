import React = require('react');

import A from 'components/A';
const styles = require('./styles.css');

class Footer extends React.Component<{}, {}> {
  public render() {
    return (
      <footer className={styles.footer}>
        <section>
          <p>This project is licensed under the MIT license.</p>
        </section>
        <section>
          <p>Made with love by <A href="https://twitter.com/mxstbr">Max Stoiber</A>.</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
