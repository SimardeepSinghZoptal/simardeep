/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
  getBufferedPosition,
} from 'react-native-track-player'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native'
import AppImages from '../../assets/AppImages'
import {Scaling, Colors, FontName} from '../../constants'
import {fontScale} from '../../constants/FontSize'
import MarqueeText from 'react-native-marquee'
import RangeSlider from 'rn-range-slider'
import Slider from 'react-native-slider'
import TextTicker from 'react-native-text-ticker'

function ProgressBar () {
  // const progress = props.progres
  const progress = useTrackPlayerProgress()
  console.log('-=-=-=-==-1-=-=-=-=-=-', progress.duration.toString)
  console.log('-=-=-=-==-2-=-=-=-=-=-', progress.position)
  console.log(
    '-=-=-=-==-bufferedPosition-=-=-=-=-=-',
    progress.bufferedPosition,
  )

  return (
    <View style={styles.progress}>
      <View
        style={{
          flex: progress.position,
          backgroundColor: Colors.RED,
        }}
      />
      <View
        style={{
          flex:
            progress.duration - progress.position === 0
              ? 1
              : progress.duration - progress.position,
          backgroundColor: Colors.HERITAGE_COLOR,
        }}
      />
    </View>
  )
}
function CustomProgressBar () {
  const progress = useTrackPlayerProgress()
  // let step = progress.position
  // console.log('-=-=-=-==-duration-=-=-=-=-=-', progress.duration)
  // console.log('-=-=-=-==-position-=-=-=-=-=-', progress.position)

  return (
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     width: '90%',
    //     marginVertical: Scaling.HEIGHT_SCALE_10,
    //   }}>
    <RangeSlider
      // style={{
      //   flex: 1,
      // }}
      gravity={'center'}
      min={0}
      max={progress.duration === 0 ? 10 : progress.duration}
      step={10}
      // step={step}
      disableRange
      renderThumb={() => (
        <View
          style={{
            height: Scaling.HEIGHT_SCALE_8,
            width: Scaling.HEIGHT_SCALE_8,
            // flex: 1,
            backgroundColor: Colors.RED_MAROON,
            borderRadius: Scaling.HEIGHT_SCALE_60,
          }}></View>
      )}
      renderRail={() => (
        <View
          style={{
            flex: 1,
            // progress.duration - progress.position === 0
            //   ? 1
            //   : progress.duration - progress.position,
            backgroundColor: Colors.HERITAGE_COLOR,
          }}
        />
      )}
      renderRailSelected={() => (
        <View
          style={{
            flex: 1,
            // flex: progress.position,
            backgroundColor: Colors.RED,
          }}
        />
      )}
      onValueChanged={e => {
        // console.log('-=-=-=-=-onValueChanged=-=-=-=-=-', e)
        // value = e * Scaling.HEIGHT_SCALE_8
        progress.position = e
        // console.log('-=-=-=-=-=NEW position-=-=-=-=-=-', progress.position)
      }}
    />
    // </View>
  )
}
function ControlButton ({icon, onPress, customStyles}) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Image
        source={icon}
        style={[
          {
            height:
              icon === AppImages.playSmallIcon
                ? Scaling.HEIGHT_SCALE_40
                : icon === AppImages.pauseIcon
                ? Scaling.HEIGHT_SCALE_40
                : Scaling.HEIGHT_SCALE_15,
            width:
              icon === AppImages.playSmallIcon
                ? Scaling.HEIGHT_SCALE_40
                : icon === AppImages.pauseIcon
                ? Scaling.HEIGHT_SCALE_40
                : Scaling.HEIGHT_SCALE_15,
            resizeMode: 'contain',
            marginHorizontal:
              icon === AppImages.playSmallIcon
                ? Scaling.HEIGHT_SCALE_30
                : icon === AppImages.pauseIcon
                ? Scaling.HEIGHT_SCALE_30
                : 0,
            // tintColor:
            //   icon === AppImages.playSmallIcon
            //     ? Colors.HERITAGE_COLOR
            //     : icon === AppImages.pauseIcon
            //     ? Colors.HERITAGE_COLOR
            //     : Colors.BUTTON_GRAY,
          },
          customStyles,
        ]}
      />
    </TouchableOpacity>
  )
}

ControlButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default function Player (props) {
  const playbackState = usePlaybackState()
  const [trackTitle, setTrackTitle] = useState('')
  const [trackArtwork, setTrackArtwork] = useState()
  const [trackArtist, setTrackArtist] = useState('')
  const [slider, setSlider] = useState(1)
  useTrackPlayerEvents(['playback-track-changed'], async event => {
    // console.log('-==-=2-=2-=2-=2-=2-=-', event)
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack)
      const {title, artist, artwork} = track || {}
      setTrackTitle(title)
      setTrackArtist(artist)
      setTrackArtwork(artwork)
    }
  })
  const progress = useTrackPlayerProgress()

  const {style, onNext, onPrevious, onTogglePlayback, seekPosition} = props

  var middleButtonText = AppImages.playSmallIcon

  // console.log('-=-=-=-==-duration-=-=-=-=-=-', progress.duration)
  // console.log('-=-=-=-==-position-=-=-=-=-=-', progress.position)
  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = AppImages.pauseIcon
  }
  useEffect(() => {
    setSlider(progress.position)
  }, [progress.position])
  return (
    <View
      style={{
        width: '100%',
        // elevation: 1,
        borderRadius: Scaling.HEIGHT_SCALE_10,
        // shadowColor: 'black',
        backgroundColor: 'white',
        // alignSelf: 'center',
        // // justifyContent: 'center',
        flex: 1,
      }}>
      <View style={[styles.card, style]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: Scaling.HEIGHT_SCALE_10,
            justifyContent: 'center',
            flex: 1,
          }}>
          <View
            style={
              {
                // flex: 0.3,
              }
            }>
            {/* <Image
              source={AppImages.fivethIcon}
              style={{
                resizeMode: 'contain',
                marginRight: Scaling.HEIGHT_SCALE_5,
              }}
            /> */}
          </View>

          {/* <Text
            style={{
              fontSize: fontScale(16),
              fontFamily: FontName.MERRIWEATHER_BLACK,
              color: Colors.HERITAGE_COLOR,
              // flex: 8,
            }}>
            {props.title}
          </Text> */}
          <TextTicker
            style={{
              fontSize: fontScale(16),
              fontFamily: FontName.MERRIWEATHER_BLACK,
              color: Colors.HERITAGE_COLOR,
            }}
            duration={12000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={2000}>
            <Text
              style={{
                // fontSize: fontScale(16),
                // fontFamily: FontName.MERRIWEATHER_BLACK,
                color: Colors.RED,
                // flex: 8,
              }}>
              15TH{' '}
            </Text>
            {props.title}
          </TextTicker>
        </View>

        <Image
          source={AppImages.lineIcon}
          style={{
            width: '90%',
          }}
        />
        <View style={styles.controls}>
          <ControlButton icon={AppImages.backwardIcon} onPress={onPrevious} />
          <ControlButton icon={middleButtonText} onPress={onTogglePlayback} />
          <ControlButton icon={AppImages.forwardIcon} onPress={onNext} />
        </View>
        {/* <ProgressBar /> */}
        {/* <CustomProgressBar /> */}
      </View>

      <View
        style={{
          // flex: 1,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Slider
          value={slider}
          minimumValue={0}
          maximumValue={progress.duration}
          onValueChange={
            // console.log('0-0-0-0-0-0-0--', value), setSlider(value)
            props.seekPosition
          }
          style={{}}
          trackStyle={{
            backgroundColor: Colors.HERITAGE_COLOR_LIGHT,
          }}
          thumbStyle={{
            height: Scaling.HEIGHT_SCALE_10,
            width: Scaling.HEIGHT_SCALE_10,
          }}
        />
      </View>
    </View>
  )
}

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
}

Player.defaultProps = {
  style: {},
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    // elevation: 1,
    borderRadius: Scaling.HEIGHT_SCALE_10,
    // shadowRadius: 2,
    // shadowOpacity: 0.1,
    alignItems: 'center',
    // shadowColor: 'black',
    backgroundColor: 'white',
    // shadowOffset: {width: 0, height: 1},
    alignSelf: 'center',
    // justifyContent: 'center',
    flex: 1,
    // marginTop: Scaling.HEIGHT_SCALE_10,
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey',
  },
  progress: {
    height: Scaling.HEIGHT_SCALE_4,
    width: '90%',
    marginVertical: Scaling.HEIGHT_SCALE_10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: Scaling.HEIGHT_SCALE_5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButtonContainer: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
})
// function CustomProgressBar () {
//   const progress = useTrackPlayerProgress()
//   // let step = progress.position

