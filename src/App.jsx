import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import GsapStagger from './GsapStagger';
import GsapScrollTrigger from './GsapScrollTrigger';
import GsapText from './GsapText';

const App = () => {

  // ------------------- TODO: Implement the gsap.to() method -------------------

  // useGSAP(() => {
  //   gsap.to('#blue-box', {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 2,
  //     ease: 'power1.inOut'
  //   })
  // }, []);  


  // ------------------ TODO: Implement the gsap timeline --------------------
  const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo:true
  });

  useGSAP(()=>{

    // here is From 
    timeline.to('#yellow-box', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut' 
    })

    // here is  Middle
    timeline.to('#yellow-box', {
      x: 250,
      scale: 2,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut'
    })


    // here is To
    timeline.to('#yellow-box', {
      x: 500, 
      scale: 1,
      rotation: 360, 
      borderRadius: '8px',
      duration: 2,
      ease: 'back.inOut'
    })
  },[]);


  return (
    <>

      <div className='mt-20 space-y-10'>
        <button onClick={() => {
          if(timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }} className='bg-slate-300 rounded-lg px-6 py-2 text-lg cursor-pointer ml-6'>Play/Pause</button>

        <div id='yellow-box' className=' mt-[280px] h-[100px] w-[100px] bg-yellow-500 ml-[500px] rounded-lg'>
          
        </div>
      </div> 
      <GsapStagger/>
      <GsapScrollTrigger/>
      <GsapText/>
    </>
  )
}

export default App