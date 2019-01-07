import {
  GET_FILMS_BEGIN,
  GET_FILMS_FAIL,
  GET_FILMS_SUCCESS,
  GET_FILM_EPISODES_BEGIN,
  GET_FILM_EPISODES_FAIL,
  GET_FILM_EPISODES_SUCCESS,
  SAVE_FILM
} from '../types'

export const getFilms = (film) => {
  return dispatch => {
    dispatch(getFilmsBegin())
    fetch(`http://api.tvmaze.com/search/shows?q=${film}`)
      .then(res => res.json())
      .then(films => dispatch(getFilmsSuccess(films)))
      .catch(error=>dispatch(getFilmsFail(error)))
  }
}
export const getFilmsBegin = () => {
  return dispatch => {
    dispatch({
      type: GET_FILMS_BEGIN
    })
  }
}
export const getFilmsSuccess = (filmList) => {
  return dispatch => {
    dispatch({
      type: GET_FILMS_SUCCESS,
      payload: filmList
    })
  }
}
export const getFilmsFail = (error) => {
  return dispatch => {
    dispatch({
      type: GET_FILMS_FAIL,
      payload: error
    })
  }
}
export const getFilmEpisodes = (filmID) => {
  return dispatch => {
    dispatch(getFilmEpisodesBegin())
    fetch(`http://api.tvmaze.com/shows/${filmID}/episodes`)
      .then(res => res.json())
      .then(films => dispatch(getFilmEpisodesSuccess(films)))
      .catch(error=>dispatch(getFilmEpisodesFail(error)))
  }
}
export const getFilmEpisodesBegin = () => {
  return dispatch => {
    dispatch({
      type: GET_FILM_EPISODES_BEGIN
    })
  }
}
export const getFilmEpisodesSuccess = (episodes) => {
  return dispatch => {
    dispatch({
      type: GET_FILM_EPISODES_SUCCESS,
      payload: episodes
    })
  }
}
export const getFilmEpisodesFail = (error) => {
  return dispatch => {
    dispatch({
      type: GET_FILM_EPISODES_FAIL,
      payload: error
    })
  }
}
export const saveFilm=(film)=>{
  return dispatch=>{
    dispatch({
      type:SAVE_FILM,
      payload:film
    })
  }
}