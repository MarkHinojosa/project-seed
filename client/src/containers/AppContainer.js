import { connect } from 'react-redux';
import App from '../components/app/App.js';

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App);