import React from 'react'
// import music from '../../assets/'

const Audio = () => {
  return (
    <audio autoPlay loop>
        <source src='../../assets/audio.mp3' type='audio/mpeg'/>
        Your browser does not support the audio element.
    </audio>
  )
}

export default Audio