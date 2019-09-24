import { connect } from "react-redux";
import AppLayout from "./AppLayout.jsx";

import {loadDeviceType, setAppLang} from './../redux/actions/AppActions';

const mapStateToProps = state => ({
  target: state.appReducer.target,
  infos: state.appReducer.infos,
  lang: state.appReducer.lang,
  menu: state.appReducer.menu[state.appReducer.lang]
});

const mapDispatchToProps = dispatch => ({
  loadDeviceType: () => dispatch(loadDeviceType()),
  setAppLang: target => dispatch(setAppLang(target))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
