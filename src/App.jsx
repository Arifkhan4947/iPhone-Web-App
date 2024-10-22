import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const App = () => {

  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'power1.inOut'
    })
  }, []);  

  return (
    <>
      <div id='blue-box' className=' mt-[280px] h-[120px] w-[120px] bg-blue-500 mx-auto rounded-lg'>
        
      </div>
    </>
  )
}

export default App