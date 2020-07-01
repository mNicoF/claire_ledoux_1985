import { connect } from 'react-redux';
import Presentation from './Presentation.jsx';

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    presentation: state.presentationReducer.presentation[siteLang]
})

export default connect(mapStateToProps)(Presentation);