import React from 'react';

function Employee(props) {
  return (
    <div className='employee'>
      <div>Name: {props.firstname}</div>
      <div>Lastname: {props.lastname}</div>
      <div>Designation: {props.designation}</div>
      <div>Tenure: {props.tenure}</div>
    </div>
  );
}

function EmployeeContainer(props) {
  const get_name = () => {
    return { firstname: 'Alice', lastname: 'Chang' };
  };

  return (
    <div className='company'>
      {/* <Employee firstname='John' lastname='Rivers' />
      <Employee firstname='Emily' lastname='Hill' />
      <Employee firstname='Nina' lastname='Matthew' /> */}
      <Employee
        firstname={get_name().firstname}
        lastname={get_name().lastname}
        designation={props.designation}
        tenure={props.tenure}
      />
    </div>
  );
}

export default EmployeeContainer;
