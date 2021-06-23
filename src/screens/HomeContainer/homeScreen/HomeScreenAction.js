import axios from 'axios'
import Urls from '../../../constants/Urls'

export const Types = {
  HOME_SCREEN_START: 'HOME_SCREEN_START',
  HOME_SCREEN_COMPLETE: 'HOME_SCREEN_COMPLETE',
  HOME_SCREEN_ERROR: 'HOME_SCREEN_ERROR',
  HOME_SCREEN_RESET: 'HOME_SCREEN_RESET',
}

export function homeAction (outletId, accessToken) {
  return async dispatch => {
    dispatch(request())
    let obj = {
      outlet_id: outletId,
    }
    console.log('-=-=-token======>' + accessToken)

    // await fetch(Urls.HOME_URL, {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     // 'Content-Type': 'application/json',
    //     Authorization: 'Bearer' + accessToken,
    //   },
    //   body: JSON.stringify(obj),
    // })
    //   .then(response => response.json())
    //   // .then(data => console.log('-=-=-==-oaa-=-=-=--' + JSON.stringify(data)))
    //   .then(function (response) {
    //     console.log('response== home======>' + JSON.stringify(response))
    //     // dispatch(success(response))
    //   })
    //   .catch(function (error) {
    //     console.log('response home error======>' + JSON.stringify(error))
    //     // dispatch(failure(error))
    //     throw error
    //   })
    let formData = new FormData()
    formData.append('outlet_id', outletId)
    const headers = {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }

    console.log('print url ===== ' + Urls.HOME_URL)
    axios
      .post(Urls.HOME_URL, formData, {
        headers: headers,
      })
      .then(response => {
        console.log('response== home======>' + JSON.stringify(response))
        dispatch(success(response))
      })
      .catch(error => {
        console.log('response home error======>' + JSON.stringify(error))
        dispatch(failure(error))
        // throw error
      })
  }

  function request () {
    return {type: Types.HOME_SCREEN_START, payload: null}
  }
  function success (response) {
    return {type: Types.HOME_SCREEN_COMPLETE, payload: response}
  }
  function failure (error) {
    return {type: Types.HOME_SCREEN_ERROR, payload: error}
  }
}

export function homeResetState () {
  return dispatch => {
    dispatch(reset())
  }

  function reset () {
    return {type: Types.HOME_SCREEN_RESET, payload: null}
  }
}
