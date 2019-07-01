import { connect } from 'react-redux';
import Contact from './Contact.jsx';

const mapStateToProps = state => ({
    contact: state.contactReducer[state.appReducer.lang],
    device: state.appReducer.device
})

export default connect(mapStateToProps)(Contact);