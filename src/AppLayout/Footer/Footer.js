import { connect } from 'react-redux';
import Footer from './Footer.jsx';

const mapStateToProps = state => ({
  app: state.appReducer
})

export default connect(mapStateToProps)(Footer);