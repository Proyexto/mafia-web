import { getCookie, setCookie } from "cookies-next";

export const setTokenCookie = (token: string) => {
  const maxAge = 60 * 60 * 8;

  setCookie("jwtToken", token, {
    maxAge: maxAge,
    sameSite: true,
    httpOnly: true,
  });
};

export const getTokenFromCookie = () => {
  const cookies = getCookie("jwtToken");
  return cookies || null;
};
