import { connect } from 'react-redux';
import Contact from './Contact.jsx';
import { sendMail } from '../../redux/actions/ContactActions'

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    contact: state.contactReducer[siteLang],
    device: state.appReducer.device,
    currLang: siteLang
})

const mapDispatchToProps = dispatch => ({
    sendMail: (mail) => {
        return (dispatch(sendMail(mail)));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);