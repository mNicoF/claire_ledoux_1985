import { connect } from 'react-redux';
import Presentation from './Presentation.jsx';

const mapStateToProps = state => ({
    presentation: state.presentationReducer
})

export default connect(mapStateToProps)(Presentation);