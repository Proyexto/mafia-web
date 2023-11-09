"use client";
import axios from "axios";
import { FormEvent, useState } from "react";

export const SignInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post("/api/auth/signin", form).then((response) => {
      console.log(response.data)
      alert("ingreso")
    }).catch((error) => {
      if(error.response.status === 401){
        alert("Usuario o contraseña incorrectos");
      }
      else{
        alert("Error desconocido");
      }
    });
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-bg-primary">
        <form className="space-y-6" action="#" onSubmit={onSubmit}>
            <h5 className="text-3xl font-medium text-gray-900 dark:text-white">Ingresar</h5>
            <div>
                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Correo</label>
                <input type="email" name="email" value={form.email} onChange={onChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="example@mail.com" required />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" name="password" value={form.password} onChange={onChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="contraseña" required />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar</button>
            <div className="text-md font-medium text-gray-500 dark:text-gray-300">
                No tienes una cuenta? <a href="/auth/signup" className="text-blue-700 hover:underline dark:text-blue-500">Puedes crearla</a> {' o '} <a href="/auth/forgot" className="text-blue-700 hover:underline dark:text-blue-500">Recuperar cuenta</a> 
            </div>
        </form>
    </div>
  )
}