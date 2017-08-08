import React from 'react';
import Toolbar from './Toolbar';
import DocInfo from './DocInfo';

const TopBar = ({ onBoldClick, onItalicClick, onULClick, onStrikeClick, onLeftAlignClick, onRightAlignClick, onCenterAlignClick, handleFontSizeChange, handleColorChange }) => {
  return (
    <div style={{backgroundColor: '#dbdbdb', position: 'fixed', width: '100%', overflow: 'hidden'}}>
      <DocInfo />
      <Toolbar
        onBoldClick={onBoldClick}
        onItalicClick={onItalicClick}
        onULClick={onULClick}
        onStrikeClick={onStrikeClick}
        onLeftAlignClick={onLeftAlignClick}
        onRightAlignClick={onRightAlignClick}
        onCenterAlignClick={onCenterAlignClick}
        onFontSizeChange={handleFontSizeChange}
        onFontColorChange={handleColorChange}
      />
    </div>
  );
};

export default TopBar;
