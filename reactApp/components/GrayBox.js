import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class GrayBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docName: '',
      sharedDocId: '',
    };
  }

  onCreateChange(e) {
    this.setState({docName: e.target.value});
  }

  onCreateClick() {
    if (! this.state.docName) {
      alert('Document name is empty. Please fill out before click Create.');
      return;
    }
    axios.post('/create', {
      docName: this.state.docName,
      id: this.props.user_id,
      password: this.props.password,
    })
    .catch(err => {
      console.log("Error in onCreateClick in GrayBox", err);
    });
    this.setState({docName: ''});
  }

  onAddChange(e) {
    this.setState({sharedDocId: e.target.value});
  }

  onAddClick() {
    if (! this.state.sharedDocId) {
      alert('ID field is empty. Please fill out before click Add');
      return;
    }
    this.setState({sharedDocId: ''});
    axios.post('/addSharedDocument', {
      id: this.state.sharedDocId
    })
    .then(response => {
      if (response.saved) {
        alert("Success");
      } else {
        alert(response.error);
      }
    })
    .catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <div style={{backgroundColor: '#3f3f3f', display: 'flex', flexDirection: 'column', width: '100%', height: '350px'}}>
        <div style={{padding: '30px 0px 0px 18%', marginTop: '75px', display: 'flex', flexDirection: 'column'}}>
          <h4 style={{color: 'white', marginBottom: '20px'}}>Start a new document</h4>
          <form>
            <input style={{border: '0px', padding: '10px', borderRadius: '5px', width: '400px', backgroundColor: 'white', color: 'gray', marginRight: '20px'}} placeholder="Add document name" value={this.state.docName} onChange={(e) => this.onCreateChange(e)}/>
            <Button style={{padding: '10px', width: '80px'}} onClick={() => this.onCreateClick()}>Create</Button>
          </form>

          <h4 style={{color: 'white', margin: '30px 0px 20px 0px'}}>Add a shared document</h4>
          <form>
            <input style={{border: '0px', padding: '10px', borderRadius: '5px', width: '400px', backgroundColor: 'white', color: 'gray', marginRight: '20px'}} placeholder="Add document name" value={this.state.sharedDocId} onChange={(e) => this.onAddChange(e)}/>
            <Button style={{padding: '10px', width: '80px'}} onClick={() => this.onAddClick()}>Add</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default GrayBox;
