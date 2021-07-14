import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import GreenButton from "../../../../components/GreenButton";
import Input from "../../../../components/Input";
import { Store, Lock, MailOutline } from "@material-ui/icons";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@material-ui/core";
import clsx from "clsx";
import { apiMyGym } from "../../../../services/api";
import { useStyles, Form, ModalContent } from "./styles";
import { useHistory } from "react-router-dom";

interface UserData {
  password: string;
  nome: string;
  email: string;
}

const RegisterUser = () => {
  const classes = useStyles();
  const [plano, setPlano] = useState("");
  const [registerOk, setRegisterOk] = useState(false);
  const history = useHistory();

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
    apiMyGym.post("register", newData).then(() => setRegisterOk(true));
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPlano(event.target.value as string);
  };

  const handleClose = () => {};

  const handleClick = () => {
    history.push("/login");
  };

  return (
    <Form onSubmit={handleSubmit(onRegister)}>
      <h1>Contrate agora!</h1>
      <Input {...register("email")} label="Email">
        <MailOutline />
      </Input>
      <p>{errors.email?.message}</p>
      <Input {...register("password")} label="Senha" type="password">
        <Lock />
      </Input>
      <p>{errors.password?.message}</p>
      <Input {...register("passwordConfirm")} label="Confirme a senha" type="password">
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
      <Modal open={registerOk} onClose={handleClose}>
        <ModalContent>
          <h1>OBRIGADO POR ESCOLHER NOSSO PRODUTO!</h1>
          <div className="box">
            <p>Entraremos em contato via email</p>
          </div>
          <GreenButton onClick={handleClick}>Confirmar</GreenButton>
        </ModalContent>
      </Modal>
      {/* <SimpleModal open={registerOk} handleClose={handleClose}>
        <>
          <p>Cadastro realizado com sucesso</p>
          <GreenButton onClick={handleClick}>Confirmar</GreenButton>
        </>
      </SimpleModal> */}
    </Form>
  );
};
export default RegisterUser;
