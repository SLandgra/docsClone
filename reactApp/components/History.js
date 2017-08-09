import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('History: ', this.props.history);
    return (
      <div style={{height: '100%', alignItems: 'center', marginTop: '200px', marginRight: '25px'}}>
        <h2><u>History</u></h2>
        {this.props.history.data.doc.content.map((content) =>
          <button style={{backgroundColor: '#e1ffda', padding: '10px', textAlign: 'center', borderStyle: 'solid', width: '100%'}} onClick={() => this.props.handleClick(content[1])}>
            {content[1]}
          </button>)}
      </div>
    );
  }
}

export default History;
