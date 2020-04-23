import { connect } from 'react-redux';
import Produits from './Produits.jsx';

const mapStateToProps = state => ({
    produits: state.produitReducer[localStorage.getItem('siteLang')]
})

export default connect(mapStateToProps)(Produits);