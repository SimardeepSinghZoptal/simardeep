import {connect} from 'react-redux'
import HomeScreen from './HomeScreen'
import {homeResetState, homeAction} from './HomeScreenAction'

const mapStateToProps = state => ({
  homeReducer: state.homeReducer,
})

const mapDispatchToProps = dispatch => ({
  homeAction: (outletId, accessToken) =>
    dispatch(homeAction(outletId, accessToken)),
  homeResetState: () => dispatch(homeResetState()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
