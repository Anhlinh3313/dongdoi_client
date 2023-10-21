import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
export const reState = createContext();

function ReState({ children }) {
  // State này chả biết mục đích gì
  const [state, setState] = useState();
  //   State này là màu nền của web
  const [bgMau, setBgMau] = useState();
  // State này là profile người dùng
  const [profile, setProfile] = useState();
  // State này là path name của người dùng
  const [PATH, setPATH] = useState();
  // State này là token của người dùng
  const [TOKEN, setTOKEN] = useState();
  //Độ rộng của trình duyệt
  const [chromeWidth, setChromeWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    let tokenClient = getCookie("__at");
    let pathClient = getCookie("__ap");
    if (tokenClient && pathClient) {
      setTOKEN(tokenClient);
      setPATH(pathClient);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setChromeWidth(window.innerWidth);
    });
  }, [typeof window !== "undefined" && window]);

  return (
    <>
      <reState.Provider
        value={{
          profile,
          state,
          bgMau,
          TOKEN,
          PATH,
          chromeWidth,
          setPATH,
          setBgMau,
          setState,
          setTOKEN,
          setProfile,
        }}
      >
        {children}
      </reState.Provider>
    </>
  );
}

export default ReState;
