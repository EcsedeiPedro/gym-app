'use client'

import { Search, X, LogIn } from 'lucide-react';
import { Nav, NavMenu, NavMenuItem, NavMenuItemLink } from './NavItems';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import WhiteLogo from "../../../public/Logo.svg"
import BlackLogo from "../../../public/BlackLogo.svg"

export default function Header() {
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 500) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header className={`fixed z-[999] duration-500 ${isScrolling ? 'bg-white' : 'bg-header-gradient'} top-0 py-6 w-full`} >
            
            <div className="container flex items-center">
                {isScrolling ? <Image src={BlackLogo} alt="logo" /> : <Image src={WhiteLogo} alt="logo" />}
                
                <Nav>
                    <NavMenu className="flex ml-16 items-center gap-4 mb-0 pl-0 uppercase">
                        <NavMenuItem className=""><NavMenuItemLink href="/sobre" className={`${isScrolling ? 'text-dark-gray' : 'text-white'}`}>Sobre</NavMenuItemLink></NavMenuItem>
                        <NavMenuItem className=""><NavMenuItemLink href="/exercicios" className={`${isScrolling ? 'text-dark-gray' : 'text-white'}`}>Exercícios</NavMenuItemLink></NavMenuItem>
                        <NavMenuItem className=""><NavMenuItemLink href="/meus-treinos" className={`${isScrolling ? 'text-dark-gray' : 'text-white'}`}>Meus Treinos</NavMenuItemLink></NavMenuItem>
                    </NavMenu>
                </Nav>
    
                <div className="flex ml-auto items-center gap-4">
                    <Search color={isScrolling ? '#1b1b1b' : 'white'} width="18" height={18}/>
                    <Link href="/signin"><LogIn color={isScrolling ? '#1b1b1b' : 'white'} width="18" height="18" /></Link>
                    <Link className="py-2 px-4 bg-purple rounded-md text-white font-bold uppercase" href='/signup'>Crie sua conta</Link>
                </div>
            </div>
        </header>
    )
}