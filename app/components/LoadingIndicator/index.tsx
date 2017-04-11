import React = require('react');

const styles = require('./styles.css');

class LoadingIndicator extends React.Component<any, {}> {
  public render() {
    return (
      <div>
        <div className={styles['sk-fading-circle']}>
          <div className={styles.skCircle} />
          <div className={styles['sk-circle2']} />
          <div className={styles['sk-circle3']} />
          <div className={styles['sk-circle4']} />
          <div className={styles['sk-circle5']} />
          <div className={styles['sk-circle6']} />
          <div className={styles['sk-circle7']} />
          <div className={styles['sk-circle8']} />
          <div className={styles['sk-circle9']} />
          <div className={styles['sk-circle10']} />
          <div className={styles['sk-circle11']} />
          <div className={styles['sk-circle12']} />
        </div>
      </div>
    );
  }
}

export default LoadingIndicator;
