import React from 'react'
import s from '../styles/_section5.module.scss'
import {motion} from 'framer-motion'

const animText = {
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

const animTitle = {
    visible: {
        opacity: 1,
        visibility: 'visible'
    },
    hidden: {
        opacity: 0,
        visibility: 'hidden'
    }
}

const animImg = {
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

const Section5 = () => {
    return (
        <motion.section
            className={s.section}
            whileInView='visible'
            initial='hidden'
        >
            <div className={s.section__content}>
                <motion.h1 className={s.formTitle__hidden} variants={animTitle}>Contact Us</motion.h1>
                <motion.div className={s.sectionImage__block} variants={animImg}>
                    <img src="./assets/images/form-img.png" alt="" className={s.section__img}/>
                </motion.div>
                <div className={s.sectionForm__block}>
                    <motion.h1 className={s.form__title} variants={animText}>Contact Us</motion.h1>
                    <motion.p className={s.form__text} variants={animText}>
                        Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources
                    </motion.p>
                    <motion.form className={s.form} variants={animText}>
                        <input type="text" placeholder='Enter Your E-mail' className={s.form__input}/>
                        <input type='submit' className={s.form__submit} value='Subscriber' />
                    </motion.form>
                </div>
            </div>
        </motion.section>
    )
}

export default Section5