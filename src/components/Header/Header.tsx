import { Search, X, LogIn } from 'lucide-react';
import { Logo } from '../Logo';
import { Nav, NavMenu, NavMenuItem, NavMenuItemLink } from './NavItems';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-dark-gray py-6 w-full" >
            <div className="container flex items-center">
                <Logo/>
                
                <Nav>
                    <NavMenu className="flex ml-16 items-center gap-4 mb-0 pl-0 uppercase">
                        <NavMenuItem className=""><NavMenuItemLink href="/sobre" className="text-white">Sobre</NavMenuItemLink></NavMenuItem>
                        <NavMenuItem className=""><NavMenuItemLink href="/exercicios" className="text-white">Exercícios</NavMenuItemLink></NavMenuItem>
                        <NavMenuItem className=""><NavMenuItemLink href="/meus-treinos" className="text-white">Meus Treinos</NavMenuItemLink></NavMenuItem>
                    </NavMenu>
                </Nav>
    
                <div className="flex ml-auto items-center gap-4">
                    <Search color='white' width="18" height={18}/>
                    <Link href="/signin"><LogIn width="18" height="18" color='white' /></Link>
                    <Link className="py-2 px-4 bg-purple rounded-md text-white font-bold uppercase" href='/signup'>Crie sua conta</Link>
                </div>
            </div>
        </header>
    )
}