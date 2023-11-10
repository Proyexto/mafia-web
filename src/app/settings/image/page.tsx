import { SelectImageForm, MainLayout } from "@/components";
import axios from "axios";

const getImages = async () => {
  const images = await axios.get("http://localhost:3000/api/images").then(res => {return res.data}).catch((err) => console.log(err))

  return images
}

export default async function Guest() {
  const images = await getImages()
  
  return (
    <MainLayout className="flex justify-center items-center">
      <SelectImageForm images={images}/>
    </MainLayout>
  );
}
