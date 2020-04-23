import { connect } from 'react-redux';
import Presentation from './Presentation.jsx';

const mapStateToProps = state => ({
    lang: localStorage.getItem('siteLang'),
    presentation: state.presentationReducer[localStorage.getItem('siteLang')]
})

export default connect(mapStateToProps)(Presentation);