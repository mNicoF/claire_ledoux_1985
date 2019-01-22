import { connect } from 'react-redux';
import Contact from './Contact.jsx';

const mapStateToProps = state => ({
    app: state.appReducer
})

export default connect(mapStateToProps)(Contact);