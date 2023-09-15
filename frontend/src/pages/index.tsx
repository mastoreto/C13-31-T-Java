import { type NextPage } from 'next';
import Image from 'next/image';
import { Montserrat, Poppins } from 'next/font/google';

import { Button, Link } from '@nextui-org/react';
import TaskCard from '@components/TaskCard';

import Layout from '@components/layout';

import Construction from '../assets/images/construction.svg';
import Select from '../assets/images/select.svg';
import Logo from '../assets/images/findatrader.png';

const poppins = Poppins({ weight: '600', subsets: ['latin'] });
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });

const Home: NextPage = () => {
    const date = new Date();
    return (
        <Layout title="Inicio">
            <section className="w-full h-screen bg-white px-5">
                <article className="flex flex-row w-full h-full">
                    <div className="flex flex-col w-full h-full justify-center items-center">
                        <Image src={Logo} alt="logo" width={750} height={750} />
                        <p className={`${montserrat.className} py-10 px-[5rem] text-black`}>
                            En find a trader, hemos creado una plataforma en línea diseñada para permitir que personas
                            de todo el mundo publiquen y promocionen sus servicios de manera eficiente y efectiva. Ya
                            seas un profesional independiente, un artesano creativo o un experto en cualquier campo,
                            nuestra plataforma te brinda la oportunidad de conectarte con potenciales clientes y hacer
                            crecer tu negocio.
                        </p>
                        <Button
                            href="/auth/signup"
                            as={Link}
                            color="primary"
                            showAnchorIcon
                            variant="solid"
                            className={`${poppins.className}`}
                        >
                            Registrarse
                        </Button>
                        <p>
                            <strong className="text-black">¿Ya estas registrado?</strong>
                            <Link
                                href="/auth/signin"
                                className={`${poppins.className} text-black text-blue-500 font-bold hover:text-blue-400`}
                            >
                                Inicia sesion
                            </Link>
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-full h-full">
                        <Image src={Construction} alt="construction" width={900} height={30} />
                    </div>
                </article>
            </section>
            <section className="bg-[#66c8fe] w-full h-[40rem] flex flex-col justify-between px-5 py-16 items-center">
                <h2 className={`${poppins.className} text-left w-full text-white text-5xl`}>
                    Tener servicios a mano nunca fue tan facil...
                </h2>
                <p className={`${montserrat.className} text-left w-full text-white text-2xl`}>
                    Find a Trader te pone en contact con contratistas de tu zona que van a poder dar forma y desarrollar
                    los proyectos que vos siempre quisiste con solo unos clicks
                </p>
                <div className="flex w-full justify-between">
                    <TaskCard descripcion={'Remodelar baño'} image={''} fecha={'10/10/23'} />
                    <TaskCard descripcion={'Construir cobertizo'} image={''} fecha={'10/10/23'} />
                    <TaskCard descripcion={'Pintar fachada'} image={''} fecha={'10/10/23'} />
                    <TaskCard descripcion={'Terminación de obra'} image={''} fecha={'10/10/23'} />
                    <TaskCard descripcion={'Construcción de parrilero'} image={''} fecha={'10/10/23'} />
                    <TaskCard descripcion={'Limpieza de fondo'} image={''} fecha={'10/10/23'} />
                </div>
            </section>
            <section className="bg-white w-full h-[40rem] flex flex-row justify-between px-20 py-20 items-center">
                <div className="flex w-full justify-between">
                    <Image src={Select} alt="select" width={900} height={30} />
                </div>
                <div>
                    <h2 className={`${poppins.className} text-right w-full text-[#66c8fe] text-5xl`}>
                        Vos los elegis y nosotros te ponemos en contacto con ellos
                    </h2>
                    <p className={`${montserrat.className} text-right w-full text-[#66c8fe] text-2xl`}>
                        Una vez que elegiste a tu contratista ideal, te damos todos los datos para tu tranquilidad y
                        confort
                    </p>
                </div>
            </section>

            <footer className={`${poppins.className} w-full bg-[#66c8fe] text-white font-bold text-center`}>
                FindATrader {date.getFullYear()} - Todos los derechos reservados.
            </footer>
        </Layout>
    );
};

export default Home;
