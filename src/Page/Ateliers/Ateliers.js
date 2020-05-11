import { connect } from 'react-redux';
import Ateliers from './Ateliers.jsx';

const mapStateToProps = state => ({
    device: state.appReducer.device,
    ateliers: state.ateliersReducer[localStorage.getItem('siteLang')]
})

export default connect(mapStateToProps)(Ateliers);