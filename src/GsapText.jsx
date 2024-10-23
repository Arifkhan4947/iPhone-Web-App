import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const GsapText = () => {
// TODO: Implement gsap text animation 
useGSAP(()=> {
    gsap.to('#text', {
        ease: 'power1.inOut',
        opacity: 1,
        y: 0,
    })
    gsap.fromTo('.para', {
        opacity: 0,
        y: 20
    },{
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1
    })
}, []);


  return (
    <div>
        <h1 id='text' className='text-3xl font-serif text-slate-500 opacity-0 translate-y-10'>GsapText</h1>


        <p className='para mt-5 text-gray-600'>
            We can use method like
            <code>gsap.to()</code>,{" "}
            <code>gsap.from()</code>,
            <code>gsap.fromTo()</code> and{" "}
            <code>gsap.timeline()</code> to
            animate text.
        </p>
        <p className='para mt-5 text-gray-600'>
            Using these methods we can achieve various text animations and <br/>effects like fade in , fade out, slide in, slide out, many more.
        </p>
        <p className='para mt-5 text-gray-600'>
            For more advanced text animations and effects, you can explore <br/>the GSAP TextPlugin or other third-party libraries that specialize in the text animations.
        </p>
        <p className='para mt-5 text-gray-600'>Read more about the <span className='text-blue-500'>TextPlugin</span> plugin.</p>
    </div>
  )
}

export default GsapText