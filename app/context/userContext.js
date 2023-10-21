import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [dataUser, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      localStorage.removeItem("userThethao789");
      setUser(null);
      return null;
    }
  };
    
  const AuthVerify = () => {
      if(localStorage.getItem("userThethao789")){
        const dataUser = JSON.parse(localStorage.getItem("userThethao789"));
        if (dataUser) {
          const decodedJwt = parseJwt(dataUser.token);
          if(decodedJwt){
            if (decodedJwt.exp * 1000 < Date.now()) {
              setUser(null);
              localStorage.removeItem("userThethao789");
            }else {
              setUser(dataUser);
            }
          }
          
        }
      }
  };
  AuthVerify()
  },[])

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("userThethao789");
    router.push("/login")
  }
  return (
    <UserContext.Provider value={{user: dataUser?.user, setUser, logOut}}>
      {children}
    </UserContext.Provider>
  );
}