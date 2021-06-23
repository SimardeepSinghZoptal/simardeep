import Snackbar from 'react-native-snackbar'
import Colors from './Colors'

export default function ShowSnack (text) {
  setTimeout(() => {
    Snackbar.show({
      text: text,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: Colors.TRANSPARENT_BLACK,
    })
  }, 200)
}

// export default(
//     Snackbar.show({
//         text: props.dataUpdateDeliveryAddress.response.data.message,
//         duration: Snackbar.LENGTH_SHORT,
//         backgroundColor: Colors.BLACK_RUSSIAN
//     })
// )
