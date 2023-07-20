import React from 'react';
import Employee from './Employee';
import Activities from './Activities';

function Company(props) {
  return (
    <div>
      <div>Company: {props.companyName}</div>
      <Employee {...props} tenure="2 years" />
      <Activities {...props} />
    </div>
  );
}

export default Company;
