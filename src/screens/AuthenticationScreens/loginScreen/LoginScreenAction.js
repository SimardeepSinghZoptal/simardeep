import axios from 'axios'
import Urls from '../../../constants/Urls'

export const Types = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_COMPLETE: 'LOGIN_COMPLETE',
  LOGIN_ERROR: 'LOGIN_ERROR',

  LOGIN_RESET: 'LOGIN_RESET',
}

export function loginAction (email, password) {
  console.log('print email action ' + email)
  console.log('chcek password ----- ' + password)
  return async dispatch => {
    dispatch(request())
    let obj = {
      email: email,
      password: password,
    }
    let formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    console.log('print url ===== ' + Urls.LOGIN_URL)
    console.log('-=-=-=-body=-=-=-=-' + JSON.stringify(obj))

    axios
      .post(Urls.LOGIN_URL, formData)
      .then(response => {
        // console.log('response== login======>' + JSON.stringify(response))
        dispatch(success(response))
      })
      .catch(error => {
        console.log('response login error======>' + JSON.stringify(error))
        dispatch(failure(error))
        // throw error
      })
  }

  function request () {
    return {type: Types.LOGIN_START, payload: null}
  }
  function success (response) {
    return {type: Types.LOGIN_COMPLETE, payload: response}
  }
  function failure (error) {
    return {type: Types.LOGIN_ERROR, payload: error}
  }
}
export function loginResetState () {
  return dispatch => {
    dispatch(reset())
  }

  function reset () {
    return {type: Types.LOGIN_RESET, payload: null}
  }
}
