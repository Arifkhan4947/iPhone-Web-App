import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const App = () => {

  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 250,
      repeat: -1,
      yoyo: true
    })
  }, []);  

  return (
    <>
      <div id='blue-box' className='h-[160px] w-[160px] bg-blue-500 mx-auto rounded-lg'>
        
      </div>
    </>
  )
}

export default App