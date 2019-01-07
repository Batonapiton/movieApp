import {
  GET_FILMS_BEGIN,
  GET_FILMS_FAIL,
  GET_FILMS_SUCCESS,
  GET_FILM_EPISODES_BEGIN,
  GET_FILM_EPISODES_FAIL,
  GET_FILM_EPISODES_SUCCESS,
  SAVE_FILM
} from '../types'

const initialState = {
  filmsLoading: false,
  filmsList: [],
  filmsLoadingError: '',
  filmEpisodesLoading: false,
  filmEpisodes:[],
  filmEpisodesError:'',
  selectedFilm:{}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS_BEGIN:
      return {
        ...state,
        filmsLoading: true
      }
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        filmsLoading: false,
        filmsList: action.payload
      }
    case GET_FILMS_FAIL:
      return {
        ...state,
        filmsLoading: false,
        filmsLoadingError: action.payload
      }
      case GET_FILM_EPISODES_BEGIN:
      return {
        ...state,
        filmEpisodesLoading: true
      }
    case GET_FILM_EPISODES_SUCCESS:
      return {
        ...state,
        filmEpisodesLoading: false,
        filmEpisodes: action.payload
      }
    case GET_FILM_EPISODES_FAIL:
      return {
        ...state,
        filmEpisodesLoading: false,
        filmEpisodesError: action.payload
      }
      case SAVE_FILM:
      return {
        ...state,
        selectedFilm: action.payload
      }
    default:
      return state

  }
}