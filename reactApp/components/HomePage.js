import React from 'react';
import GrayBox from './GrayBox';
import BlueBar from './BlueBar';
import YourDocuments from './YourDocuments';

class HomePage extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <BlueBar />
        <GrayBox user_id={this.props.user_id} password={this.props.password}/>
        <YourDocuments />
      </div>
    );
  }
}

export default HomePage;
