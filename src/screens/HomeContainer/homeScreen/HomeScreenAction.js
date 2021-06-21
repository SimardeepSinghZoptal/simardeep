import axios from 'axios'
import Urls from '../../../constants/Urls'

export const Types = {
  HOME_EPISODE_SCREEN_START: 'HOME_EPISODE_SCREEN_START',
  HOME_EPISODE_SCREEN_COMPLETE: 'HOME_EPISODE_SCREEN_COMPLETE',
  HOME_EPISODE_SCREEN_ERROR: 'HOME_EPISODE_SCREEN_ERROR',
  HOME_EPISODE_SCREEN_RESET: 'HOME_EPISODE_SCREEN_RESET',
}

export function homeAction () {
  return async dispatch => {
    dispatch(request())

    axios
      .get('http://shibe.online/api/shibes?count=50&urls=true&httpsUrls=true')
      .then(response => {
        console.log('=====response check====' + JSON.stringify(response))
        dispatch(success(response.data))
      })
      .catch(error => {
        console.log('------- error-------' + JSON.stringify(error))
        dispatch(failure(error))
      })
  }

  function request () {
    return {type: Types.HOME_EPISODE_SCREEN_START, payload: null}
  }
  function success (response) {
    return {type: Types.HOME_EPISODE_SCREEN_COMPLETE, payload: response}
  }
  function failure (error) {
    return {type: Types.HOME_EPISODE_SCREEN_ERROR, payload: error}
  }
}

export function homeResetState () {
  return dispatch => {
    dispatch(reset())
  }

  function reset () {
    return {type: Types.HOME_EPISODE_SCREEN_RESET, payload: null}
  }
}
