import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import GreenButton from "../../../../components/GreenButton";
import Input from "../../../../components/Input";
import { Lock, MailOutline } from "@material-ui/icons";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import clsx from "clsx";
import { apiMyGym } from "../../../../services/api";
import { useStyles } from "./styles";

interface UserData {
  password: string;
  email: string;
}

const Login = () => {
  const classes = useStyles();
  const [userType, setUserType] = useState("");

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onLogin = (data: UserData) => {
    apiMyGym.post("login", data).then((response) => {
      localStorage.setItem(
        "@tokenMyGym",
        JSON.stringify(response.data.accessToken)
      );
      localStorage.setItem("@typeUser", JSON.stringify(userType));
    });
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUserType(event.target.value as string);
  };

  return (
    <Form onSubmit={handleSubmit(onLogin)}>
      <h1>Login</h1>
      <Input {...register("email")} label="Email">
        <MailOutline />
      </Input>
      <p>{errors.email?.message}</p>
      <Input {...register("password")} label="Senha" type="password">
        <Lock />
      </Input>
      <p>{errors.password?.message}</p>

      <FormControl variant="outlined" className={clsx(classes.textField)}>
        <InputLabel>Plano</InputLabel>
        <Select value={userType} onChange={handleChange} label="Usuário">
          <MenuItem value="">
            <em>Tipo de usuário</em>
          </MenuItem>
          <MenuItem value="academys">Academia</MenuItem>
          <MenuItem value="coaches">Coach</MenuItem>
          <MenuItem value="students">Aluno</MenuItem>
        </Select>
      </FormControl>

      <GreenButton type="submit">Confirmar</GreenButton>
    </Form>
  );
};
export default Login;
