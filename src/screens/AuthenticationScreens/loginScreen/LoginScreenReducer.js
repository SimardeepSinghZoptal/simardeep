/* eslint-disable prettier/prettier */
import {Types} from './LoginScreenAction'
const INIT_DATA = {
  response: null,
  loading: false,
  error: null,
}
export function loginApp (state = INIT_DATA, action) {
  switch (action.type) {
    case Types.LOGIN_START:
      return {response: null, loading: true, error: null}
    case Types.LOGIN_COMPLETE:
      return {response: action.payload, loading: false, error: null}
    case Types.LOGIN_ERROR:
      return {response: action.payload, loading: false, error: null}
    case Types.LOGIN_RESET:
      return {...state, response: null, loading: false, error: null}
    default:
      return {...state, response: null, loading: false, error: null}
  }
}
