import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
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
import {Scaling, Colors, FontName, Screen} from '../../constants'
import {fontScale} from '../../constants/FontSize'
import Slider from 'react-native-slider'
function ProgressBar () {
  const progress = useTrackPlayerProgress()

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

function ControlButton ({icon, onPress, customStyles}) {
  return (
    <TouchableOpacity
      // style={{
      //   height:
      //     icon === AppImages.playSmallIcon
      //       ? Scaling.HEIGHT_SCALE_30
      //       : icon === AppImages.pauseIcon
      //       ? Scaling.HEIGHT_SCALE_30
      //       : Scaling.HEIGHT_SCALE_15,
      //   width:
      //     icon === AppImages.playSmallIcon
      //       ? Scaling.HEIGHT_SCALE_30
      //       : icon === AppImages.pauseIcon
      //       ? Scaling.HEIGHT_SCALE_30
      //       : Scaling.HEIGHT_SCALE_15,
      //   resizeMode: 'contain',
      //   marginHorizontal: Scaling.HEIGHT_SCALE_5,
      //   backgroundColor: 'red',
      // }}
      onPress={onPress}>
      <Image
        source={icon}
        style={[
          {
            height:
              icon === AppImages.playSmallIcon
                ? Scaling.HEIGHT_SCALE_30
                : icon === AppImages.pauseIcon
                ? Scaling.HEIGHT_SCALE_30
                : Scaling.HEIGHT_SCALE_15,
            width:
              icon === AppImages.playSmallIcon
                ? Scaling.HEIGHT_SCALE_30
                : icon === AppImages.pauseIcon
                ? Scaling.HEIGHT_SCALE_30
                : Scaling.HEIGHT_SCALE_15,
            resizeMode: 'contain',
            marginHorizontal: Scaling.HEIGHT_SCALE_5,
            // backgroundColor: 'red',
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

export default function Player2 (props) {
  const playbackState = usePlaybackState()
  const [trackTitle, setTrackTitle] = useState('')
  const [trackArtwork, setTrackArtwork] = useState()
  const [trackArtist, setTrackArtist] = useState('')
  const [slider, setSlider] = useState(0)
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

  // console.log('-=-=-=-==-duration-=-=-=-=-=-', progress.duration)
  // console.log('-=-=-=-==-position-=-=-=-=-=-', progress.position)

  const {
    style,
    onNext,
    onPrevious,
    onTogglePlayback,
    jumpBackwards,
    jumpForwards,
  } = props

  var middleButtonText = AppImages.playSmallIcon

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
    // <View
    //   style={{
    //     width: '100%',
    //     // elevation: 1,
    //     borderRadius: Scaling.HEIGHT_SCALE_10,
    //     // shadowColor: 'black',
    //     // backgroundColor: 'white',
    //     // alignSelf: 'center',
    //     // // justifyContent: 'center',
    //     flex: 7,
    //   }}>
    <View style={[styles.card, style]}>
      <View style={styles.controls}>
        <ControlButton
          icon={AppImages.backwardDouble}
          onPress={jumpBackwards}
        />
        <ControlButton icon={AppImages.backwardIcon} onPress={onPrevious} />
        <ControlButton icon={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton icon={AppImages.forwardIcon} onPress={onNext} />
        <ControlButton icon={AppImages.forwardDouble} onPress={jumpForwards} />
      </View>

      {/* <ProgressBar /> */}
      <View
        style={{
          // flex: 1,
          width: '100%',
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
          style={
            {
              // flex: 1,
              // backgroundColor: 'red',
            }
          }
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
    //  </View>
  )
}

Player2.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
  jumpBackwards: PropTypes.func.isRequired,
  jumpForwards: PropTypes.func.isRequired,
}

Player2.defaultProps = {
  style: {},
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Scaling.HEIGHT_SCALE_10,
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_WHITE,
    padding: Scaling.HEIGHT_SCALE_10,
    // width: Screen.width / 1.7,
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    alignSelf: 'center',
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey',
  },
  progress: {
    height: Scaling.HEIGHT_SCALE_3,
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
    justifyContent: 'space-between',
    // justifyContent: 'center',
    // backgroundColor: 'red',
    width: '100%',
    paddingTop: 10,
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
