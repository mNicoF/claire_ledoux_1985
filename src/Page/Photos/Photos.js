import { connect } from 'react-redux';
import Photos from './Photos.jsx';

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    photoList: state.mediasReducer.photos[siteLang],
    currLang: siteLang
})

export default connect(mapStateToProps)(Photos);