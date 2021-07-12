import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";
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
  token: string;
  typeUser: string;
  decoded: Decoded;
  student?: any; 
  setStudent: Dispatch<React.SetStateAction<Student | undefined>>;
  getStudent: () => void;
}

const StudentContext = createContext<StudentProviderData>({} as StudentProviderData);

export const StudentProvider = ({children }: StudentProps) => {
  let token = localStorage.getItem("token") || "";
  const [decoded, setDecoded] = useState<Decoded>({} as Decoded)

  if (token !== "") {
    token = JSON.parse(token);
    let tokenDecoded: Decoded = jwt_decode(token);
    setDecoded(tokenDecoded)
  }
  let typeUser = localStorage.getItem("typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }
  const [student, setStudent] = useState<Student>();

  const getStudent = () => {
    apiMyGym
        .get(`${typeUser}?userId=${decoded.sub}`)
        .then((res) => setStudent(res.data))
  }

  useEffect (() => {
    if (typeUser !== ""){
      getStudent()
    }
  }, [])

  return (
    <StudentContext.Provider value={{token, student, setStudent, decoded, typeUser, getStudent}}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);

