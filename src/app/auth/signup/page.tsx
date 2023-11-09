import { FormEvent } from "react";
import { MainLayout, SignUpForm } from "@/components";
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
    <MainLayout className="flex justify-center items-center">
      <SignUpForm images={images}/>
    </MainLayout>
  );
}
