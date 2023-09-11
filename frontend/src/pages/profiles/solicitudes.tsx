/* eslint-disable react-hooks/rules-of-hooks*/
import { Input, Button, Textarea, Select, SelectItem } from '@nextui-org/react';
import Layout from '@components/layout/layout.profile';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from '@components/Alert';

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

    const f = useFormik({
        initialValues: {
            zoneDTO: '',
            description: '',
            comments: '',
            imagesDTO: '',
        },
        validationSchema: {
            zoneDTO: Yup.string().required('Este campo es requerido'),
            description: Yup.string().required('Este campo es requerido'),
            comments: Yup.string().required('Este campo es requerido'),
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Layout>
            <Textarea
                isRequired
                label="Description"
                labelPlacement="outside"
                placeholder="Ingrese el detalle de su solicitud que leerán los potenciales prestadores de servicio"
                className="max-w-xs"
                onChange={(e) => f.handleChange(e)}
                onBlur={(e) => f.handleBlur(e)}
                value={f.values.comments}
            />
            {f.errors.comments && f.touched.comments && <Alert message={f.errors.comments} />}

            <Input
                labelPlacement="outside"
                type="file"
                label="Subir Imagen Referencial"
                placeholder="Ingrese "
                onChange={(e) => f.handleChange(e)}
                onBlur={(e) => f.handleBlur(e)}
                value={f.values.imagesDTO}
            />
            {f.errors.imagesDTO && f.touched.imagesDTO && <Alert message={f.errors.imagesDTO} />}

            <Select
                isRequired
                label="Selecciona una Provincia"
                className="max-w-xs"
                onChange={(e) => f.handleChange(e)}
                onBlur={(e) => f.handleBlur(e)}
                value={f.values.zoneDTO}
            >
                {lugares.map((lugar: { nombre: string }) => (
                    <SelectItem key={lugar.nombre} value={lugar.nombre}>
                        {lugar.nombre}
                    </SelectItem>
                ))}
            </Select>
            {f.errors.zoneDTO && f.touched.zoneDTO && <Alert message={f.errors.zoneDTO} />}

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
