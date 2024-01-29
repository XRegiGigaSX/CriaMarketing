import React from 'react'
// import {motion} from 'framer-motion'
import {styles} from '../styles.js'
// import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[30em] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />

        </div>
        <div>
          <h4 className={`${styles.heroHeadText}`}>We are <span className="text-[#9153ff]">Cria Marketing.</span></h4>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Welcome to Cria, where innovation meets digital excellence. As a leading digital marketing agency, we specialize in delivering results-driven strategies that elevate your brand, engage your audience, and drive measurable growth. 
          <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 28, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            >

            </motion.div>
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero