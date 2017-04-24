import React, { Component } from 'react';
import ColorBlocks from './components/ColorBlocks';
import grid from 'Styles/grid.scss';

class StyleGuide extends Component {
  render() {
    return (
      <div className={`${grid.row} ${grid.maxWidth}`}>
        <div className={grid.row}>
          <h2>AngelMD StyleGuide</h2>
        </div>
        <div className={grid.row}>
          <div className={`${grid.xs100} ${grid.sm25}`}>
            <ColorBlocks color="primary" />
            <ColorBlocks color="primaryLight" />
          </div>
          <div className={`${grid.xs100} ${grid.sm25}`}>
            <ColorBlocks color="secondary" />
            <ColorBlocks color="secondaryMedium" />
            <ColorBlocks color="secondaryLight" />
          </div>
        </div>
      </div>
    );
  }
}

export default StyleGuide;
