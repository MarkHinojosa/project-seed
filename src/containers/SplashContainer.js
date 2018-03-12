import { connect } from 'react-redux';
import Splash from '../components/splash/splash.js';
import {setAge} from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
    studentsAge: state.studentsAge
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectAge: function(age){
      let action = setAge(age);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash);