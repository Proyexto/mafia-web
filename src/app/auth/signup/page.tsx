import { FormEvent } from "react";
import { MainLayout, SignUpForm } from "@/components";
import { axiosInstance } from "@/utils/axiosInstance";
  
const getImages = async () =>{
  const response = await axiosInstance.get("/api/images").then(res =>{
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
