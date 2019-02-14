import { connect } from 'react-redux';
import Header from './Header.jsx';

import {loadDeviceType} from './../../redux/actions/AppActions';

const mapStateToProps = state => ({
  app: state.appReducer
})

const mapDispatchToProps = dispatch => ({
  loadDeviceType: () => dispatch(loadDeviceType())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);