import { connect } from 'react-redux';
import Produits from './Produits.jsx';

const mapStateToProps = state => ({
    produits: state.produitReducer[state.appReducer.lang]
})

export default connect(mapStateToProps)(Produits);