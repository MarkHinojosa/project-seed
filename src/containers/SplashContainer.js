import { connect } from 'react-deux';
import Splash from '../components/Splash';

const mapStateToProps = () => {
  return {
    studentsAge: state.studentsAge
  }
}

export default connect(mapStateToProps)(Splash);