import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import GreenButton from "../GreenButton";
import Input from "../Input";
import { AccountCircle } from "@material-ui/icons";

interface UserData {
  username: string;
//   password: string;
//   nome: string;
//   email: string;
//   planoMensal: string;
}

const Register = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    // password: yup
    //   .string()
    //   .min(6, "Mínimo de 6 dígitos")
    //   .required("Campo obrigatório"),
    // nome: yup.string().required("Campo obrigatório"),
    // email: yup.string().email("Email inválido").required("Campo obrigatório"),
    // planoMensal: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onRegister = (data: UserData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <Input {...register("username")} label="username">
      <AccountCircle />
      </Input>

      <button type="submit">Enviar</button>
    </form>
  );
};
export default Register;
