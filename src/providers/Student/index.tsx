import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import jwt_decode from "jwt-decode";
import { apiMyGym } from "../../services/api";
import { useUserProvider } from "../User";

interface StudentProps {
  children: ReactNode;
}

interface Student {
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

interface StudentProviderData {
  tokenDecoded: Decoded;
  student?: any;
  setStudent: Dispatch<React.SetStateAction<Student | undefined>>;
  getStudent: () => void;
}

const StudentContext = createContext<StudentProviderData>(
  {} as StudentProviderData
);

export const StudentProvider = ({ children }: StudentProps) => {
  const {userProvider} = useUserProvider()
  
  let token = localStorage.getItem("@tokenMyGym") || "";
  let typeUser = localStorage.getItem("@typeUser") || "";
  let idUser = localStorage.getItem("@idUser") || "";


  const [tokenDecoded, setTokenDecoded] = useState<Decoded>({} as Decoded);
  if (token !== "") {
    token = JSON.parse(token);
    typeUser = JSON.parse(typeUser);
    idUser = JSON.parse(idUser);
   
  }
  const [student, setStudent] = useState<Student>();

  const getStudent = () => {
    apiMyGym
      .get(`students?userId=${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .then((response) => setStudent(response.data[0]));
  };

  useEffect(() => {
   
    if (typeUser === "students") {
      const decoded: Decoded = jwt_decode(token);
      setTokenDecoded(decoded);
      getStudent();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProvider]);

  return (
    <StudentContext.Provider
      value={{ student, setStudent, tokenDecoded, getStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
