import { connect } from 'react-redux';
import Presentation from './Presentation.jsx';

const mapStateToProps = state => ({
    presentation: state.presentationReducer[localStorage.getItem('siteLang')]
})

export default connect(mapStateToProps)(Presentation);