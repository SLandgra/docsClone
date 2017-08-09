import React from 'react';
import {Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap, convertToRaw, convertFromRaw} from 'draft-js';
import TopBar from './TopBar';
import History from './History';
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
      socket: io('http://localhost:3000'),
      historyOn: false,
      history: [],
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.setDomEditorRef = ref => this.domEditor = ref;
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  onChange(editorState){
    this.setState({editorState});
    this.state.socket.emit('documentChange', {content: convertToRaw(
      this.state.editorState.getCurrentContent()),
      cursor: this.state.editorState.getSelection()
    });
  }
  componentDidMount() {
    var that = this;
    this.domEditor.focus();
    this.state.socket.on('connect', ()=> {
      console.log('connected');
      that.state.socket.on('documentEdit', function(state){
        console.log(state.cursor);
        var newcontent = convertFromRaw(state.content);
        newcontent = EditorState.createWithContent(newcontent);
        that.setState({editorState: newcontent});
      });
    });
  }
  componentWillMount() {
    axios.post('http://localhost:3000/document', {
      id: this.props.match.params.id
    })
    .then(response => {
      // var newstate = this.state.editorState;
      if(response.data.content.length === 0){
        this.setState({name: response.data.title, id: this.props.match.params.id});
      }else{
        var newcontent = response.data.content[response.data.content.length-1][0];
        console.log(newcontent);
        newcontent = convertFromRaw(newcontent);
        newcontent= EditorState.createWithContent(newcontent);
        this.setState({name: response.data.title, id: this.props.match.params.id, editorState: newcontent});
      }
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
      content: convertToRaw(this.state.editorState.getCurrentContent()),
      date: new Date(),
      id: this.props.match.params.id,
    }).then(response => {
      alert('Saved');
    })
    .catch(err => {
      alert('Error', err);
    });
  }
  _onHistoryClick() {
    console.log("Obtaining History boiiiis");
    axios.post('http://localhost:3000/obtainHistory', {
      id: this.props.match.params.id,
    })
    .then(response => {
      console.log(response);
      this.setState({historyOn: !this.state.historyOn, history: response});
    })
    .catch(err => {
      alert('Error:', err);
    });
  }
  handleButtonClick(date) {
    var newcontent;
    this.state.history.data.doc.content.forEach(function(item) {
      if(item[1] === date) {
        console.log(item);
        newcontent = item[0];
        newcontent.entityMap = {};
      }
    });
    console.log(newcontent);
    newcontent = convertFromRaw(newcontent);
    newcontent= EditorState.createWithContent(newcontent);
    this.setState({editorState: newcontent});
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
          onHistoryClick={this._onHistoryClick.bind(this)}
        />
        {this.state.historyOn ?
          <div style={{display: 'flex', width: '100%'}}>
              <div style={{backgroundColor: 'white', height: '864px', width: '816px', padding: '96px', marginTop: '200px', marginRight: '100px', marginLeft: '100px', marginBottom: '200px', float: 'left', overflow: 'wrap'}}>
                <Editor
                  customStyleMap={styleMap}
                  editorState={this.state.editorState}
                  textAlignment={this.state.textAlignment}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange.bind(this)}
                  ref={this.setDomEditorRef}
                  blockRenderMap={extendedBlockRenderMap}
                />
              </div>
            <div style={{float: 'right', width: '500px'}}>
              <History history={this.state.history} handleClick={this.handleButtonClick}/>
            </div>
          </div>
        :
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{backgroundColor: 'white', height: '864px', width: '816px', padding: '96px', margin: '200px', overflow: 'wrap'}}>
              <Editor
                customStyleMap={styleMap}
                editorState={this.state.editorState}
                textAlignment={this.state.textAlignment}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange.bind(this)}
                ref={this.setDomEditorRef}
                blockRenderMap={extendedBlockRenderMap}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Document;
