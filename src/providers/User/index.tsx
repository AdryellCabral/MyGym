import { createContext, Dispatch, ReactNode, useContext, useState } from "react";
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

interface UserProviderData {
  token: string;
  // decode: {
  //   email?: string;
  //   iat?: number;
  //   exp?: number;
  //   id?: number;
  // }
  user?: User;
  setUser?: Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({children , typeUser}: UserProps) => {
  const token = localStorage.getItem("token") || "";
  // const decoded = jwt_decode(token);

  // const [user, setUser] = useState<User>(() => {
  //   apiKabit
  //     .get(`${typeUser}/userId${decoded.sub}`)
  // })

  return (
    <UserContext.Provider value={{token}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

