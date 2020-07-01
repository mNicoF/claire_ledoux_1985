import { connect } from 'react-redux';
import Ateliers from './Ateliers.jsx';

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    device: state.appReducer.device,
    ateliers: state.ateliersReducer[siteLang]
})

export default connect(mapStateToProps)(Ateliers);