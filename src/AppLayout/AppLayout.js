import { connect } from "react-redux";
import AppLayout from "./AppLayout.jsx";

import {loadDeviceType} from './../redux/actions/AppActions';

const mapStateToProps = state => ({
  target: state.appReducer.target,
  infos: state.appReducer.infos,
  version: state.appReducer.version,
  dateMaJ: state.appReducer.dateMaJ,
  menu: state.appReducer.menu,
  device: state.appReducer.device
});

const mapDispatchToProps = dispatch => ({
  loadDeviceType: () => dispatch(loadDeviceType())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
