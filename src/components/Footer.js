import React from 'react'
import s from '../styles/_footer.module.scss'


const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__container}>
                <h1 className={s.footer__title}>Brit<span>lex</span></h1>
                <p className={s.footer__text}>Terms and Conditions • Privacy Policy • Cookie Policy</p>
            </div>
        </footer>
    )
}

export default Footer