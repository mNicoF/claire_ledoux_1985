//import { FUNC } from '../actions';

export const initialState = {
    "Dermopigmentation" : {
        "Esthétique": {
            "Microblading ou Manuel sourcils" : "170 €",
            "Sourcils poils à poils" : "250 €",
            "Sourcils ombrage" : "200 €",
            "Eye-liner haut" : "150 €",
            "Eye-liner bas" : "100 €",
            "Eye-liner complet" : "200 €",
            "Contour de lèvres" : "250 €",
            "Contour + voilage" : "280 €",
            "Full lips" : "300 €",
            "Candy lips" : "400 €",
            "Grain de beauté" : "80 €"
        },
        "Médicale":{
            "Cicatrices" : "sur devis",
            "Aréole mammaire (x1)" : "350 €",
            "Aréole mammaire (x2)" : "450 €",
            "Tricopigmentation / densification capilaire" : "sur devis entre 250 € et 650 €",
        },
        "Retouches" : {
            "Retouche comprise" : "le premier mois",
            "Retouche annuel" : "100 €"
        }
    },
    "Soins" : {
        "Soins du corps" : {
            "Gommage corps": "30 €",
            "Gommage dos ou jambes": "15 €",
            "Modelage Californien (1h)": "60 €",
            "Californien dos ou jambes (30 min)": "30 €",
            "Modelage énergisant (1h)": "60 €",
            "Energisant dos ou jambes (30 min)": "30 €",
            "Modelage à la bougie (1h)": "70 €",
            "Bougie dos ou jambes (30 min)": "35 €"
        },
        "Soins mains et pieds" : {
            "Pose de vernis": "5 €",
            "Pose de vernis 'French'": "10 €",
            "Manucure (gommage, masque, vernis)": "35 €",
            "Pédicure (gommage, masque, vernis)": "35 €",
            "Manucure + Pédicure": "60 €"
        },
        "Maquillage" : {
            "Make-up jour (Mise en beauté)": "15 €",
            "Make-up soir (Sophistiqué)": "20 €",
            "Make-up grand soir (Avec faux cils)": "25 €",
            "Make-up artistique (Dessins...)": "40 €",
            "Make-up mariage (Avec un essai)": "45 €",
        }
    },
    "Epilation" : {
        "Epilation Homme" : {
            "Sourcils": "9 €",
            "Narines": "9 €",
            "Oreilles": "9 €",
            "Cou ou nuque": "9 €",
            "Joues": "9 €",
            "Epaules": "10 €",
            "Aisselles": "15 €",
            "Bras": "15 €",
            "Torse": "20 €",
            "Dos": "20 €",
            "1/2 Jambes": "20 €",
            "Jambes entières": "30 €",
            "Maillot simple *": "40 €",
            "Maillot intégral *": "50 €"
        },
        "Epilation Femme" : {
            "Sourcils": "7 €",
            "Lèvres": "7 €",
            "Menton": "7 €",
            "Aisselles": "10 €",
            "Bras": "10 €",
            "Visage": "15 €",
            "Maillot simple *": "10 €",
            "Maillot Brésilien *": "15 €",
            "Maillot intégral *": "25 €",
            "1/2 Jambes": "15 €",
            "3/4 Jambes": "20 €",
            "Jambes entières": "25 €"
        },
        "Epilation Forfaits" : {
            "1/2 jambes + aisselles ou maillot simple": "20 €",
            "1/2 jambes + maillot Brésilien": "25 €",
            "1/2 jambes + maillot intégral": "35 €",
            "1/2 jambes + aisselles + maillot simple": "30 €",
            "1/2 jambes + aisselles + maillot Brésilien": "35 €",
            "1/2 jambes + aisselles + maillot intégral": "45 €",
            "Jambes entières + aisselles ou maillot simple": "30 €",
            "Jambes entières + maillot Brésilien": "35 €",
            "Jambes entières + maillot intégral": "45 €",
            "Jambes entières + aisselles + maillot simple": "40 €",
            "Jambes entières + aisselles + maillot Brésilien": "45 €",
            "Jambes entières + aisselles ou maillot intégral": "55 €"
        }
    }
}

export function tarifsReducer(state = initialState, action){
    return state;
}

export default {tarifsReducer}