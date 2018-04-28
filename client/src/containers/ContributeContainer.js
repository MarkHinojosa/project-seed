import { connect } from 'react-redux';
import Contribute from '../components/contribute/contribute.js';
import { 
  createChildSeed,
  createAdolescentSeed,
  createAdultSeed 
} from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    createChildSeed: function (seed) {
      dispatch(createChildSeed(seed));
    },
    createAdolescentSeed: function (seed) {
      dispatch(createAdolescentSeed(seed));
    },
    createAdultSeed: function (seed) {
      dispatch(createAdultSeed(seed));
    },
  }
}

export default connect(null,mapDispatchToProps)(Contribute);