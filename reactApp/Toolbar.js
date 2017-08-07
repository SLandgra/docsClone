import React from 'react';
import { Glyphicon, Button, ButtonGroup } from 'react-bootstrap';

const Toolbar = ({ onBoldClick, onItalicClick, onULClick, onStrikeClick, onLeftAlignClick }) => {
  return (
    <div style={{overflow: 'hidden', width: '100%', backgroundColor: '#e9e9e9', padding: '20px'}}>
      <ButtonGroup style={{marginRight: '5px'}}>
        <Button onClick={() => onBoldClick()}>
          <Glyphicon glyph="bold"></Glyphicon>
        </Button>
        <Button onClick={() => onItalicClick()}>
          <Glyphicon glyph="italic"></Glyphicon>
        </Button>
        <Button onClick={() => onULClick()}>
          <Glyphicon glyph="text-underline"></Glyphicon>
        </Button>
        <Button onClick={() => onStrikeClick()}>
          <Glyphicon glyph="strike"></Glyphicon>
        </Button>
      </ButtonGroup>
      <ButtonGroup style={{marginRight: '5px'}}>
        <Button onClick={() => onLeftAlignClick()}>
          <Glyphicon glyph="align-left"></Glyphicon>
        </Button>
        <Button onClick={() => onLeftAlignClick()}>
          <Glyphicon glyph="align-center"></Glyphicon>
        </Button>
        <Button onClick={() => onLeftAlignClick()}>
          <Glyphicon glyph="align-right"></Glyphicon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Toolbar;
