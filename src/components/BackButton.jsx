import React from 'react';

let BackButton = (props) => (
  <button 
    className={`backButton ${props.className ? props.className : ''}`}
    onClick={ () => {props.goBack()} }
  >Back</button>
);

export default BackButton;