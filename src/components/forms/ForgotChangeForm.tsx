"use client";
import { useSessionStatus } from "@/hooks/useSessionStatus";
import { axiosInstance } from "@/utils/axiosInstance";
import { FormEvent, useState } from "react";

export const ForgotChangeForm = ({token}: {token: string}) => {
  const {setSessionStatus, setTokenCookie} = useSessionStatus(false);
  const [form, setForm] = useState({
    newPass: "",
    confirmNewPass: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.newPass !== form.confirmNewPass) {
      alert("Las contraseñas no coinciden");
      return;
    }

    axiosInstance.post("/api/auth/forgot/" + token, form).then((res) => {
      alert(res.data.message)

      setTokenCookie(res.data.token);
      setSessionStatus(true);
    }).catch((error) => {
      console.log(error.response.data)
    });
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-bg-primary">
        <form className="space-y-6" action="#" onSubmit={onSubmit}>
            <h5 className="text-3xl font-medium text-gray-900 dark:text-white">Recuperar cuenta</h5>
            <div>
                <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Nueva contraseña</label>
                <input type="password" name="newPass" value={form.newPass} onChange={onChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nueva contraseña" required />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Confirme nueva contraseña</label>
                <input type="password" name="confirmNewPass" value={form.confirmNewPass} onChange={onChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="confime contraseña" required />
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


// <input type="password" name="newPass" value={form.newPass} onChange={onChange} placeholder="Nueva contraseña" />
// <input type="password" name="confirmNewPass" value={form.confirmNewPass} onChange={onChange} placeholder="Confirme nueva contraseña" />