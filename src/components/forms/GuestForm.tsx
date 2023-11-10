"use client";
import { useSessionStatus } from "@/hooks/useSessionStatus";
import { FormEvent, useState } from "react";

export const GuestForm = () => {
  const [session, setSession, getToken, setToken] = useSessionStatus(true)
  const [form, setForm] = useState({
    name: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-bg-primary">
        <form className="space-y-6" action="#" onSubmit={onSubmit}>
            <h5 className="text-3xl font-medium text-gray-900 dark:text-white">Ingresar como invitado</h5>
            <div>
                <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Ingrese nombre</label>
                <input type="text" name="name" value={form.name} onChange={onChange} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar</button>
            <div className="text-md font-medium text-gray-500 dark:text-gray-300">
                Ya tienes una cuenta? <a href="/auth/signin" className="text-blue-700 hover:underline dark:text-blue-500">Ingresar</a>{' o '} 
                <a href="/auth/signup" className="text-blue-700 hover:underline dark:text-blue-500">Puedes crearla</a>
            </div>
        </form>
    </div>
  )
}