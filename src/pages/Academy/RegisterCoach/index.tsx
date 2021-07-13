import Header from "../../../components/Header";
import { RegisterCoachStudents } from "../../../components/RegisterCoachStudents";
import { ContainerRegister } from "./styles";
import img from "../../../assets/images/image-register-coach.svg";
import { useWindowWidth } from "../../../providers/WindowWidth";
export const RegisterCoach = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <>
      <Header />
      <ContainerRegister>
        {windowWidth >= 768 && <img src={img} alt="" />}
        <RegisterCoachStudents user="coach"></RegisterCoachStudents>
      </ContainerRegister>
    </>
  );
};
