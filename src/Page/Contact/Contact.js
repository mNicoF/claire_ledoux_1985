import { connect } from 'react-redux';
import Contact from './Contact.jsx';

const mapStateToProps = state => ({
    contact: state.contactReducer
})

export default connect(mapStateToProps)(Contact);