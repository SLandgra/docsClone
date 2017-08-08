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

    });
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <BlueBar />
        <GrayBox createDoc={this.props.createDoc} user_id={this.props.user_id} password={this.props.password}/>
        {/* <YourDocuments docs={this.props.docs}/> */}
        <div style={{padding: '20px 18% 0px 18%', display: 'flex', flexDirection: 'column', marginBottom: '60px'}}>
          <h5 style={{color: '#3f3f3f', marginBottom: '20px'}}>Recent documents</h5>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', flexWrap: 'wrap'}}>
            {this.state.docs.map(doc => <SingleDocument name={doc.title}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
