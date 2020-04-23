import { connect } from 'react-redux';
import Galerie from './Galerie.jsx';

const mapStateToProps = state => ({
    photoList: state.mediasReducer.photos[localStorage.getItem('siteLang')],
    currLang: localStorage.getItem('siteLang')
})

export default connect(mapStateToProps)(Galerie);