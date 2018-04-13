import { connect } from 'react-redux';
import Infant from '../components/infant/Infant';

const mapStateToProps = (state) => {
  return {
    studentsAge: state.studentsAge
  }
}

export default connect(mapStateToProps)(Infant);