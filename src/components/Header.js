import React, {useEffect} from 'react'
import s from '../styles/_header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {burgerToggle} from "../redux/actions";

const Header = () => {
    const dispatch = useDispatch()
    const menuRef = React.createRef()
    const overlayRef = React.createRef()

    const handleBurger = () => {
        dispatch(burgerToggle())
    }

    const {visible} = useSelector((state) => {
        const {burger} = state
        return burger
    })

    const handleToggle = () => {
        dispatch(burgerToggle())
    }

    useEffect(() => {
        if(visible) {
            overlayRef.current.style.visibility = 'visible'
            overlayRef.current.style.opacity = '1'
            menuRef.current.style.left = '0'
        } else {
            overlayRef.current.style.visibility = 'hidden'
            overlayRef.current.style.opacity = '0'
            menuRef.current.style.left = '-120%'
        }
    }, [visible])

    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <h1 className={s.header_title}>Brit<span>lex</span></h1>
                <div className={s.headerList_container} ref={menuRef}>
                    <ul className={s.header_list}>
                        <li className={s.headerList__item}>Home <button className={s.burger_close} onClick={handleToggle}>&times;</button> </li>
                        <li className={s.headerList__item}>Skills</li>
                        <li className={s.headerList__item}>About Us</li>
                        <li className={s.headerList__item}>Pricing</li>
                        <li className={s.headerList__item}>Contacts</li>
                    </ul>
                </div>
                <button className={s.header_btn}>
                    Let`s Talk
                </button>
                <button className={s.hidden_desktop} onClick={handleBurger}>
                    <span></span>
                    <span></span>
                    <span data-length='short'></span>
                </button>
                <div className={s.overlay} ref={overlayRef} onClick={handleToggle}></div>
            </div>
        </header>
    )
}

export default Header