import { RegisterCoachStudents } from "../../../components/RegisterCoachStudents";
import { ContainerRegister } from "./styles";
import img from "../../../assets/images/image-register-student.svg";
import { useWindowWidth } from "../../../providers/WindowWidth";
import { motion } from "framer-motion";
export const RegisterStudent = () => {
  const { windowWidth } = useWindowWidth();

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ContainerRegister>
          {windowWidth >= 768 && <img src={img} alt="" />}
          <RegisterCoachStudents user="student"></RegisterCoachStudents>
        </ContainerRegister>
      </motion.div>
  );
};
