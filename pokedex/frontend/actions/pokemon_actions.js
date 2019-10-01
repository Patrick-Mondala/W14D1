import { fetchAllPokemon, fetchAPokemon } from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

//single pokemon
export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
})

export const requestSinglePokemon = pokemonId => (dispatch) => (
  fetchAPokemon(pokemonId).then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
);

// export const receiveTodo = todo => ({
//   type: RECEIVE_TODO,
//   todo
// });

// export const fetchTodo = id => dispatch => (
//   TodoAPIUtil.fetchTodo(id).then(todo => dispatch(receiveTodo(todo)))
// );