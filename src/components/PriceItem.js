import React, {forwardRef} from 'react'
import s from "../styles/_section4.module.scss";
import {motion} from 'framer-motion'

const PriceItem = forwardRef(({item}, ref) => (
    <div className={s.price__item} ref={ref}>
        <div className={s.priceItem_image__block}>
            <img src={item.img} className={s.priceItem__img}/>
        </div>
        <div className={s.priceItem__info}>
            <h1 className={s.priceItem__title}>{item.title}</h1>
            <p className={s.priceItem__text}>
                {item.text}
            </p>
            <button className={s.priceItem__price}>
                <span>&#163; {item.price}</span> per month
            </button>
        </div>
    </div>
))

const MPriceItem = motion(PriceItem)

export default MPriceItem