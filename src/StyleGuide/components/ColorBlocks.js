import React, { PureComponent } from 'react';
import styles from './ColorBlocks.scss';

class ColorBlocks extends PureComponent {
  render() {
    return(
      <div className={styles[this.props.color]}>
        <h2>${this.props.color}</h2>
      </div>
    );
  }
}

export default ColorBlocks;
