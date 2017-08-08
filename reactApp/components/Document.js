import React from 'react';
import {Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap, convertToRaw} from 'draft-js';
import TopBar from './TopBar';
import axios from 'axios';

/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})
var Immutable = require('immutable');

const blockRenderMap = Immutable.Map({
  'rightAlign': {wrapper: (<div className='right' style={{'textAlign':'right'}}></div>)},
  'leftAlign': {wrapper: (<div className='left' style={{'textAlign':'left'}}></div>)},
  'centerAlign': {wrapper: (<div className='center' style={{'textAlign':'center'}}></div>)}
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

const styleMap = {
  '8': {
    'fontSize': 8
  },
  '12': {
    'fontSize': 12
  },
  '16': {
    'fontSize': 16
  },
  '20': {
    'fontSize': 20
  },
  '24': {
    'fontSize': 24
  },
  '28': {
    'fontSize': 28
  },
  'red': {
    'color': 'red'
  },
  'orange': {
    'color': 'orange'
  },
  'yellow': {
    'color': 'yellow'
  },
  'green': {
    'color': 'green'
  },
  'blue': {
    'color': 'blue'
  },
  'purple': {
    'color': 'purple'
  },
  'black': {
    'color': 'black'
  },
};


class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      name: '',
      id: '',
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.setDomEditorRef = ref => this.domEditor = ref;
  }

  componentDidMount() {
    this.domEditor.focus();
    axios.post('http://localhost:3000/document', {
      id: this.props.match.params.id
    })
    .then(response => {
      console.log(response);
      this.setState({name: response.title, id: response._id});
    })
    .catch(err => {
      console.log("Error in Document componentDidMount", err);
    });
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onTextEditClick(input) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, input));
    //this.domEditor.focus();
  }

  _onLeftAlignClick() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'leftAlign'));
    //this.domEditor.focus();
  }
  _onCenterAlignClick() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'centerAlign'));
    //this.domEditor.focus();
  }
  _onRightAlignClick() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'rightAlign'));
    //this.domEditor.focus();
  }
  _onFontSizeChange(e) {
    var fontsize = e.target.value;
    console.log(fontsize);
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, fontsize));
  }
  _onFontColorChange(e) {
    var fontcolor = e.target.value;
    console.log(fontcolor);
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, fontcolor));
  }
  _onUnorderedist() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item'));
  }
  _onOrderedList() {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item'));
  }
  _onSaveClick() {
    axios.post('http://localhost:3000/save', {
      content: convertToRaw(this.sate.editorState.getCurrentContent()),
      id: this.props.match.params.id,
    }).then(response => {
      alert('Saved');
    })
    .catch(err => {
      alert('Error', err);
    });
  }
  render() {
    return (
      <div style={{backgroundColor: '#e9e9e9', display: 'flex', flexDirection: 'column'}}>
        <TopBar
          name={this.state.name}
          id={this.state.id}
          onBoldClick={this._onTextEditClick.bind(this, 'BOLD')}
          onItalicClick={this._onTextEditClick.bind(this, 'ITALIC')}
          onULClick={this._onTextEditClick.bind(this, 'UNDERLINE')}
          onStrikeClick={this._onTextEditClick.bind(this, 'STRIKETHROUGH')}
          onLeftAlignClick={this._onLeftAlignClick.bind(this)}
          onRightAlignClick={this._onRightAlignClick.bind(this)}
          onCenterAlignClick={this._onCenterAlignClick.bind(this)}
          handleFontSizeChange={this._onFontSizeChange.bind(this)}
          handleColorChange={this._onFontColorChange.bind(this)}
          handleUnorderedChange={this._onUnorderedist.bind(this)}
          handleOrderedChange={this._onOrderedList.bind(this)}
          onSaveClick={this._onSaveClick.bind(this)}
        />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{backgroundColor: 'white', height: '864px', width: '816px', padding: '96px', margin: '200px'}}>
            <Editor
              customStyleMap={styleMap}
              editorState={this.state.editorState}
              textAlignment={this.state.textAlignment}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              ref={this.setDomEditorRef}
              blockRenderMap={extendedBlockRenderMap}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Document;
