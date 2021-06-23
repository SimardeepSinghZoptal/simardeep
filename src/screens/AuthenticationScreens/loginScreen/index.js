import {connect} from 'react-redux'

import {loginAction} from './LoginScreenAction'
import LoginScreen from './LoginScreen'

const mapStateToProps = state => ({
  dataLogin: state.loginApp,
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(loginAction(email, password))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
