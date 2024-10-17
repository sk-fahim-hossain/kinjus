import { useEffect } from "react"
import gsap, { Expo } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useGsapUnveil = (item, delay = 0, trig) => {
    useEffect(() => {
        const el = item.current

        gsap.fromTo(el,
            {
                height: '100%',

            }
            , {
                height: 0,
                duration: 1.5,
                ease: Expo.easeInOut,
                delay: delay,
                scrollTrigger: {
                    trigger: trig.current,
                    toggleActions: 'play reverse play reverse'
                }
            }
        )
    }, [])
}

export const useGsapDownStagger = (arr, delay = 0) => {

    useEffect(() => {
        const el = arr.map(item => item.current)

        gsap.fromTo(el,
            {
                y: '-100%',
                opacity: 0,

            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: Expo.easeInOut,
                delay: delay
            }
        )
    }, [])

}

export const useGsapPhotoDropping = (arr) => {
    useEffect(() => {
        const el = arr.map((item) => item.current)

        gsap.fromTo(el,
            {
                y: '-100vh',
                scale: 0,
            },
            {
                y: 0,
                scale: 1,
                duration: 2,
                stagger: 0.2,
                delay: 1.8,
                ease: Expo.easeInOut
            }
        )

    }, [])
}

export const useGsapPhotoLevitate = (arr, trig) => {
    useEffect(() => {
        const el = arr.map((item) => item.current)
        gsap.fromTo(el,
            {
                y: 0,
            },
            {
                y: '-50%',
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    scrub: 1
                }
            }
        )
    }, [])
}

export const useGsapFeatureLeftShutterUnveil = (item, triq) => {
    useEffect(() => {
        const el = item.current

        gsap.fromTo(el,
            {
                height: '100%'
            },
            {
                height: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: triq.current,
                    start: 'top center',
                    toggleActions: 'play reverse play reverse'
                },
                ease: Expo.easeInOut,
            }
        )
    }, [])
}

export const useGsapFeatureRightShutterUnveil = (item, triq) => {
    useEffect(() => {
        const el = item.current

        gsap.fromTo(el,
            {
                width: '100%'
            },
            {
                width: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: triq.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play reverse play reverse'
                },
                ease: Expo.easeInOut,
            }
        )
    }, [])
}

export const useGsapGalleryImage = (item) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(el,
            {
                x: 0,
                width: 0,
            },
            {
                x: "20%",
                width: "100%",
                duration: 1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: el,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                }
            }
        )
    }, [])
}

export const useGsapGalleryTitle = (item, trig) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(el,
            {
                x: "30%",
            },
            {
                x: 0,
                duration: 1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    start: "top center",
                    end: "bottom top",
                    toggleActions: "play reverse play reverse",
                }
            }
        )
    }, [])
}

export const useGsapCategory = (item, trig) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(el,
            {
                x: "30%",
            },
            {
                x: 0,
                duration: 1.1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    start: "top center",
                    end: "bottom top",
                    toggleActions: "play reverse play reverse",
                }
            }
        )
    }, [])
}

export const useGsapFooterHeadlineDown = (item, trig) => {
    useEffect(() => {
        const el = item.current
        gsap.fromTo(el,
            {
                y: "-100%",
            },
            {
                y: 0,
                duration: 1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    toggleActions: 'play'
                }
            }
        )
    }, [])
}

export const useGsapNotFoundLeftText = (item) =>{
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(el,
            {
                x: "-100%",
            },
            {
                x: 0,
                ease:Expo.easeInOut,
                duration: 1.2
            }
        )
    },[])
}
export const useGsapNotFoundRightText = (item) =>{
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(el,
            {
                x: "300%",
            },
            {
                x: 0,
                ease:Expo.easeInOut,
                duration: 1.2
            }
        )
    },[])
}

export const useGsapMobileMenu = (item) =>{
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(el,
            {
            y: "-100%",
            },
            {
                y: 0,
                ease:Expo.easeInOut,
                duration: 1.2
            }
        )
    },[])
}