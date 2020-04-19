import { connect } from 'react-redux';
import Presentation from './Presentation.jsx';

const mapStateToProps = state => ({
    lang: state.appReducer.lang,
    presentation: state.presentationReducer[state.appReducer.lang]
})

export default connect(mapStateToProps)(Presentation);