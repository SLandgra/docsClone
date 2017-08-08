import React from 'react';
import GrayBox from './GrayBox';
import BlueBar from './BlueBar';

class HomePage extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <BlueBar />
        <GrayBox user_id={this.props.user_id} password={this.props.password}/>
        {/* <YourDocuments docs={this.props.docs}/> */}
        <div style={{padding: '20px 18% 0px 18%', display: 'flex', flexDirection: 'column', marginBottom: '60px'}}>
          <h5 style={{color: '#3f3f3f', marginBottom: '20px'}}>Recent documents</h5>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', flexWrap: 'wrap'}}>
            {this.props.docs.forEach(doc => <SingleDocument name={doc.title}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
