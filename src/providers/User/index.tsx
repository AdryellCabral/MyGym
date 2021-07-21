import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserProps {
  children: ReactNode;
}

interface User {
  token: string;
  typeUser: string;
  idUser: any;
}

interface UserProviderData {
  userProvider?: any;
  setUserProvider: Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProps) => {
  const [userProvider, setUserProvider] = useState<User>({} as User);

  useEffect(() => {
    let typeUser = localStorage.getItem("@typeUser") || "";
    let token = localStorage.getItem("@tokenMyGym") || "";
    let idUser = localStorage.getItem("@idUser") || "";
    if (typeUser !== "") {
      typeUser = JSON.parse(typeUser);
      token = JSON.parse(token);
      idUser = JSON.parse(idUser);      
    }
    setUserProvider({
      typeUser,
      token,
      idUser,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ userProvider, setUserProvider }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserProvider = () => useContext(UserContext);
