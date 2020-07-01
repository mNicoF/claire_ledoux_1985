import { connect } from 'react-redux';
import Produits from './Produits.jsx';

let siteLang = (localStorage.getItem('siteLang'))? (localStorage.getItem('siteLang')) : 'fr';

const mapStateToProps = state => ({
    produits: state.produitReducer[siteLang]
})

export default connect(mapStateToProps)(Produits);