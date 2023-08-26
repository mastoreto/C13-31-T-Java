import { type NextPage } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google"
import { Input, Checkbox, Button } from "@nextui-org/react";

const poppins =  Poppins({ weight: "400", subsets: ["latin-ext"] });

const SignIn: NextPage = () => {
  return (
    <section className='w-full h-screen'>
        <article className='flex justify-center items-center w-full h-full'>
            <div>
                <h1 className={`${poppins.className}`}>Inicia sesion</h1>
                <form className="flex flex-col justify-between items-center p-5 w-[25rem] h-[20rem]">
                    <Input isRequired type='email' label='Email' placeholder='Correo electronico' className={`${poppins.className} max-x-xs`} />
                    <Input isRequired type='password' label='Contraseña' placeholder='Contraseña' className={`${poppins.className} max-x-xs`} />
                    <Button color="primary" size='md' className={`${poppins.className}`}>Iniciar sesion</Button>
                    <Checkbox className={`${poppins.className}`}>Recuerdame</Checkbox>
                    <Link href="/auth/signup" className={`${poppins.className} text-xs`}>¿No tienes una cuenta? Registrate</Link>
                    <Link href="/auth/forgot-password" className={`${poppins.className} text-xs`}>¿Olvidaste tu contaseña?</Link>
                </form>
            </div>
        </article>
    </section>
  )
}

export default SignIn