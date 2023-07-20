import React from 'react';

function Activities(props) {
  return (
    <div className='activities'>
      <div>Committees: {props.committees}</div>
      <div>Forums: {props.forums}</div>
    </div>
  );
}

export default Activities;
