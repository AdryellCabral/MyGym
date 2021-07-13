import Register from "../../components/Register";
import { ContainerRegister, Container } from "./styles";
import img from "../../assets/images/undraw_fitness_tracker.svg"
// import logo from "../../assets/images/Logo_halter2-verde_sembordas.png";
import { useWindowWidth } from "../../providers/WindowWidth";
import { motion } from "framer-motion";

export const RegisterUser = () => {
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

export default RegisterUser
