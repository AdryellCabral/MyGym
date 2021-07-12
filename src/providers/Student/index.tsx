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
  let token = localStorage.getItem("token") || "";
  const [tokenDecoded, setTokenDecoded] = useState<Decoded>({} as Decoded);
  if (token !== "") {
    token = JSON.parse(token);
    const decoded: Decoded = jwt_decode(token);
    setTokenDecoded(decoded);
  }

  const [student, setStudent] = useState<Student>();

  const getStudent = () => {
    apiMyGym
      .get(`students?userId=${tokenDecoded.sub}`)
      .then((response) => setStudent(response.data));
  };

  useEffect(() => {
    if (token !== "") {
      getStudent();
    }
  }, []);

  return (
    <StudentContext.Provider
      value={{ student, setStudent, tokenDecoded, getStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
