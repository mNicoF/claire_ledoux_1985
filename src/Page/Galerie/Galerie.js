import { connect } from 'react-redux';
import Galerie from './Galerie.jsx';

const mapStateToProps = state => ({
    photoList: state.mediasReducer.photos[state.appReducer.lang]
})

export default connect(mapStateToProps)(Galerie);