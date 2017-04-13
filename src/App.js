import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import grid from './grid.scss';

class App extends Component {
  render() {
    console.log(styles, grid);
    return (
      <div className={`${styles.App} ${grid.colXs12}`}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
