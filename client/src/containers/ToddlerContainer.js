import { connect } from 'react-redux';
import Toddler from '../components/toddler/Toddler';

const mapStateToProps = (state) => {
  return {
    studentsAge: state.studentsAge
  }
}

export default connect(mapStateToProps)(Toddler);