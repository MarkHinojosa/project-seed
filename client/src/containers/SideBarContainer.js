import { connect } from 'react-redux';
import SideBar from '../components/sideBar/SideBar.js'; 

const mapStateToProps = (state) => {
  return {
    studentsAge: state.studentsAge
  }
}

export default connect(mapStateToProps)(SideBar);