import { Container, GreenButtonStyled } from "./styles";
import { InputStyled } from "./styles";
import LockIcon from "@material-ui/icons/Lock";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function NewPassword() {
  const schema = yup.object().shape({
    password: yup.string().required("Campo obrigatório!"),
    newPassword: yup
      .string()
      .min(5, "No mínimo 5 dígitos")
      .required("Campo obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Senhas diferentes!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <span>Alterar senha</span>
      <InputStyled>
        <LockIcon />
        <input
          type="text"
          placeholder="Senha antiga"
          {...register("password")}
        />
      </InputStyled>
      {errors?.password?.message}
      <div className="aside">
        <InputStyled>
          <LockIcon />
          <input
            type="password"
            placeholder="Nova senha"
            {...register("newPassword")}
          />
        </InputStyled>
        {errors?.password?.message}
        <InputStyled>
          <LockIcon />
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmPassword")}
          />
        </InputStyled>
        {errors.confirmPassword?.message}
      </div>
      <GreenButtonStyled type="submit">Alterar</GreenButtonStyled>
    </Container>
  );
}
