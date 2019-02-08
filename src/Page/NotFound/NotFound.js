import { connect } from 'react-redux';
import NotFound from './NotFound.jsx';

const mapStateToProps = state => ({
    app: state.appReducer
})

export default connect(mapStateToProps)(NotFound);