import React from 'react';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from '../../../assets/images/FaT100.svg';
import { Poppins } from 'next/font/google';
import User from './User';

const poppins = Poppins({ weight: '400', subsets: ['latin-ext'] });

const Nav: React.FC = () => {

    const login = true;

    return (
        <Navbar>
            <NavbarBrand>
                <Image src={Logo} alt="FindATrader" width={50} height={50} />
                <p className={`${poppins} font-bold text-inherit`}>FindATrader</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Trabajos
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Publicar
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {
                    login ? <User /> : <><NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem><NavbarItem>
                            <Button as={Link} color="primary" href="#" variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem></>
                }
                
            </NavbarContent>
        </Navbar>
    )
}

export default Nav;