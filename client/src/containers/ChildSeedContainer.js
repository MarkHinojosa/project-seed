import { connect } from 'react-redux';
import ChildSeed from '../components/childSeed/ChildSeed.js';
import { loadChildSeed } from '../actions';

const mapStateToProps = (state) => {
  return {
    seed: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadChildSeed: function(seed){
      dispatch(loadChildSeed(seed))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChildSeed);