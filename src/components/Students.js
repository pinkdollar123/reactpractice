import React, { Component } from 'react'

export class Students extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <div>StudentID: {this.props.id}</div>
        <div>Name: {this.props.studentName}</div>
        <div>Enrolled: {this.props.enrolled ? 'yes' : 'no'} </div>
      </div>
    )
  }
}

Students.defaultProps = {   
    id: Math.floor(Math.random() * 100000000),
    studentName: "Zosimo",
    enrolled: true
};

export default Students