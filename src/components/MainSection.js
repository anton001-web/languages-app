import React from 'react'
import s from '../styles/_section1.module.scss'
import {motion} from "framer-motion";

const anim = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    hidden: {
        x: -200,
        opacity: 0
    },
}

const imgAnim = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    hidden: {
        x: 200,
        opacity: 0
    },
}

const MainSection = () => {
    return (
        <motion.section
            className={s.section}
            initial='hidden'
            whileInView='visible'
        >
            <div className={s.section_content}>
                <div className={s.section_info}>
                    <motion.h1
                        variants={anim}
                        className={s.section_title}

                    >Learn  Any Foreign  Language</motion.h1>
                    <motion.p className={s.section_text} variants={anim}>
                        With our teachers who write a program for <br/>
                        each student, you will be able to make your <br/>
                        first sketch after the first lesson. <br/>
                    </motion.p>
                    <motion.button className={s.section_button} variants={anim}>
                        Get Started
                    </motion.button>
                </div>
                <motion.div className={s.section_img} variants={imgAnim}>
                    <img src="./assets/images/header_img.png" className={s.sectionImg__content}/>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default MainSection