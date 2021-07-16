import React, { useEffect, useState } from "react";

import { FaTrashAlt, FaTimes } from "react-icons/fa";
import { useExercises } from "../../providers/Exercises";
import RegisterButton from "./RegisterButton";
import {
  Body,
  ModalHeader,
  FormStyled,
  Container,
  ModalBody,
  DivSelect,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { apiMyGym } from "../../services/api";
import { useUserProvider } from "../../providers/User";

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

const grupoMuscular = [
  "Peito",
  "Pernas",
  "Braços",
  "Costas",
  "Abdomen/Core",
  "Ombros",
];

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
  getInfo: () => void
  infoStudent: any
}

const RegisterWorkout = ({ infoStudent, getInfo, setOpen }: Props) => {
  const { id } = useParams<{ id?: any }>();
  const {
    userProvider: { token },
  } = useUserProvider();

  const { exercises } = useExercises();
  const [workouts, setWorkouts] = useState<Array<any>>([]);
  const [filterExercises, setFilterExercises] = useState<Array<any>>([]);
  const [selectValue, setSelectValue] = useState<any>("");
  const [inputValue, setInputValue] = useState<any>("");
  const [group, setGroup] = useState<string>("Peito");

  const handleFilter = (e: any) => {
    const currentGroup = e.target.value;
    setGroup(currentGroup)

    const newList = exercises.filter((value: any) => value.group === currentGroup);
    setFilterExercises(newList);
  };


  const handleChangeSelect = (e: any) => {
    const value = e.target.value;
    setSelectValue(value);
  };

  const handleInput = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const submitWorkout = () => {
    if (inputValue !== "" && selectValue !== "") {
      const newData = {
        workout: {
          exercice: selectValue,
          seriesDuration: inputValue,
        },
      };

      const item = exercises.filter(
        (exercice: any) => exercice.name === selectValue
      );
      item[0].seriesDuration = inputValue;

      setWorkouts([...workouts, item[0]]);

      setInputValue("");
      setSelectValue("");
    }

    
  };

  const handlePost = () => {

    const data = {
        group: group,
        exercices: workouts,
        studentId: parseInt(id),
    }

    apiMyGym
      .post("workouts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getInfo())
      .catch(console.error);
  };

  useEffect(() => {
    const newList = exercises.filter((value: any) => value.group === "Peito");
    setFilterExercises(newList);
  }, []);

  return (
    <Body>
      <div>
        <ModalHeader>
          <Container>
            <h3>{infoStudent.name}</h3>
            <span onClick={setOpen}>
              <FaTimes />
            </span>
          </Container>
        </ModalHeader>
        <ModalBody>
          <Container>
            <h4>Cadastro de treinos</h4>
            <select name="select" id="group" onChange={handleFilter}>
              {grupoMuscular.map((item: string, index: number) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <DivSelect>
              <Container>
                <select id="exercises" onChange={handleChangeSelect}>
                  {filterExercises?.map((item: any, index: number) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Séries/Duração"
                  onChange={handleInput}
                />
                <RegisterButton
                  backgroundColor="var(--dark-purple)"
                  func={submitWorkout}
                >
                  adicionar
                </RegisterButton>
              </Container>
            </DivSelect>
            <h4>Treino</h4>
            <ul>
              {workouts?.map((item, index) => (
                <li key={index}>
                  {item.name}
                  {/* <span>
                    <FaTrashAlt
                      onClick={() => console.log("click na lixeira")}
                    />
                  </span> */}
                </li>
              ))}
            </ul>
            <RegisterButton func={handlePost}>cadastrar</RegisterButton>
          </Container>
        </ModalBody>
      </div>
    </Body>
  );
};

export default RegisterWorkout;
