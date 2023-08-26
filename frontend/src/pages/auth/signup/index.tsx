import { useEffect, useRef } from "react";
import { type NextPage } from "next";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Poppins } from "next/font/google"
import { Input, Checkbox, Button, input } from "@nextui-org/react";
import Alert from "@components/Alert";
const poppins = Poppins({ weight: "400", subsets: ["latin-ext"] });

const SignUp: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      birthDate: '',
      email: '',
      password: '',
      repassword: '',
      phone: '',
      acceptTerms: false
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .max(15, 'El nombre debe tener como maximo 15 caracteres')
        .required('El nombre es requerido'),
      lastName: Yup.string()
        .min(3, 'El apellido debe tener al menos 3 caracteres')
        .max(15, 'El apellido debe tener como maximo 15 caracteres')
        .required('El apellido es requerido'),
      birthDate: Yup.string()
        .required('La fecha de nacimiento es requerida'),
      email: Yup.string()
        .email('El correo electronico no es valido')
        .required('El correo electronico es requerido'),
      password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(20, 'La contraseña debe tener como maximo 20 caracteres')
        .required('La contraseña es requerida'),
      repassword: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(20, 'La contraseña debe tener como maximo 20 caracteres')
        .required('La contraseña es requerida')
        .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir'),
      phone: Yup.string()
        .min(10, 'El telefono debe tener al menos 10 caracteres')
        .max(10, 'El telefono debe tener como maximo 10 caracteres')
        .required('El telefono es requerido'),
      acceptTerms: Yup.boolean()
        .required('Debes aceptar los terminos y condiciones')
        .oneOf([true], 'Debes aceptar los terminos y condiciones')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className='w-full h-screen'>
      <article className='flex justify-center items-center w-full h-full'>
        <div>
          <h1 className={`${poppins.className}`}>Registrarse</h1>
          <form className="flex flex-col justify-between items-center p-5 w-[25rem] h-[40rem]" onSubmit={(e) => formik.handleSubmit(e)}>
            <Input isRequired type='text' name="name" id="name" onChange={(e) => formik.handleChange(e)} onBlur={(e) => formik.handleBlur(e)} label='Nombre' placeholder='Nombre' className={`${poppins.className} max-x-xs`} value={formik.values.name} />
            {formik.errors.name && formik.touched.name && <Alert message={formik.errors.name} />}
            <Input isRequired type='text' name="lastName" id="lastName" onChange={(e) => formik.handleChange(e)} onBlur={(e) => formik.handleBlur(e)} label='Apellido' placeholder='Apellido' className={`${poppins.className} max-x-xs`} value={formik.values.lastName} />
            {formik.errors.lastName && formik.touched.lastName && <Alert message={formik.errors.lastName} />}
            <Input isRequired type='date' name="birthDate" onChange={(e) => formik.handleChange(e)} onBlur={(e) => formik.handleBlur(e)} label='Fecha de nacimiento' placeholder="25/05/1997" className={`${poppins.className} max-x-xs`} value={formik.values.birthDate} />
            {formik.errors.birthDate && formik.touched.birthDate && <Alert message={formik.errors.birthDate} />}
            <Input isRequired type='email' name="email" onChange={(e) => formik.handleChange(e)} onBlur={(e) => formik.handleBlur(e)} label='Email' placeholder='Correo electronico' className={`${poppins.className} max-x-xs`} value={formik.values.email} />
            {formik.errors.email && formik.touched.email && <Alert message={formik.errors.email} />}
            <Input isRequired type='password' name="password" onChange={(e) => formik.handleChange(e)} onBlur={(e) => formik.handleBlur(e)} label='Contraseña' placeholder='Contraseña' className={`${poppins.className} max-x-xs`} value={formik.values.password} />
            {formik.errors.password && formik.touched.password && <Alert message={formik.errors.password} />}
            <Input isRequired type='password' name="repassword" onChange={(e) => formik.handleChange(e)} onBlur={(e) => formik.handleBlur(e)} id="repassword"  label='Repetir contraseña' placeholder='Repetir contraseña' className={`${poppins.className} max-x-xs`} value={formik.values.repassword}/>
            {formik.errors.repassword && formik.touched.repassword && <Alert message={formik.errors.repassword} />}
            <Input isRequired type='number' name="phone" onChange={(e) => formik.handleChange(e)} onBlur={(e) => formik.handleBlur(e)} label='Telefóno/Celular' className={`${poppins.className} max-x-xs`} value={formik.values.phone} />
            {formik.errors.phone && formik.touched.phone && <Alert message={formik.errors.phone} />}
            <Checkbox isRequired name="acceptTerms" onChange={(e) => formik.handleChange(e)} onBlur={(e) => formik.handleBlur(e)} className={`${poppins.className}`} >Acepto los Terminos y Condiciones</Checkbox>
            {formik.errors.acceptTerms && formik.touched.acceptTerms && <Alert message={formik.errors.acceptTerms} />}
            <Button type="submit" color="primary" size='md' className={`${poppins.className}`}>Registrarse</Button>
            <Link href="/auth/signin" className={`${poppins.className} text-xs`}>¿Ya tienes una cuenta? Inicia Sesión</Link>
          </form>
        </div>
      </article>
    </section>
  )
}

export default SignUp;