import {Types} from './HomeScreenAction'
const INIT_DATA_HOME_EPISODE_SCREEN = {
  response: null,
  loading: false,
  error: null,
}
export function homeReducer (state = INIT_DATA_HOME_EPISODE_SCREEN, action) {
  switch (action.type) {
    case Types.HOME_EPISODE_SCREEN_START:
      return {response: null, loading: true, error: null}
    case Types.HOME_EPISODE_SCREEN_COMPLETE:
      return {response: action.payload, loading: false, error: null}
    case Types.HOME_EPISODE_SCREEN_ERROR:
      return {response: action.payload, loading: false, error: null}
    case Types.HOME_EPISODE_SCREEN_RESET:
      return {...state, response: null, loading: false, error: null}
    default:
      return {...state, response: null, loading: false, error: null}
    // default:
    //   return INIT_DATA_HOME_EPISODE_SCREEN
  }
}
