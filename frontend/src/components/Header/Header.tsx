'use client'

import { getSession, signOut, useSession } from 'next-auth/react';
import { Search, LogIn, LogOut } from 'lucide-react';
import { Nav, NavMenu, NavMenuItem, NavMenuItemLink } from './NavItems';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import WhiteLogo from "../../../public/Logo.svg"
import BlackLogo from "../../../public/BlackLogo.svg"
import { Button } from '@radix-ui/themes';

export default function Header() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [session, setSession] = useState(null);


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

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            setSession(session);
        }

        fetchSession();
    }, [])

    return (
        <header className={`fixed z-[999] duration-500 ${isScrolling ? 'bg-white' : 'bg-dark-gray'} top-0 py-6 w-full`} >
            <div className="container flex items-center">
                <Link href="/">{isScrolling ? <Image src={BlackLogo} alt="logo" /> : <Image src={WhiteLogo} alt="logo" />}</Link>
                
                <Nav>
                    <NavMenu className="flex ml-16 items-center gap-4 mb-0 pl-0 uppercase">
                        <NavMenuItem className=""><NavMenuItemLink href="/sobre" className={`${isScrolling ? 'text-dark-gray' : 'text-white'}`}>Sobre</NavMenuItemLink></NavMenuItem>
                        <NavMenuItem className=""><NavMenuItemLink href="/exercicios" className={`${isScrolling ? 'text-dark-gray' : 'text-white'}`}>Exercícios</NavMenuItemLink></NavMenuItem>
                        <NavMenuItem className=""><NavMenuItemLink href="/meus-treinos" className={`${isScrolling ? 'text-dark-gray' : 'text-white'}`}>Meus Treinos</NavMenuItemLink></NavMenuItem>
                    </NavMenu>
                </Nav>
    
                <div className="flex ml-auto items-center gap-4">
                    <Search color={isScrolling ? '#1b1b1b' : 'white'} width="18" height={18}/>
                    {session ? (
                        <>
                            <Button className="flex gap-2 items-center" onClick={() => signOut()}>
                                <LogOut color={isScrolling ? '#1b1b1b' : 'white'} width="18" height="18" />
                                <span className={`font-bold text-sm ${isScrolling ? 'text-dark-gray' : 'text-white'}`}>Sair da conta</span>
                            </Button>

                            <Link className="text-white font-bold flex items-center gap-2" href='/profile'>
                                <Image className='rounded-full' src={session.user.image} alt={session.user.name} width="30" height="30" />
                                <span className={`font-bold text-sm ${isScrolling ? 'text-dark-gray' : 'text-white'}`}>{session.user.name}</span>
                            </Link>
                        </>
                    ) : (
                       <>
                            <Link className="flex gap-2 items-center" href="/login">
                                <LogIn color={isScrolling ? '#1b1b1b' : 'white'} width="18" height="18" />
                                <span className={`font-bold text-sm ${isScrolling ? 'text-dark-gray' : 'text-white'}`}>Login</span>
                            </Link>

                            <Link className="py-2 px-4 bg-purple rounded-md text-white font-bold uppercase" href='/criar-conta'>Crie sua conta</Link>
                       </> 
                    )}  
                </div>
            </div>
        </header>
    )
}