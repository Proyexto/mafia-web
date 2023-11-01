import { FormEvent } from "react";
import Link from "next/link";
import { RegisterForm } from "@/components";
import axios from "axios";
  
const getImages = async () =>{
  const response = await axios.get("http://localhost:3000/api/images").then(res =>{
    return res.data;
  }).catch((err) => {
    console.log(err)
  });
  return response;
}

export default async function SignUp() {
  const images = await getImages();

  return (
    <section>
      <RegisterForm images={images}/>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/auth/signin">Ingresar</Link>
      </nav>
    </section>
  );
}
