import React, {forwardRef} from 'react'
import s from "../styles/_section2.module.scss";
import {motion} from "framer-motion";

const SkillItem = forwardRef(({item}, ref) => (
    <div className={s.sectionSkill__item} data-pos={item.pos} ref={ref}>
        <div className={s.ss}>
            <img className={s.item__img} src={item.img}/>
        </div>
        <div className={s.item__content}>
            <h1 className={s.item__title}>{item.title}</h1>
            <p className={s.item__text}>{item.content}</p>
            <button className={s.item__button}>Learn More</button>
        </div>
    </div>
))

const MSkillItem = motion(SkillItem)

export default MSkillItem