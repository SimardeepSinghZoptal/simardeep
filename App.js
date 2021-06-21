import 'react-native-gesture-handler'
import * as React from 'react'
import {useState, useEffect} from 'react'
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  LogBox,
  Alert,
} from 'react-native'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './src/redux'
import {Router} from './src/routes'
import {
  ReduxNetworkProvider,
  createNetworkMiddleware,
} from 'react-native-offline'
//import ThemeManager from './src/screens/Themes'
import {persistStore, persistReducer} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
})
// const store = createStore(
//   RootReducer,
//   applyMiddleware(networkMiddleware, thunk),
// )
// // const persistor = persistStore(store)
const store = createStore(RootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/*  <PersistGate loading={null} persistor={persistor}>
          <ReduxNetworkProvider> */}
        <Router />
      </Provider>
      {/* </ReduxNetworkProvider>
        </PersistGate>
    */}
    </>
  )
}
export default App
