import React from 'react';
import { Glyphicon, Button, ButtonGroup } from 'react-bootstrap';

const Toolbar = ({ onBoldClick, onItalicClick, onULClick, onStrikeClick, onLeftAlignClick, onCenterAlignClick, onRightAlignClick }) => {
  return (
    <div style={{display: 'flex', overflow: 'hidden', width: '100%', backgroundColor: '#e9e9e9', padding: '20px 0px 20px 40px', borderBottom: '2px solid grey'}}>
      <ButtonGroup style={{marginRight: '5px'}}>
        <Button onClick={() => onBoldClick()}>
          <Glyphicon glyph="bold"></Glyphicon>
        </Button>
        <Button onClick={() => onItalicClick()}>
          <Glyphicon glyph="italic"></Glyphicon>
        </Button>
        <Button onClick={() => onULClick()}>
          <Glyphicon glyph="text-color"></Glyphicon>
        </Button>
        <Button onClick={() => onStrikeClick()}>
          <strong><s>Strike</s></strong>
        </Button>
      </ButtonGroup>
      <ButtonGroup style={{marginRight: '5px'}}>
        <Button>
          <Glyphicon glyph="text-size"></Glyphicon>
        </Button>
        <Button>
          <Glyphicon glyph="font"></Glyphicon>
        </Button>
      </ButtonGroup>
      <ButtonGroup style={{marginRight: '5px'}}>
        <Button>
          <Glyphicon glyph="option-vertical"></Glyphicon>
        </Button>
        <Button>
          <strong><p style={{margin: '0', fontSize: '33%'}}>1----</p>
          <p style={{margin: '0', fontSize: '33%'}}>2----</p>
          <p style={{margin: '0', fontSize: '33%'}}>3----</p></strong>
        </Button>
      </ButtonGroup>
      <ButtonGroup style={{marginRight: '5px'}}>
        <Button onClick={() => onLeftAlignClick()}>
          <Glyphicon glyph="align-left"></Glyphicon>
        </Button>
        <Button onClick={() => onCenterAlignClick()}>
          <Glyphicon glyph="align-center"></Glyphicon>
        </Button>
        <Button onClick={() => onRightAlignClick()}>
          <Glyphicon glyph="align-right"></Glyphicon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Toolbar;
