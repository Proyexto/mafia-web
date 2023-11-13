import { SelectImageForm, MainLayout } from "@/components";
import { axiosInstance } from "@/utils/axiosInstance";

const getImages = async () => {
  const images = await axiosInstance.get("/api/images").then(res => {return res.data}).catch((err) => console.log(err))
  return images
}

export default async function Guest() {
  const images = await getImages()
  
  return (
    <MainLayout className="flex justify-center items-center">
    </MainLayout>
  );
}
