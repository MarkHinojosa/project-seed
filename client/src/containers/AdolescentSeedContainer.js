import { connect } from 'react-redux';
import AdolescentSeed from '../components/adolescentSeed/AdolescentSeed.js';
import { loadAdolescentSeed } from '../actions';

const mapStateToProps = (state) => {
  return {
    seed: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAdolescentSeed: function(seed){
      dispatch(loadAdolescentSeed(seed))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdolescentSeed);