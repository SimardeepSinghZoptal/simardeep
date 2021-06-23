import {combineReducers} from 'redux'
import {homeReducer} from '../screens/HomeContainer/homeScreen/HomeScreenReducer'
import {loginApp} from '../screens/AuthenticationScreens/loginScreen/LoginScreenReducer'

export default combineReducers({
  homeReducer,
  loginApp,
})
