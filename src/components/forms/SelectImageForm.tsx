"use client";
import { useSessionStatus } from "@/hooks/useSessionStatus";
import { Image } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { FormEvent, MouseEvent, useState } from "react";

interface Props {
  images: Image[];
}

export const SelectImageForm = ({images}: Props) => {
  const {getTokenSession} = useSessionStatus(true)
  const [selectedImage, setSelectedImage] = useState(images[0])

  const handleBack = (e: MouseEvent<HTMLElement>) => {
    if (images.indexOf(selectedImage) - 1 >= 0) {
      setSelectedImage(images[images.indexOf(selectedImage) - 1])
    }
  }

  const handleNext = (e: MouseEvent<HTMLElement>) => {
    if (images.indexOf(selectedImage) + 1 < images.length) {
      setSelectedImage(images[images.indexOf(selectedImage) + 1])
    }
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    axiosInstance.post("/api/settings/image",
      {
        idImage: data.get("idImage"),
        token: getTokenSession(),
      }
    ).then((response) => {
      if (response.status === 200) {
        alert("imagen cambiada")
      }
    }).catch((error) => {
        console.log(error)
    });
  }

  return (
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-bg-primary">
      <div className="flex justify-around items-center">
        <button className="h-fit mx-5" onClick={handleBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
            <path fill="currentColor" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/>
          </svg>
        </button>
        <img src={selectedImage.URL} className="w-80 h-80 aspect-square object-cover" alt="Profile-Image"/>
        <button className="h-fit mx-5" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
            <path fill="currentColor" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"/>
          </svg>
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="idImage" value={selectedImage.id} />
        <button type="submit" className="w-full mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cambiar Avatar</button>
      </form>
    </div>
  )
}