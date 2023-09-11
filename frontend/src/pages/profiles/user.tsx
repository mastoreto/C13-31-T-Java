'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import Layout from '@components/layout/layout.profile';
import StarsUser from '@components/StarsUser';

type Usuario = {
    firstname: string;
    lastname: string;
    email: string;
    password: number;
    birthday: string;
};

interface PropsLayout {
    usuario: Usuario[];
}

const user: React.FC<PropsLayout> = ({ usuario }) => {
    const user = usuario[4];
    console.log(usuario[4]);
    return (
        <Layout>
            <div className="flex flex-wrap gap-4 items-center min-w-full text-xl">
                <Button color="primary" variant="flat">
                    Editar Perfil
                </Button>
            </div>
            <h4 className="font-bold text-large min-w-full text-xl my-4">
                Usuario: {user?.firstname} {user?.lastname}
            </h4>
            <p className="text-tiny uppercase font-bold min-w-full text-xl my-4 ">Lima</p>
            <div className="flex items-center min-w-full text-xl my-4">
                <div>Calificación de Cliente:</div>
                <br></br>
                <StarsUser />
            </div>
            <div className="min-w-full text-xl my-4">Nombre: {user?.firstname}</div>
            <div className="min-w-full text-xl my-4">Apellido: {user?.lastname}</div>
            <div className="min-w-full text-xl my-4">Nacionalidad: Polaca</div>
            <div className="min-w-full text-xl my-4">Correo: {user?.email}</div>
        </Layout>
    );
};
export const getStaticProps = async () => {
    const res = await fetch('https://users-crud-jgaspar.onrender.com/api/v1/users');
    const usuario = await res.json();
    return { props: { usuario } };
};
export default user;
