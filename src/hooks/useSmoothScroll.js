import Lenis from 'lenis'
import { useEffect } from 'react';

export const useSmoothScoll = () =>{
    const lenis = new Lenis();
    lenis.on('scroll', (e) => {
        // console.log(e);
      });

      useEffect(() =>{
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
          
          requestAnimationFrame(raf);
      },[])
}