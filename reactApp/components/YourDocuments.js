import React from 'react';
import SingleDocument from './SingleDocument';

const YourDocuments = () => {
  return (
    <div style={{padding: '20px 18% 0px 18%', display: 'flex', flexDirection: 'column', marginBottom: '60px'}}>
      <h5 style={{color: '#3f3f3f', marginBottom: '20px'}}>Recent documents</h5>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', flexWrap: 'wrap'}}>
        <SingleDocument name={"Corgi Journal"} createBy={"Thanh"}/>
        <SingleDocument name={"Doggo Discussion"} createBy={"Thanh"}/>
        <SingleDocument name={"Horizons"} createBy={"CorgiMaster"}/>
        <SingleDocument name={"Technology"} createBy={"Thanh"}/>
        <SingleDocument name={"Technology"} createBy={"Thanh"}/>
        <SingleDocument name={"Technology"} createBy={"Thanh"}/>
        <SingleDocument name={"Technology"} createBy={"Thanh"}/>
      </div>
    </div>
  );
};

export default YourDocuments;
