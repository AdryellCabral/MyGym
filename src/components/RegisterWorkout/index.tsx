import React from "react";

import { FaTrashAlt, FaTimes } from "react-icons/fa";
import RegisterButton from "./RegisterButton";
import { Body, ModalHeader, Container, ModalBody, DivSelect } from "./styles";

const prototipo = [
  {
    nome: "supino",
  },
  {
    nome: "flexão",
  },
  {
    nome: "barra fixa",
  },
  {
    nome: "levantamento terra",
  },
  {
    nome: "agachamento",
  },
];

const grupoMuscular = ["Peito", "Pernas", "Braços", "Costas", "Abdomen/Core"];

const exercicios = [
  "Supino",
  "Agachamento",
  "Rosca biceps",
  "Remada unilateral",
  "abdominal",
];

const aluno = "Zé do alho";

interface Props {
  setOpen: () => void;
  name?: string;
}

const RegisterWorkout = ({ name = "Nome", setOpen }: Props) => {
  return (
    <Body>
      <div>
        <ModalHeader>
          <Container>
            <h3>{name}</h3>
            <span onClick={setOpen}>
              <FaTimes />
            </span>
          </Container>
        </ModalHeader>
        <ModalBody>
          <Container>
            <h4>Cadastro de treinos</h4>
            <select name="select" id="group">
              {grupoMuscular.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <DivSelect>
              <Container>
                <select name="select" id="exercises">
                  {exercicios.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <input type="text" placeholder="Séries/Duração" />
                <RegisterButton
                  backgroundColor="var(--dark-purple)"
                  onClick={() => console.log("click")}
                >
                  adicionar
                </RegisterButton>
              </Container>
            </DivSelect>
            <h4>Treino</h4>
            <ul>
              {prototipo.map((item, index) => (
                <li key={index}>
                  {item.nome}
                  <span>
                    <FaTrashAlt
                      onClick={() => console.log("click na lixeira")}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <RegisterButton onClick={() => console.log("click")}>
              cadastrar
            </RegisterButton>
          </Container>
        </ModalBody>
      </div>
    </Body>
  );
};

export default RegisterWorkout;
