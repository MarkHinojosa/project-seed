import { connect } from 'react-redux';
import Child from '../components/child/Child';
import { loadChildren } from '../actions';

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadChildren: function(children){
      dispatch(loadChildren(children))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Child);