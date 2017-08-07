import React from 'react';
import Toolbar from './Toolbar';
import DocInfo from './DocInfo';

const TopBar = ({ onBoldClick, onItalicClick, onULClick, onStrikeClick, onLeftAlignClick }) => {
  return (
    <div style={{backgroundColor: '#dbdbdb', position: 'fixed', width: '100%', overflow: 'hidden'}}>
      <DocInfo />
      <Toolbar
        onBoldClick={onBoldClick}
        onItalicClick={onItalicClick}
        onULClick={onULClick}
        onStrikeClick={onStrikeClick}
        onLeftAlignClick={onLeftAlignClick}
      />
    </div>
  );
};

export default TopBar;
