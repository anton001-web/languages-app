import React from 'react'
import s from '../styles/_section2.module.scss'
import MSkillItem from './SkillItem'
import {motion} from "framer-motion";

const skills = [
    {pos: '1', title: 'Speaking', img: './assets/images/Item1.png', content: ' Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners '},
    {pos: '2', title: 'Writing', img: './assets/images/Item2.png', content: 'One of the most important and extensive areas of natural science, the science that studies substances, also their composition'},
    {pos: '3', title: 'Reading', img: './assets/images/Item3.png', content: 'Perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service'},
    {pos: '4', title: 'Listening', img: './assets/images/Item4.png', content: 'Here you can find activities to practise your listening skills. Listening will help you to improve your understanding'},
]

const skillsAnim = {
    hidden: {
        opacity: 0,
        visibility: 'hidden'
    },
    visible: c => ({
        opacity: 1,
        visibility: 'visible',
        transition: {
            delay: c * 0.2
        }
    })
}

const Section2 = () => {
    return (
        <motion.section
            className={s.section}
            initial="hidden"
            whileInView="visible"
        >
            <div className={s.section__content}>
                {
                    skills && skills.map((item, index) => (
                        <MSkillItem
                            item={item}
                            key={index}
                            variants={skillsAnim}
                            custom={index + 1}
                        />
                    ))
                }
            </div>
        </motion.section>
    )
}

export default Section2