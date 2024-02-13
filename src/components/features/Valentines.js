import React, {useState} from 'react'
import '../shared/Valentines.css'
import PhotoBoxes from './PhotoBoxes';
// import Audio from '../features/Audio'
import sound from '../../assets/audio.mp3'

const Valentines = () => {
  
  let play = ()=>{
    new Audio(sound).play();
  }

  let [dropped, setDropped]= useState(false);
  let handleClick = ()=>{
    setDropped(true)
    play();
  }



  return (
    <>
      
      {
        (dropped==true) ? <PhotoBoxes/> : ""
      }
    
    <div className='container'>
      {
        (dropped==false) ? <div className='text'> <h2>Here's your gift, open the box</h2> </div> : <div className="text"><h2 >Happy Valentines Day My Love</h2></div>

      }
    <div className="shootingstar"></div>
    <div className="shootingstar2"></div>
      <div className="heartOpen">
        <div className="letter">

        </div>
      </div>
      <div className={`heartClose ${dropped? 'dropped' : ""}`} onClick={handleClick} >
        
      </div>
    </div>
    
    </>
  )
}

export default Valentines