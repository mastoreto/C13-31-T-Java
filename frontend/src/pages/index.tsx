import { type NextPage } from 'next';
import Image from 'next/image';
import { Montserrat, Poppins } from 'next/font/google';

import { Button, Link } from '@nextui-org/react';

import Layout from '@components/layout';

import Construction from '../assets/images/construction.svg';
import Logo from '../assets/images/findatrader.png';

const popins = Poppins({ weight: '600', subsets: ['latin'] });
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });

const Home: NextPage = () => {
    return (
        <Layout title='Inicio'>
            <section className="w-full h-screen bg-white px-5">
                <article className="flex flex-row w-full h-full">
                    <div className="flex flex-col w-full h-full justify-center items-center">
                        <Image src={Logo} alt="logo" width={750} height={750} />
                        <p className={`${montserrat.className} py-10 px-[5rem]`}>
                            En find a trader, hemos creado una plataforma en línea diseñada para permitir que personas
                            de todo el mundo publiquen y promocionen sus servicios de manera eficiente y efectiva. Ya
                            seas un profesional independiente, un artesano creativo o un experto en cualquier campo,
                            nuestra plataforma te brinda la oportunidad de conectarte con potenciales clientes y hacer
                            crecer tu negocio.
                        </p>
                        <Button href="/auth/signup" as={Link} color="primary" showAnchorIcon variant="solid">
                            Registrarse
                        </Button>
                        <p>
                            ¿Ya estas registrado?{' '}
                            <Link href="/auth/signin" className="text-blue-500 font-bold hover:text-blue-400">
                                Inicia sesion
                            </Link>
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-full h-full">
                        <Image src={Construction} alt="construction" width={900} height={30} />
                    </div>
                </article>
            </section>
            <section className='bg-[#66c8fe] w-full h-[30rem] flex flex-row justify-between p-5 items-center'>
                <div className='text-5xl'>
                    200 Usuarios
                </div>
                <div className='text-5xl'>
                    2500 Trabajos publicados
                </div>
                <div className='text-5xl'>
                    2500 Trabajos validados
                </div>
            </section>
        </Layout>
    );
};

export default Home;
