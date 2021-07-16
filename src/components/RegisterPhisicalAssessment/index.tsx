import React from "react";

import { FaTimes } from "react-icons/fa";
import RegisterButton from "./RegisterButton";
import { Body, ModalHeader, Container, ModalBody } from "./styles";

interface Props {
  setOpen: () => void;
  nome?: string;
}

const RegisterPhisicalAssessment = ({ nome = "Nome", setOpen }: Props) => {
  return (
    <Body>
      <div>
        <ModalHeader>
          <Container>
            <h3>{nome}</h3>
            <span onClick={setOpen}>
              <FaTimes />
            </span>
          </Container>
        </ModalHeader>
        <ModalBody>
          <Container>
            <h4>Cadastro de Avaliação Física</h4>
            <form>
              <input type="text" placeholder="Peso" />
              <input type="text" placeholder="Altura" />
              <input type="text" placeholder="IMC" />
              <input type="text" placeholder="% de Gordura" />
              <input type="text" placeholder="Massa magra" />
              <input type="text" placeholder="Taxa Metabólica Basal" />
            </form>
            <RegisterButton onClick={() => console.log("register")}>
              <span>Cadastrar</span>
            </RegisterButton>
          </Container>
        </ModalBody>
      </div>
    </Body>
  );
};

export default RegisterPhisicalAssessment;
