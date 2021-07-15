import React, { useEffect } from "react";

import { FaTimes } from "react-icons/fa";
import RegisterButton from "./RegisterButton";
import { Body, ModalHeader, Container, ModalBody } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { apiMyGym } from "../../services/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUserProvider } from "../../providers/User";

interface Props {
  setOpen: () => void;
  nome?: string;
}

const RegisterPhisicalAssessment = ({ nome = "Nome", setOpen }: Props) => {
  const [physicalAssessment, setPhysicalAssessment] = useState<any>([]);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const getPhysicalAssessment = () => {
    apiMyGym
      .get(`students?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) =>
      setPhysicalAssessment(response.data[0].physicalAssessment)
      ).catch(err => console.log(err));
  };
  console.log(physicalAssessment);
  const sendInfo = (data: any) => {
    let newData = {};
    if (Object.keys(physicalAssessment).length > 0) {
      const weight = [...physicalAssessment.weight, data.weight];
      const imc = [...physicalAssessment.imc, data.imc];
      const taxFat = [...physicalAssessment.taxFat, data.taxFat];
      const leanMass = [...physicalAssessment.leanMass, data.leanMass];
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
        getPhysicalAssessment();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhysicalAssessment();
  }, []);

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
            <form onSubmit={handleSubmit(sendInfo)}>
              <input placeholder="Peso" {...register("weight")} />
              <input type="text" placeholder="Altura" {...register("height")} />
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
  );
};

export default RegisterPhisicalAssessment;
