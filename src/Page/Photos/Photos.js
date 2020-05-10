import { connect } from 'react-redux';
import Photos from './Photos.jsx';

const mapStateToProps = state => ({
    photoList: state.mediasReducer.photos[localStorage.getItem('siteLang')],
    currLang: localStorage.getItem('siteLang')
})

export default connect(mapStateToProps)(Photos);