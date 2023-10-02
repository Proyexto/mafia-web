import { Pic } from "@/types";

export const getPics = () => {
  return fetch("https://picsum.photos/v2/list")
    .then((res) => res.json() as Promise<Pic[]>)
    .then((res) => {
      return res;
    });
};
