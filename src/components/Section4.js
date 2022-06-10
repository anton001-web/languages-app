import React from 'react'
import s from '../styles/_section4.module.scss'
import MPriceItem from './PriceItem'
import {motion} from "framer-motion";

const pricing = [
    {img: './assets/images/self.png', title: 'Self-study online course', text: 'Start learning English online in live classes with qualified EC teachers and students from all over the world.', price: '5.99'},
    {img: './assets/images/online.png', title: 'Live online classes', text: 'Interactive group classes with expert teachers. Free 7-day trial', price: '12.99'},
    {img: './assets/images/personal.png', title: 'Personal Tuition', text: 'Online one-to-one English tutoring – enjoy our first session for only $1', price: '20.99'}
]

const priceAnim = {
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

const Section4 = () => {
    return (
        <section className={s.section}>
            <div className={s.section__content}>
                <div className={s.sectionTitle__block}>
                    <h1 className={s.section__title}>Pricing</h1>
                </div>
                <motion.div
                    className={s.price__block}
                    initial="hidden"
                    whileInView="visible"
                >
                    {
                        pricing && pricing.map((item, index) => (
                            <MPriceItem
                                item={item}
                                key={index}
                                variants={priceAnim}
                                custom={index + 1}
                            />
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Section4