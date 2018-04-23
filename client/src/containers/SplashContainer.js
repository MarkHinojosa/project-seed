import { connect } from 'react-redux';
import Splash from '../components/splash/splash.js';

const mapStateToProps = (state) => {
  return {
    state: state
  }
}


export default connect(mapStateToProps)(Splash);