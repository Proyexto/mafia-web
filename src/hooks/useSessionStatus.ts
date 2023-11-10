import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export const useSessionStatus = (isSessionRequired: boolean | null) => {
  const [sessionStatus, setSessionStatus] = useState<boolean | null>();

  useEffect(() => {
    if (sessionStatus === false && isSessionRequired === true) {
      redirect("/");
    } else if (sessionStatus === true && isSessionRequired === false) {
      redirect("/terms");
    }
  }, [sessionStatus, isSessionRequired]);

  const setTokenCookie = (token: string) => {
    const maxAge = 60 * 60 * 8;

    setCookie("jwtToken", token, {
      maxAge: maxAge,
      sameSite: true,
    });
  };

  const getTokenSession = () => {
    const cookies = getCookie("jwtToken");
    return cookies || null;
  };

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/auth/verify/", {
        token: getTokenSession(),
      })
      .then((res) => {
        if (res.status === 200) {
          setSessionStatus(true);
          console.log("session verificada");
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setSessionStatus(false);
        } else console.log(err);
      });
  }, [sessionStatus]);

  return { sessionStatus, setSessionStatus, getTokenSession, setTokenCookie };
};
