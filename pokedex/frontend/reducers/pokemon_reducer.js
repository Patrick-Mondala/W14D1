import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

//pokemonReducer
export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return action.pokemon
        case RECEIVE_SINGLE_POKEMON:
            let pokemon = action.pokemon.pokemon
            pokemon.image_url = `/assets/pokemon_snaps/${pokemon.image_url}`;
            return Object.assign({}, state, {[pokemon.id]: pokemon});
        default:
            return state;
    }
}