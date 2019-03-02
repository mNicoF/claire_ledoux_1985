import { connect } from 'react-redux';
import Accueil from './Accueil.jsx';

const mapStateToProps = state => ({
    accueil: state.accueilReducer,
    presentation: state.presentationReducer[state.appReducer.lang],
    contact: state.contactReducer
})

export default connect(mapStateToProps)(Accueil);