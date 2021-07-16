import Login from "./Login";
import { ContainerRegister, Container } from "./styles";
import img from "../../../assets/images/undraw_personal_trainer.svg";

import { useWindowWidth } from "../../../providers/WindowWidth";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export const LoginUser = () => {
  const { windowWidth } = useWindowWidth();

  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ContainerRegister>
          <div className="btBack" onClick={() => handleBack()}></div>
          {windowWidth >= 768 && <img src={img} alt="" />}
          <Login />
        </ContainerRegister>
      </motion.div>
    </Container>
  );
};

export default LoginUser;
