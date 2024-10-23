import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {
    const scrollRef = useRef(); 

    // ------------------ TODO: Implement the gsap scroll trigger --------------------
    useGSAP(()=>{
        const boxes = gsap.utils.toArray(scrollRef.current.children); 
        boxes.forEach((box) => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: '100%',
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 10%',
                    scrub: true,
                },
                ease: 'power1.inOut'
            })
        })
    }, {scope: scrollRef});

  return (
    <div className='mt-[400px]'>
        <h1 className='text-xl font-bold text-gray-500'>GsapScrollTrigger</h1>

        <div className='flex flex-col w-1/2 ml-6'>
            <p className='mt-5 text-gray-500'>
                Gsap Scroll Trigger is a plugin that allows you to create animations that you are triggered by the scroll position of the page.
            </p>

            <p className='mt-5 text-gray-500'>
                With ScrollTrigger, you can define various actions to be triggered at specific scroll points, such as starting or ending an animation, scrubbing through animations as the user scrolls, pinning elements to the screen, and more. 
            </p>
            <p className='text-2xl font-bold text-gray-800'>Scroll down to see the animation</p>
            <div className='text-5xl text-blue-500 ml-4 my-5 cursor-pointer transition-transform duration-200 hover:translate-y-2'>&#x2193;</div>
        </div>

        <div className='mt-20 w-full h-screen' ref={scrollRef}>
            <div id='scroll-pink'
            className='scroll-box w-20 h-20 rounded-lg bg-pink-500'
            />
            <div id='scroll-orange'
            className='scroll-box w-20 h-20 rounded-lg bg-orange-500'
            />
        </div>

    </div>
  )
}

export default GsapScrollTrigger