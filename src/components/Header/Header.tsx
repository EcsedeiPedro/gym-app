'use client'

import { useState, useEffect } from 'react';
import { Search, Menu, X, LogIn } from 'lucide-react';
import styled from 'styled-components';
import Logo from '../Logo';
import { Nav, NavMenu, NavMenuItem, NavMenuItemLink } from './NavItems';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const RegisterButton = styled.a`
        cursor: pointer;
        background-color: ${scrolled ? 'black' : '#8F00FF'};
        color: white;
        padding: 5px 10px;
        font-family: "Bebas Neue", sans-serif;
        font-size: 18px;
        letter-spacing: 2px;
        text-transform: uppercase;
        border-radius: 5px;
    `

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <a href="/">
                    <Logo fill={scrolled ? 'black' : 'white'} />
                </a>
                
                <Nav className="desktop-menu">
                    <NavMenu className="desktop-menu__menu">
                        <NavMenuItem className="desktop-menu__menu--item"><NavMenuItemLink href="/sobre" className="">Sobre</NavMenuItemLink></NavMenuItem>
                        <NavMenuItem className="desktop-menu__menu--item"><NavMenuItemLink href="/exercicios" className="">Exercícios</NavMenuItemLink></NavMenuItem>
                        <NavMenuItem className="desktop-menu__menu--item"><NavMenuItemLink href="/meus-treinos" className="">Meus Treinos</NavMenuItemLink></NavMenuItem>
                    </NavMenu>
                </Nav>

                {isMobileMenuOpen && (
                    <Nav className="mobile-menu">
                        <X className='close' color='white' onClick={closeMobileMenu}/>    

                        <NavMenu className="mobile-menu__menu">
                            <NavMenuItem className="mobile-menu__menu--item"><NavMenuItemLink href="/sobre" className="">Sobre</NavMenuItemLink></NavMenuItem>
                            <NavMenuItem className="mobile-menu__menu--item"><NavMenuItemLink href="/exercicios" className="">Exercícios</NavMenuItemLink></NavMenuItem>
                            <NavMenuItem className="mobile-menu__menu--item"><NavMenuItemLink href="/meus-treinos" className="">Meus Treinos</NavMenuItemLink></NavMenuItem>
                        </NavMenu>
                    </Nav>   
                )}     
    
                <div className="right">
                    <Search width="18" height={18} color={scrolled ? 'black' : 'white'} />
                    <a href="/signin"><LogIn width="18" height={18} color={scrolled ? 'black' : 'white'} /></a>
                    <RegisterButton href='/signup'>Crie sua conta</RegisterButton>
                    <Menu className="menu-mobile-btn" color='white' onClick={openMobileMenu} />
                </div>
            </div>
        </header>
    )
}