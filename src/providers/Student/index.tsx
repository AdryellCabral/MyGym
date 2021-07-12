import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { apiKabit } from "../../services/api";
 
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
  student?: any; 
  setStudent: Dispatch<React.SetStateAction<Student | undefined>>;
  getStudent: (userId: number) => void;
}

const StudentContext = createContext<StudentProviderData>({} as StudentProviderData);

export const StudentProvider = ({children }: StudentProps) => {
  let token = localStorage.getItem("token") || "";
  if (token !== "") {
    token = JSON.parse(token);
  }
  let typeUser = localStorage.getItem("typeUser") || "";
  if (typeUser !== "") {
    typeUser = JSON.parse(typeUser);
  }

  const [student, setStudent] = useState<Student>();

  const getStudent = (userId: number) => {
    apiKabit
        .get(`${typeUser}?userId=${userId}`)
        .then((res) => setStudent(res.data))
  }

  useEffect (() => {
    if (typeUser !== "" && token !== ""){
      const decoded: Decoded = jwt_decode(token);
      getStudent(decoded.sub);
    }
  }, [])

  return (
    <StudentContext.Provider value={{token, student, setStudent, typeUser, getStudent}}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);

