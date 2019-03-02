import { connect } from 'react-redux';
import Presentation from './Presentation.jsx';

const mapStateToProps = state => ({
    presentation: state.presentationReducer[state.appReducer.lang]
})

export default connect(mapStateToProps)(Presentation);