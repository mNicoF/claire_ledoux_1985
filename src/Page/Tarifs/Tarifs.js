import { connect } from 'react-redux';
import Tarifs from './Tarifs.jsx';

const mapStateToProps = state => ({
    prestations: state.tarifsReducer[localStorage.getItem('siteLang')]
})

export default connect(mapStateToProps)(Tarifs);