import { connect } from 'react-redux';
import Videos from './Videos.jsx';

const mapStateToProps = state => ({
    videoList: state.mediasReducer[state.appReducer.lang]
})

export default connect(mapStateToProps)(Videos);