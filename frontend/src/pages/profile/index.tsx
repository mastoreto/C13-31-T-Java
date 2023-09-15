'use client';
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import LayoutProfile from '@components/layout/layout.profile';
import Layout from '@components/layout';
import { Password, Results, Profile } from '@components/UserComponents';
import { useProfileSlice } from '@stores/profiles';
import useApi from '@hooks/useApi';
import { useEffect, useCallback, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const profile: NextPage = () => {
    const [call, setCall] = useState(false);
    const isProfile = useProfileSlice((state) => state.isProfile);
    const isPassword = useProfileSlice((state) => state.isPassword);
    const isRequests = useProfileSlice((state) => state.isRequests);
    const isResults = useProfileSlice((state) => state.isResults);

    const { getData, data: usuario, isLoading } = useApi('/client/details');

    const getUsuario = useCallback(async () => {
        toast.loading('Cargando perfil');
        try {
            setCall(true);
            await getData();
        } catch (error) {
            console.error(error);
        } finally {
            toast.dismiss();
            setCall(false);
        }
    }, [call]);

    useEffect(() => {
        if (usuario === undefined) {
            getUsuario();
        } else {
            toast.success('Perfil cargado correctamente');
        }
    }, [getUsuario]);

    return (
        <Layout
            title={`${
                isProfile ? 'Perfil' : isPassword ? 'Password' : isRequests ? 'Requests' : isResults && 'Resultados'
            } `}
        >
            <div className="mx-auto my-[5rem]">
                <LayoutProfile>
                    <Toaster />
                    {!isLoading && <Profile user={usuario} />}
                    {isPassword && <Password />}
                    {isRequests && <Results />}
                </LayoutProfile>
            </div>
        </Layout>
    );
};

export default profile;
