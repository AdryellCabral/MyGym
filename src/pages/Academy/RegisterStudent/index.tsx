import Header from "../../../components/Header";
import { RegisterCoachStudents } from "../../../components/RegisterCoachStudents";
import { ContainerRegister } from "./styles";
import img from "../../../assets/images/image-register-student.svg";
import { useWindowWidth } from "../../../providers/WindowWidth";
export const RegisterStudent = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <>
      <Header />
      <ContainerRegister>
        {windowWidth >= 768 && <img src={img} alt="" />}
        <RegisterCoachStudents user="student"></RegisterCoachStudents>
      </ContainerRegister>
    </>
  );
};
