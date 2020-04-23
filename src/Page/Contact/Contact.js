import { connect } from 'react-redux';
import Contact from './Contact.jsx';

const mapStateToProps = state => ({
    contact: state.contactReducer[localStorage.getItem('siteLang')],
    device: state.appReducer.device,
    currLang: localStorage.getItem('siteLang')
})

export default connect(mapStateToProps)(Contact);