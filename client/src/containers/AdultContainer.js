import { connect } from 'react-redux';
import Adult from '../components/adult/Adult';
import { loadAdults } from '../actions';


const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAdults: function(adults){
      dispatch(loadAdults(adults))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Adult);