import React from 'react';
import { Input, Button } from '@nextui-org/react';
import Layout from '@components/layout/layout.profile';

const solicitudes = () => {
    return (
        <Layout>
            <div className="flex w-64 text-xl my-4 flex-wrap  md:flex-nowrap mb-6 md:mb-0 gap-4 text-start">
                <Input
                    type="pasword"
                    label="Contraseña actual"
                    labelPlacement="outside"
                    placeholder="Ingresa tu Contraseña Actual"
                />
            </div>
            <div className="flex w-64 text-xl my-4 flex-wrap  md:flex-nowrap mb-6 md:mb-0 gap-4 text-start">
                <Input
                    type="pasword"
                    label="Nueva Contraseña"
                    labelPlacement="outside"
                    placeholder="Ingresa tu Nueva Contraseña"
                />
            </div>
            <Button color="primary" className="mt-6">
                Guardar
            </Button>
        </Layout>
    );
};

export default solicitudes;
