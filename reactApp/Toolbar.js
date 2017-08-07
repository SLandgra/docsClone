import React from 'react';
import { Glyphicon, Button } from 'react-bootstrap';

const Toolbar = ({ onBoldClick, onItalicClick, onULClick, onStrikeClick, onLeftAlignClick }) => {
  return (
    <div style={{overflow: 'hidden', width: '100%', backgroundColor: '#e9e9e9', padding: '20px'}}>
      <button onClick={() => onBoldClick()}>
        <Glyphicon glyph="bold"></Glyphicon>
      </button>
      <button onClick={() => onItalicClick()}><i>I</i></button>
      <button onClick={() => onULClick()}><ins>U</ins></button>
      <button onClick={() => onStrikeClick()}><strong><del>S</del></strong></button>
      <button onClick={() => onLeftAlignClick()}>Left Align</button>
    </div>
  );
};

export default Toolbar;
