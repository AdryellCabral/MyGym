import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import GreenButton from "../GreenButton";
import Input from "../Input";
import { Store, Lock, MailOutline } from "@material-ui/icons";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import clsx from "clsx";
import { apiMyGym } from "../../services/api";
import { useStyles, Form } from "./styles";

interface UserData {
  password: string;
  nome: string;
  email: string;
}

const RegisterUser = () => {
  const classes = useStyles();
  const [plano, setPlano] = useState("");

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    nome: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onRegister = (data: UserData) => {
    const newData = { ...data, plano };
    apiMyGym.post("register", newData);
    //retirei o modal, pq não consegui mexer, vou arrumar
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPlano(event.target.value as string);
  };

  return (
    <Form onSubmit={handleSubmit(onRegister)}>
      <h1>Contrate agora!</h1>
      <Input {...register("email")} label="Email">
        <MailOutline />
      </Input>
      <p>{errors.email?.message}</p>
      <Input {...register("password")} label="Senha">
        <Lock />
      </Input>
      <p>{errors.password?.message}</p>
      <Input {...register("passwordConfirm")} label="Confirme a senha">
        <Lock />
      </Input>
      <p>{errors.passwordConfirm?.message}</p>
      <Input {...register("nome")} label="Nome da academia">
        <Store />
      </Input>
      <p>{errors.nome?.message}</p>

      <FormControl variant="outlined" className={clsx(classes.textField)}>
        <InputLabel>Plano</InputLabel>
        <Select value={plano} onChange={handleChange} label="Plano">
          <MenuItem value="">
            <em>Escolha o plano</em>
          </MenuItem>
          <MenuItem value="mensal">Mensal</MenuItem>
          <MenuItem value="semestral">Semestral</MenuItem>
          <MenuItem value="anual">Anual</MenuItem>
        </Select>
      </FormControl>

      <GreenButton type="submit">Confirmar</GreenButton>
    </Form>
  );
};
export default RegisterUser;
