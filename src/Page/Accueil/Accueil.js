import { connect } from 'react-redux';
import Accueil from './Accueil.jsx';

const mapStateToProps = state => ({
    lang: state.appReducer.lang,
    accueil: state.accueilReducer[state.appReducer.lang],
    presentation: state.presentationReducer[state.appReducer.lang],
    contact: state.contactReducer[state.appReducer.lang]
})

export default connect(mapStateToProps)(Accueil);