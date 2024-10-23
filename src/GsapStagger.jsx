import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const GsapStagger = () => {

    // --------------------- TODO: Implement the gsap.stagger() method -------------------

    useGSAP(()=>{
        gsap.to('.stagger-box', {
            y: 250,
            rotation: 360, 
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            // stagger: 0.5
            stagger: {
                amount: 1.5,
                grid: [2, 1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center'
            }
        })
    }, []);


  return (
    <div className='mt-40 ml-6'>
        <div className='flex gap-5'>
            <div className='stagger-box w-20 h-20 bg-indigo-200 rounded-lg'/>
            <div className='stagger-box w-20 h-20 bg-indigo-300 rounded-lg'/>
            <div className='stagger-box w-20 h-20 bg-indigo-400 rounded-lg'/>
            <div className='stagger-box w-20 h-20 bg-indigo-500 rounded-lg'/>
            <div className='stagger-box w-20 h-20 bg-indigo-600 rounded-lg'/>
            <div className='stagger-box w-20 h-20 bg-indigo-700 rounded-lg'/>
        </div>

    </div>
  )
}

export default GsapStagger