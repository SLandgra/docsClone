import React from 'react';
import { Glyphicon, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Toolbar = ({ onBoldClick, onItalicClick, onULClick, onStrikeClick, onLeftAlignClick, onRightAlignClick, onCenterAlignClick, onFontSizeChange, onFontColorChange, onOrderedChange, onUnorderedChange, onSaveClick, onHistoryClick }) => {
  return (
    <div style={{display: 'flex', overflow: 'hidden', width: '100%', backgroundColor: '#e9e9e9', padding: '20px 0px 20px 40px', borderBottom: '2px solid grey'}}>
      <ButtonGroup style={{marginRight: '20px'}}>
        <Link to="/home"><Button>Home</Button></Link>
        <Button onClick={() => onSaveClick()}>Save</Button>
        <Button onClick={() => onHistoryClick()}>History</Button>
      </ButtonGroup>
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
        <select onChange={(e) => onFontSizeChange(e)} style={{height: '100%'}}>
            <optgroup>Font Size</optgroup>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
          </select>
        <select onChange={(e) => onFontSizeChange(e)} style={{height: '100%'}}>
          <optgroup>Font Color</optgroup>
            <option selected disabled>--color</option>
            <option value="red" style={{background:"red", color: 'red'}}>Red</option>
            <option value="orange" style={{background:"orange", color: 'orange'}}>Orange</option>
            <option value="yellow" style={{background:"yellow", color: 'yellow'}}>Yellow</option>
            <option value="green" style={{background:"green", color: 'green'}}>Green</option>
            <option value="blue" style={{background:"blue", color: 'blue'}}>Blue</option>
            <option value="purple" style={{background:"purple", color: 'purple'}}>Purple</option>
            <option value="black" style={{background:"black", color: 'black'}}>Black</option>
        </select>
      </ButtonGroup>
      <ButtonGroup style={{marginRight: '5px'}}>
        <Button onClick={() => onUnorderedChange()}>
          <Glyphicon glyph="option-vertical"></Glyphicon>
        </Button>
        <Button onClick={() => onOrderedChange()}>
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
