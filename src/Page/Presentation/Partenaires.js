import { connect } from 'react-redux';
import Partenaires from './Partenaires.jsx';

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    partenaires: state.presentationReducer.partenaires[siteLang]
})

export default connect(mapStateToProps)(Partenaires);