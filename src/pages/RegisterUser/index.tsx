import Register from "../../components/Register";
import { ContainerRegister, Container } from "./styles";
import img from "../../assets/images/undraw_fitness_tracke.svg";
import { useWindowWidth } from "../../providers/WindowWidth";
import { motion } from "framer-motion";
export const RegisterCoach = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ContainerRegister>
          {windowWidth >= 768 && <img src={img} alt="" />}
          <Register />
        </ContainerRegister>
      </motion.div>
    </Container>
  );
};
