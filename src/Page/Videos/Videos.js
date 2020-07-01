import { connect } from 'react-redux';
import Videos from './Videos.jsx';

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    videoList: state.mediasReducer.videos[siteLang]
})

export default connect(mapStateToProps)(Videos);