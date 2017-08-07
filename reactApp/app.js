var React = require('react');
var ReactDOM = require('react-dom');
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
  }
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  _onItalicsClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
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

  render() {
    return (
      <div className='MyCustomBlock'>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onItalicsClick.bind(this)}>Italics</button>
        <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
        <button onClick={this._onCenterClick.bind(this)}>Center Text</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          blockRenderMap={extendedBlockRenderMap}
        />
      </div>
    );
  }
}


ReactDOM.render(<MyEditor />,
   document.getElementById('root'));
