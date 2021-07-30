import React from "react";

import { FaTimes } from "react-icons/fa";
import RegisterButton from "./RegisterButton";
import { Body, ModalHeader, Container, ModalBody } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { apiMyGym } from "../../services/api";
import { useParams } from "react-router-dom";
import { useUserProvider } from "../../providers/User";
import { toast } from "react-toastify";
import { ToastRegister } from "../Toasts/Register";
import { motion } from "framer-motion";

interface Props {
  setOpen: () => void;
  nome?: string;
  getInfo: () => void;
  infoStudent: any;
}

const RegisterPhisicalAssessment = ({
  nome = "Nome",
  setOpen,
  getInfo,
  infoStudent,
}: Props) => {
  const {
    userProvider: { token },
  } = useUserProvider();

  const schema = yup.object().shape({
    weight: yup.string().required("Campo obrigatório."),
    height: yup.string().notRequired(),
    imc: yup.string().required("Campo obrigatório."),
    taxFat: yup.string().required("Campo obrigatório."),
    leanMass: yup.string().required("Campo obrigatório."),
    metabolicRate: yup.string().notRequired(),
  });

  const { id } = useParams<{ id?: string }>();

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const sendInfo = (data: any) => {
    let newData = {};
    if (infoStudent?.physicalAssessment?.weight.length > 0) {
      const weight = [...infoStudent.physicalAssessment.weight, data.weight];
      const imc = [...infoStudent.physicalAssessment.imc, data.imc];
      const taxFat = [...infoStudent.physicalAssessment.taxFat, data.taxFat];
      const leanMass = [
        ...infoStudent.physicalAssessment.leanMass,
        data.leanMass,
      ];
      newData = {
        physicalAssessment: {
          weight,
          imc,
          taxFat,
          leanMass,
          height: data.height,
          metabolicRate: data.metabolicRate,
        },
      };
    } else {
      const weight = [data.weight];
      const imc = [data.imc];
      const taxFat = [data.taxFat];
      const leanMass = [data.leanMass];
      newData = {
        physicalAssessment: {
          weight,
          imc,
          taxFat,
          leanMass,
          height: data.height,
          metabolicRate: data.metabolicRate,
        },
      };
    }
    apiMyGym
      .patch(`students/${id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast(
          <ToastRegister name={""} closeToast={true} toastProps={null}>
            Avaliação fisica registrado com sucesso!
          </ToastRegister>,
          { className: "registerSuccess" }
        );
        getInfo();
      })
      .catch((err) =>
        toast(
          <ToastRegister name={""} closeToast={true} toastProps={null}>
            Algo deu errado, tente novamente!
          </ToastRegister>,
          { className: "registerFail" }
        )
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
              <form onSubmit={handleSubmit(sendInfo)}>
                <input placeholder="Peso" {...register("weight")} />
                <input
                  type="text"
                  placeholder="Altura"
                  {...register("height")}
                />
                <input type="text" placeholder="IMC" {...register("imc")} />
                <input
                  type="text"
                  placeholder="% de Gordura"
                  {...register("taxFat")}
                />
                <input
                  type="text"
                  placeholder="Massa magra"
                  {...register("leanMass")}
                />
                <input
                  type="text"
                  placeholder="Taxa Metabólica Basal"
                  {...register("metabolicRate")}
                />
                <RegisterButton type="submit">Cadastrar</RegisterButton>
              </form>
            </Container>
          </ModalBody>
        </div>
      </Body>
    </motion.div>
  );
};

export default RegisterPhisicalAssessment;
