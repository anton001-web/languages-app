import React from 'react'
import s from '../styles/_section3.module.scss'
import {motion} from "framer-motion";

const rate = [
    {title: 'Pupils', value: 800},
    {title: 'Teachers', value: 18},
    {title: 'Foreign Languages', value: 6}
]

const anim = {
    hidden: {
        visibility: 'hidden',
        opacity: 0
    },
    visible: {
        visibility: 'visible',
        opacity: 1,
        transition: {
            delay: .4
        }
    }
}

const rateAnim = {
    hidden: {
        visibility: 'hidden',
        opacity: 0
    },
    visible: c => ({
        visibility: 'visible',
        opacity: 1,
        transition: {
            delay: c * 0.2
        }
    })
}

const Section3 = () => {
    return (
        <motion.section
            className={s.section}
            initial='hidden'
            whileInView='visible'
        >
            <div className={s.section__content}>
                <div className={s.section__info}>
                    <motion.h1
                        className={s.section__title}
                        variants={anim}
                    >
                        About Us
                    </motion.h1>
                    <motion.p className={s.section__text} variants={anim}>
                        The model offers a framework for discussing problems related <br/> to the user's experience, as well as possible ways and means of <br/> solving them. Application development begins at the top level <br/> (strategy), where the future software product is described quite <br/> abstractly from the point of view of the expectations of both <br/> users and the customer.
                    </motion.p>
                    <motion.div
                        className={s.section__rate}
                        initial='hidden'
                        whileInView='visible'
                    >
                        {
                            rate && rate.map((item, id) => (
                                <motion.div
                                    className={s.sectionRate__item}
                                    key={id}
                                    variants={rateAnim}
                                    custom={1 + id}
                                >
                                    <h1 className={s.sectionRate__value}>{item.value}</h1>
                                    <h4 className={s.sectionRate__title}>{item.title}</h4>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>
                <motion.div className={s.sectionImage__block} variants={anim}>
                    <img src="./assets/images/business.png" className={s.section__img}/>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Section3