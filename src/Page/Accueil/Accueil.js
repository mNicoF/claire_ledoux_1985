import { connect } from 'react-redux';
import Accueil from './Accueil.jsx';

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    lang: siteLang,
    accueil: state.accueilReducer[siteLang],
    presentation: state.presentationReducer.presentation[siteLang],
    contact: state.contactReducer[siteLang]
})

export default connect(mapStateToProps)(Accueil);