import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
interface PropsLayout {
    children: React.ReactNode;
}

const Layout: React.FC<PropsLayout> = ({ children }) => {
    return (
        <div className="max-w">
            <div className="flex  items-center space-x-4 text-small">
                <Card className="py-4 w-1/5 min-h-screen ">
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
                <Card className="py-10 w-4/5 min-h-screen">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col my-36 ml-10">{children}</CardHeader>
                </Card>
            </div>
        </div>
    );
};

export default Layout;
