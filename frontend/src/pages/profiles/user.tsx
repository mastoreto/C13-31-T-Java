'use client';
import React from 'react';
import Link from 'next/link';
import { Button, Card, CardHeader, CardBody, Image, Divider } from '@nextui-org/react';
import Layout from '@components/layout';
const user = () => {
    return (
        <Layout title="Perfil">
            <div className="flex items-center space-x-4 text-small mx-auto">
                <Card
                    className="py-4 w-1/5 
                    min-h-screen 
                    "
                >
                    <CardBody className="overflow-visible py-2">
                        <Image
                            isZoomed
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="/images/foto.png"
                            width="w1/5"
                        />
                    </CardBody>
                    <Link
                        href="./user"
                        className=" py-4 text-xl text-center bg-slate-200 my-0.5 rounded transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300"
                    >
                        Perfil
                    </Link>
                    <Link
                        href="./contrasena"
                        className="py-4 text-xl text-center bg-slate-200 my-0.5 rounded transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300"
                    >
                        Contrasena
                    </Link>
                    <Link
                        href="./solicitudes"
                        className="py-4 text-xl text-center bg-slate-200 my-0.5 rounded transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300"
                    >
                        Solicitudes
                    </Link>
                    <Link
                        href="./resultados"
                        className="py-4 text-xl text-center bg-slate-200 my-0.5 rounded transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 mb-24"
                    >
                        Resultados
                    </Link>
                </Card>
                <Divider orientation="vertical" />
                <Card className=" w-4/5 min-h-screen ">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col my-36 ml-10">
                        <div className="flex flex-wrap gap-4 items-center min-w-full text-xl">
                            <Button color="primary" variant="flat">
                                Editar Perfil
                            </Button>
                        </div>
                        <h4 className="font-bold text-large min-w-full text-xl my-4">Usuario: Nicole Chernova</h4>
                        <p className="text-tiny uppercase font-bold min-w-full text-xl my-4 ">Lima</p>
                        <div className="flex items-center min-w-full text-xl my-4">
                            <div>Calificación de Cliente:</div>
                            <br></br>
                            <svg
                                className="w-4 h-4 text-yellow-300 mr-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-300 mr-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-300 mr-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-300 mr-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <div className="min-w-full text-xl my-4">Nombre: Nicole</div>
                        <div className="min-w-full text-xl my-4">Apellido: Nicole</div>
                        <div className="min-w-full text-xl my-4">Nacionalidad: Polaca</div>
                        <div className="min-w-full text-xl my-4">Correo: nicole@chernova.com</div>
                    </CardHeader>
                </Card>
            </div>
        </Layout>
    );
};

export default user;