//   console.log('-=-=-=-==-duration-=-=-=-=-=-', progress.duration)
//   console.log('-=-=-=-==-position-=-=-=-=-=-', progress.position)
//   // console.log(
//   //   '-=-=-=-==-bufferedPosition-=-=-=-=-=-',
//   //   progress.bufferedPosition,
//   // )
//   // console.log(
//   //   '-=-=-=-==-bufferedPosition-=-=-=-=534534-=-',
//   //   getBufferedPosition(),
//   // )
//   return (
//     <View
//       style={{
//         // alignItems: 'center',
//         flexDirection: 'row',
//         // justifyContent: 'center',
//         // height: Scaling.HEIGHT_SCALE_4,
//         width: '90%',
//         marginVertical: Scaling.HEIGHT_SCALE_10,
//         // backgroundColor: 'green',
//         // borderRadius: Scaling.HEIGHT_SCALE_60,
//       }}>
//       <RangeSlider
//         style={{
//           flex: 1,
//         }}
//         gravity={'center'}
//         min={0}
//         max={progress.duration === 0 ? 10 : progress.duration}
//         step={10}
//         // step={step}
//         disableRange
//         renderThumb={() => (
//           <View
//             style={{
//               alignItems: 'center',
//               height: Scaling.HEIGHT_SCALE_8,
//               width: Scaling.HEIGHT_SCALE_8,
//               backgroundColor: Colors.RED_MAROON,
//               justifyContent: 'center',
//               borderRadius: Scaling.HEIGHT_SCALE_60,
//             }}></View>
//         )}
//         renderRail={() => (
//           <View
//             style={{
//               // flex: 1,
//               // progress.duration - progress.position === 0
//               //   ? 1
//               //   : progress.duration - progress.position,
//               backgroundColor: Colors.HERITAGE_COLOR,
//               height: Scaling.HEIGHT_SCALE_8,
//               borderRadius: Scaling.HEIGHT_SCALE_50,
//               // width: progress.duration,
//               // width: widthOfRail,
//               width: '100%',
//             }}
//           />
//           // <View
//           //   style={{
//           //     height: Scaling.HEIGHT_SCALE_8,
//           //     // width: '100%',
//           //     flex:
//           //       progress.duration - progress.position === 0
//           //         ? 1
//           //         : progress.duration - progress.position,
//           //     backgroundColor: Colors.HERITAGE_COLOR_LIGHT,
//           //     borderRadius: Scaling.HEIGHT_SCALE_50,
//           //   }}></View>
//         )}
//         renderRailSelected={() => (
//           // <View
//           //   style={{
//           //     height: Scaling.HEIGHT_SCALE_8,
//           //     width: progress.position,
//           //     // width: value,
//           //     backgroundColor: Colors.RED_MAROON,
//           //     borderRadius: Scaling.HEIGHT_SCALE_50,
//           //   }}></View>

//           // <View
//           //   style={{
//           //     width: progress.position,
//           //     backgroundColor: Colors.RED_MAROON,
//           //     height: Scaling.HEIGHT_SCALE_8,
//           //     borderRadius: Scaling.HEIGHT_SCALE_50,
//           //     // flex: progress.position,
//           //   }}
//           // />
//           // <View
//           //   style={{
//           //     flex: progress.position,
//           //     backgroundColor: Colors.RED,
//           //   }}
//           // />
//           <View
//             style={{
//               flex:
//                 progress.duration - progress.position === 0
//                   ? 1
//                   : progress.duration - progress.position,
//               backgroundColor: Colors.HERITAGE_COLOR,
//             }}
//           />
//         )}
//         onValueChanged={e => {
//           console.log('-=-=-=-=-onValueChanged=-=-=-=-=-', e)
//           // value = e * Scaling.HEIGHT_SCALE_8
//           progress.position = e
//           // setSearchRadius(e);
//           console.log('-=-=-=-=-=NEW position-=-=-=-=-=-', progress.position)
//         }}
//       />
//     </View>
//   )
// }
