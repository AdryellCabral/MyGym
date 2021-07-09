import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { apiKabit } from "../../services/api";
 
interface UserProps {
  children: ReactNode;
  typeUser: string;
}

interface User {
  email: string;
  academyId: number;
  coachId: number;
  userId: number;
}

interface Decoded {
  email: string;
  iat: number;
  exp: number;
  sub: number;
}

interface UserProviderData {
  token: string;
  decoded: Decoded;
  user?: User;
  setUser: Dispatch<React.SetStateAction<User | undefined>>;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({children , typeUser}: UserProps) => {
  const token = localStorage.getItem("token") || "";
  const decoded: Decoded  = jwt_decode(token);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    apiKabit
      .get(`${typeUser}?userId=${decoded.sub}`)
      .then((res) => setUser(res.data))
  }, [typeUser])

  return (
    <UserContext.Provider value={{token, user, setUser, decoded}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

