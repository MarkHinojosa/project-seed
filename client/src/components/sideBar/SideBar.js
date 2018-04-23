import React from 'react';

class SideBar extends React.Component {
  componentDidMount() {
    
  }

  render () {
    return (
      <div>
       <p>Age: {this.props.studentsAge}</p>
      </div>
    )
  }
}
export default SideBar;