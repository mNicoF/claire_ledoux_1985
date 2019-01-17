import { connect } from 'react-redux';
import Header from './Header.jsx';

const mapStateToProps = state => ({
  app: state.appReducer
})

export default connect(mapStateToProps)(Header);