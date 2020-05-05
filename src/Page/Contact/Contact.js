import { connect } from 'react-redux';
import Contact from './Contact.jsx';
import { sendMail } from '../../redux/actions/ContactActions'

const mapStateToProps = state => ({
    contact: state.contactReducer[localStorage.getItem('siteLang')],
    device: state.appReducer.device,
    currLang: localStorage.getItem('siteLang')
})

const mapDispatchToProps = dispatch => ({
    sendMail: (mail) => {
        return (dispatch(sendMail(mail)));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);