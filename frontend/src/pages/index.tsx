import { type NextPage } from 'next';
import Image from 'next/image'
import Link from 'next/link';

import { Button } from "@nextui-org/react";

import Construction from '../assets/images/construction.svg';
import Logo from '../assets/images/findatrader.png';



const Home: NextPage = () => {
    return (
        <section className='w-full h-screen'>
            <article className='flex flex-row w-full h-full'>
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <Image src={Logo} alt='logo' width={500} height={500} />
                    <p className='p-10'>
                        En find a trader, hemos creado una plataforma en línea diseñada para permitir que personas de todo el mundo publiquen y promocionen sus servicios de manera
                        eficiente y efectiva. Ya seas un profesional independiente, un artesano creativo o un experto en cualquier campo, nuestra plataforma te brinda la oportunidad
                        de conectarte con potenciales clientes y hacer crecer tu negocio.
                    </p>
                    <Button color="primary" size='md'>Registrate</Button>
                    <p>¿Ya estas registrado? <Link href="/auth/signin" className='text-blue-500 font-bold hover:text-blue-400'>Inicia sesion</Link></p>
                </div>
                <div className='flex justify-center items-center w-full h-full'>
                    <Image src={Construction} alt='construction'width={900} height={30} />
                </div>
            </article>
        </section>
    )
}

export default Home