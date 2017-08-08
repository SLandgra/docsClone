import React from 'react';

const DocInfo = ({ name, id}) => {
  return (
    <div style={{paddingLeft: '40px'}}>
      <h2>Name: {name}</h2>
      <p>Document sharing ID: {id}</p>
    </div>
  );
};

export default DocInfo;
