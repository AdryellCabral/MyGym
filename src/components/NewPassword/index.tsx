import { Container, GreenButtonStyled } from "./styles";
import { InputStyled } from "./styles";
import LockIcon from "@material-ui/icons/Lock";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function NewPassword() {
  const schema = yup.object().shape({
    password: yup.string().required("Por favor insira sua senha antiga."),
    newPassword: yup
      .string()
      .required("Por favor digite uma nova senha.")
      .min(5, "A nova senha deve ter no mínimo 5 dígitos."),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("newPassword")],
        'As senhas estão diferentes, por favor repita a nova senha no campo "Confirmar senha"'
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmit = (data: any) => {
    console.log(data);
    history.push("/");
    toast.success("Senha alterada com sucesso!");
  };

  const erros = [
    errors.password?.message,
    errors.newPassword?.message,
    errors.confirmPassword?.message,
  ];

  const customId = "custom-id-yes";

  // eslint-disable-next-line array-callback-return
  erros.map((erro) => {
    if (erro) {
      toast.error(erro, {
        toastId: customId,
      });
    }
  });

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
      <div className="aside">
        <InputStyled>
          <LockIcon />
          <input
            type="password"
            placeholder="Nova senha"
            {...register("newPassword")}
          />
        </InputStyled>
        <InputStyled>
          <LockIcon />
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmPassword")}
          />
        </InputStyled>
      </div>
      <GreenButtonStyled type="submit">Alterar</GreenButtonStyled>
    </Container>
  );
}
