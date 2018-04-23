import { connect } from 'react-redux';
import Adolescent from '../components/adolescent/Adolescent';
import { loadAdolescents } from '../actions';


const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAdolescents: function(adols){
      dispatch(loadAdolescents(adols))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adolescent);