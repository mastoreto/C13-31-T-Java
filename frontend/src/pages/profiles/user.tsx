'use client';
import React from 'react';
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
        <>
            <Layout>
                <h4 className="font-bold text-large min-w-full text-xl my-4">
                    Usuario: {user.firstname} {user.lastname}
                </h4>
                <p className="text-tiny uppercase font-bold min-w-full text-xl my-4 ">Lima</p>
                <div className="flex  min-w-full text-xl my-4 ">
                    <p>Valoraciones: </p> <StarsUser />
                </div>
                <div className="min-w-full text-xl my-4">Nombre:{user.firstname} </div>
                <div className="min-w-full text-xl my-4">Apellido: {user.lastname}</div>
                <div className="min-w-full text-xl my-4">Nacionalidad: Polaca</div>
                <div className="min-w-full text-xl my-4">Correo: {user.email}</div>
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const users = await fetch('https://users-crud-jgaspar.onrender.com/api/v1/users');
    const usuario = await users.json();

    return {
        props: {
            usuario,
        },
    };
};

export default user;
