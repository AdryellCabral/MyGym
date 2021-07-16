import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import GreenButton from "../../../../components/GreenButton";
import Input from "../../../../components/Input";
import { Lock, MailOutline } from "@material-ui/icons";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { apiMyGym } from "../../../../services/api";
import { SelectStyled } from "./styles";
import { useUserProvider } from "../../../../providers/User";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastRegister } from "../../../../components/Toasts/Register";
import "react-toastify/dist/ReactToastify.css";

interface UserData {
  password: string;
  email: string;
}

const Login = () => {
  const [userType, setUserType] = useState("");

  const { setUserProvider } = useUserProvider();

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

  const history = useHistory();

  const requiredLogin = (response: any) => {
    localStorage.setItem(
      "@tokenMyGym",
      JSON.stringify(response.data.accessToken)
    );
    localStorage.setItem("@typeUser", JSON.stringify(userType));
    const { sub } = jwtDecode<JwtPayload>(response.data.accessToken);
    localStorage.setItem("@idUser", JSON.stringify(sub));
    setUserProvider({
      typeUser: userType,
      token: response.data.accessToken,
      idUser: sub,
    });
  };

  const onLogin = (data: UserData) => {
    apiMyGym
      .post("login", data)
      .then((response) => {
        requiredLogin(response);
        history.push("/");
      })
      .then((response) =>
        toast(
          <ToastRegister name="" closeToast={true} toastProps={null}>
            Seja bem vindo!
          </ToastRegister>,
          { className: "registerSuccess" }
        )
      )
      .catch(() =>
        toast(
          <ToastRegister name="" closeToast={true} toastProps={null}>
            Login ou Senha inválidos!
          </ToastRegister>,
          { className: "registerFail" }
        )
      );
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

      <FormControl variant="outlined">
        <InputLabel>Tipo de usuário</InputLabel>
        <SelectStyled value={userType} onChange={handleChange} label="Usuário">
          <MenuItem value="">
            <em>Tipo de usuário</em>
          </MenuItem>
          <MenuItem value="academys">Academia</MenuItem>
          <MenuItem value="coaches">Coach</MenuItem>
          <MenuItem value="students">Aluno</MenuItem>
        </SelectStyled>
      </FormControl>

      <GreenButton type="submit">Confirmar</GreenButton>
    </Form>
  );
};
export default Login;
