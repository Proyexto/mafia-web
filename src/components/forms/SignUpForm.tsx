"use client";
import { useSessionStatus } from "@/hooks/useSessionStatus";
import { Image } from "@/types";
import axios from "axios";
import { FormEvent, useState } from "react";

type Props = {
  images: Image[];
}

export const SignUpForm = ({images}: Props) => {
  const {setSessionStatus, setTokenCookie} = useSessionStatus(false);
  const [form, setForm] = useState({
    id_img: images[0],
    email: "",
    username: "",
    pass: "",
    confirmPass: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(form.pass === form.confirmPass){
      axios.post("/api/auth/signup", form).then(res =>{
      alert("creado")
      
      setTokenCookie(res.data.token);
      setSessionStatus(true);
    }).catch((error) => {
        if(error.response.status === 409){
          alert("El usuario ya existe");
        }
        else{
          alert("Error desconocido");
        }
      });
    }
    else alert("contraseñas distintas");
  };

  const handleChangeImage = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const index = images.findIndex((image) => image.id === form.id_img.id);
    if(index === images.length - 1){
      setForm({...form, id_img: images[0]});
    }
    else{
      setForm({...form, id_img: images[index + 1]});
    }
  }

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-bg-primary my-20">
        <form className="space-y-6" action="#" onSubmit={onSubmit}>
            <h5 className="text-3xl font-medium text-gray-900 dark:text-white">Crear Cuenta</h5>
            <div>
                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Correo</label>
                <input type="email" name="email" value={form.email} onChange={onChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="example@mail.com" required />
            </div>
            <div>
                <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Usuario</label>
                <input type="text" name="username" value={form.username} onChange={onChange} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="example@mail.com" required />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" name="pass" value={form.pass} onChange={onChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="contraseña" required />
            </div>
            <div>
                <label htmlFor="confirmPass" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Confirme contraseña</label>
                <input type="password" name="confirmPass" value={form.confirmPass} onChange={onChange} id="confirmPass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="confime contraseña" required />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar</button>
            <div className="text-md font-medium text-gray-500 dark:text-gray-300">
                Ya tienes una cuenta? <a href="/auth/signin" className="text-blue-700 hover:underline dark:text-blue-500">Ingresar</a>
            </div>
        </form>
    </div>
  )
}


// <input type="hidden" name="id_img" value={form.id_img.id} onChange={onChange} />

// <input type="text" name="email" value={form.email} onChange={onChange}placeholder="Email" />
// <input type="text" name="username" value={form.username} onChange={onChange}placeholder="Usuario" />
// <input type="password" name="pass" value={form.pass} onChange={onChange}placeholder="Contraseña" />
// <input type="password" name="confirmPass" value={form.confirmPass} onChange={onChange} placeholder="Confirmar contraseña" />