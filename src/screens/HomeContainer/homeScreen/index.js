import {connect} from 'react-redux'
import HomeScreen from './HomeScreen'
import {homeResetState, homeAction} from './HomeScreenAction'

const mapStateToProps = state => ({
  homeReducer: state.homeReducer,
})

const mapDispatchToProps = dispatch => ({
  homeAction: () => dispatch(homeAction()),
  homeResetState: () => dispatch(homeResetState()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
