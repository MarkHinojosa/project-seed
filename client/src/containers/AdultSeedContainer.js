import { connect } from 'react-redux';
import AdultSeed from '../components/adultSeed/AdultSeed.js';
import { loadAdultSeed } from '../actions';

const mapStateToProps = (state) => {
  return {
    seed: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAdultSeed: function(seed){
      dispatch(loadAdultSeed(seed))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdultSeed);