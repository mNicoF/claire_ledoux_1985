import { connect } from 'react-redux';
import Tarifs from './Tarifs.jsx';

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    lang: siteLang,
    services: state.tarifsReducer[siteLang]
})

export default connect(mapStateToProps)(Tarifs);