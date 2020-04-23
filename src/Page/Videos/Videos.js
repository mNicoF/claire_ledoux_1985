import { connect } from 'react-redux';
import Videos from './Videos.jsx';

const mapStateToProps = state => ({
    videoList: state.mediasReducer.videos[localStorage.getItem('siteLang')]
})

export default connect(mapStateToProps)(Videos);