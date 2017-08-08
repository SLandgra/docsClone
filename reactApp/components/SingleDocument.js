import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

const SingleDocument = ({ doc }) => {
  return (
    <div style={{height: '220px', width: '180px', backgroundColor: 'white', display: 'flex', alignItems: 'flex-end', border: '1px solid gray', marginBottom: '25px', marginRight: '20px'}}>
      <div style={{width: '180px', height: '70px', borderTop: '1px solid gray', padding: '10px 0px 10px 10px'}}>
        <p style={{padding: '0', margin: '0'}}><Link to={"/document/" + doc._id}>{doc.title}</Link></p>
        <Glyphicon glyph="file" style={{fontSize: '10px'}}></Glyphicon>
      </div>
    </div>
  );
};

export default SingleDocument;
