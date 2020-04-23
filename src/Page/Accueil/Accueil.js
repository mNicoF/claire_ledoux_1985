import { connect } from 'react-redux';
import Accueil from './Accueil.jsx';

const mapStateToProps = state => ({
    lang: localStorage.getItem('siteLang'),
    accueil: state.accueilReducer[localStorage.getItem('siteLang')],
    presentation: state.presentationReducer[localStorage.getItem('siteLang')],
    contact: state.contactReducer[localStorage.getItem('siteLang')]
})

export default connect(mapStateToProps)(Accueil);