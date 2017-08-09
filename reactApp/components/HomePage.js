import React from 'react';
import GrayBox from './GrayBox';
import BlueBar from './BlueBar';
import SingleDocument from './SingleDocument';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
    };
  }

  componentDidMount() {
    axios.post('http://localhost:3000/getDocs', {
      id: localStorage.getItem('user_id')
    })
    .then(response => {
      this.setState({docs: response.data.docs});
    })
    .catch(err => {
      console.log("Error in HomePage componentDidMount", err);
    });
  }

  addDoc(input) {
    var docArr = this.state.docs.slice();
    docArr.push(input);
    this.setState({docs: docArr});
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <BlueBar />
        <GrayBox addDoc={this.addDoc.bind(this)}/>
        <div style={{padding: '20px 18% 0px 18%', display: 'flex', flexDirection: 'column', marginBottom: '60px'}}>
          <h5 style={{color: '#3f3f3f', marginBottom: '20px'}}>Recent documents</h5>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', flexWrap: 'wrap'}}>
            {this.state.docs.map(doc => <SingleDocument key={doc._id} doc={doc}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
