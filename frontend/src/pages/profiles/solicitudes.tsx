import { Input, Button, Textarea, Select, SelectItem } from '@nextui-org/react';
import Layout from '@components/layout/layout.profile';

interface solicitudesProps {
    dataLoc: {
        provincias: Array<{
            nombre: string;
        }>;
    };
    dataDep: {
        departamentos: Array<{
            nombre: string;
        }>;
    };
}

const solicitudes = ({ dataLoc, dataDep }: solicitudesProps) => {
    const lugares = dataLoc.provincias;
    const departamentos = dataDep.departamentos;

    console.log(lugares[2]?.nombre);
    console.log(departamentos[2]?.nombre);

    console.log(lugares);
    return (
        <Layout>
            <Input
                isRequired
                labelPlacement="outside"
                type="text"
                label="Título del Post"
                placeholder="Ingrese el titulo de su Solicitud"
            />

            <Textarea
                isRequired
                label="Description"
                labelPlacement="outside"
                placeholder="Ingrese el detalle de su solicitud que leerán los potenciales prestadores de servicio"
                className="max-w-xs"
            />

            <Input labelPlacement="outside" type="file" label="Subir Imagen Referencial" placeholder="Ingrese " />

            <Select isRequired label="Selecciona una Provincia" className="max-w-xs">
                {lugares.map((lugar: { nombre: string }) => (
                    <SelectItem key={lugar.nombre} value={lugar.nombre}>
                        {lugar.nombre}
                    </SelectItem>
                ))}
            </Select>

            <Button color="primary" className="mt-6">
                Guardar
            </Button>
        </Layout>
    );
};
export const getStaticProps = async () => {
    const url_localidades = `https://apis.datos.gob.ar/georef/api/provincias`;
    const url_departamentos = `https://apis.datos.gob.ar/georef/api/departamentos`;

    const [resLocalidades, resDepartamentos] = await Promise.all([fetch(url_localidades), fetch(url_departamentos)]);

    const [dataLoc, dataDep] = await Promise.all([resLocalidades.json(), resDepartamentos.json()]);

    return { props: { dataLoc, dataDep } };
};

export default solicitudes;
