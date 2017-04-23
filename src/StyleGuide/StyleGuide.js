import React, { Component } from 'react';
import styles from './StyleGuide.scss';

class StyleGuide extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.header}>AngelMD StyleGuide</h2>
      </div>
    );
  }
}

export default StyleGuide;
