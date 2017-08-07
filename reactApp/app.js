import React from 'react';
import  ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { HashRouter } from 'react-router-dom';
import TopBar from './TopBar';

/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})

var Immutable = require('immutable');

import {Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap} from 'draft-js';

const blockRenderMap = Immutable.Map({
  'rightAlign': {wrapper: (<div className='right'></div>)},
  'leftAlign': {wrapper: (<div className='left'></div>)},
  'centerAlign': {wrapper: (<div className='center' style={{'text-align':'center'}}></div>)}
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.setDomEditorRef = ref => this.domEditor = ref;
  }

  componentDidMount() {
    this.domEditor.focus();
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onLeftClick() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'leftAlign'));
  }
  _onCenterClick() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'centerAlign'));
  }
  _onRightClick() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'rightAlign'));
  }
  _onTextEditClick(input) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, input));
  }


  render() {
    return (
      <div style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'column'}}>
        <TopBar
          onBoldClick={this._onTextEditClick.bind(this, 'BOLD')}
          onItalicClick={this._onTextEditClick.bind(this, 'ITALIC')}
          onULClick={this._onTextEditClick.bind(this, 'UNDERLINE')}
          onStrikeClick={this._onTextEditClick.bind(this, 'STRIKETHROUGH')}
          onLeftAlignClick={this._onLeftAlignClick.bind(this)}
        />
        <div style={{backgroundColor: 'white', height: '864px', width: '816px', padding: '96px', marginLeft: '200px', marginTop: '200px'}} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            textAlignment={this.state.textAlignment}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            ref={this.setDomEditorRef}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('root')
);
