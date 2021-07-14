import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import SchoolIcon from "@material-ui/icons/School";
import LockIcon from "@material-ui/icons/Lock";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField, MenuItem } from "@material-ui/core";
import { ContainerForm } from "./styles";
import GreenButton from "../GreenButton";
import Input from "../Input";

import { ChangeEvent, useState } from "react";
import { useAcademy } from "../../providers/Academy";
import { apiMyGym } from "../../services/api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { ToastRegister } from "../Toasts/Register";
import "react-toastify/dist/ReactToastify.css";
import { useUserProvider } from "../../providers/User";

interface Decoded {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface Data {
  name: string;
  email: string;
  coachId?: number;
  cref?: string;
  password: string;
  passwordConfirm: string;
}

interface CoachMapProps {
  name: string;
  email: string;
  cref: string;
  academyId: number;
  userId: string;
  id: number;
}
interface RegisterCoachStudentsProps {
  user: string;
}

export const RegisterCoachStudents = ({ user }: RegisterCoachStudentsProps) => {
  const { academyResume, loadInfoAcademy } = useAcademy();
  const [coachValue, setCoachValue] = useState("");
  const { userProvider } = useUserProvider();
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email inválido!"),
    cref: yup
      .string()
      .when(user, (user, schema) =>
        user === "coach"
          ? schema.required("Campo obrigatório!")
          : schema.notRequired()
      ),
    coachId: yup
      .number()
      .when(user, (user, schema) =>
        user === "student"
          ? schema.required("Campo obrigatório!")
          : schema.notRequired()
      ),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 dígitos!"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "As senhas estão diferentes."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(formSchema),
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCoachValue(event.target.value);
  };

  const postStudent = (data: Data, id: string) => {
    const { sub } = jwtDecode<Decoded>(userProvider.token);

    const { name, email, coachId } = data;
    const newData = {
      name,
      email,
      coachId,
      academyId: parseInt(sub),
      userId: parseInt(id),
    };

    apiMyGym
      .post("students", newData, {
        headers: {
          Authorization: `Bearer ${userProvider.token}`,
        },
      })
      .then((response) => {
        toast(
          <ToastRegister name={data.name} closeToast={true} toastProps={null}>
            agora é um Aluno da sua Academia!
          </ToastRegister>,
          { className: "registerSuccess" }
        );
        loadInfoAcademy();
      });
  };

  const postCoach = (data: Data, id: string) => {
    const { sub } = jwtDecode<Decoded>(userProvider.token);

    const { name, email, cref } = data;
    const newData = {
      name,
      email,
      cref,
      academyId: parseInt(sub),
      userId: parseInt(id),
    };
    apiMyGym
      .post("coaches", newData, {
        headers: {
          Authorization: `Bearer ${userProvider.token}`,
        },
      })
      .then((response) => {
        toast(
          <ToastRegister name={data.name} closeToast={true} toastProps={null}>
            agora é um Coach na sua Academia!
          </ToastRegister>,
          { className: "registerSuccess" }
        );
        loadInfoAcademy();
      });
  };

  const onSubmit = (data: Data) => {
    const { email, password } = data;
    const newData = { email, password };
    apiMyGym
      .post("register", newData)
      .then((response) => {
        const { sub } = jwtDecode<Decoded>(response.data.accessToken);
        if (user === "coach") {
          postCoach(data, sub);
        } else {
          postStudent(data, sub);
        }
      })
      .catch((error) =>
        toast(
          <ToastRegister name={data.email} closeToast={true} toastProps={null}>
            E-mail já cadastrado. Tente outro.
          </ToastRegister>,
          { className: "registerFail" }
        )
      );
  };

  return (
    <ContainerForm>
      {user === "coach" ? (
        <h1>Registro de Coach</h1>
      ) : (
        <h1>Registro de Aluno</h1>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" {...register("name")}>
          <PersonIcon />
        </Input>
        <p>{errors.name?.message}</p>

        <Input label="E-mail" {...register("email")}>
          <EmailIcon />
        </Input>
        <p>{errors.email?.message}</p>

        {user === "student" ? (
          <>
            <TextField
              variant="outlined"
              label="Coach"
              value={coachValue}
              {...register("coachId")}
              onChange={handleChange}
              id="coach"
              select
            >
              {academyResume?.coaches?.map((coach: CoachMapProps) => (
                <MenuItem key={coach.name} value={coach.id}>
                  {coach.name}
                </MenuItem>
              ))}
            </TextField>
            <p>{errors.coachId?.message}</p>
          </>
        ) : (
          <>
            <Input label="CREF" {...register("cref")}>
              <SchoolIcon />
            </Input>
            <p>{errors.cref?.message}</p>
          </>
        )}

        <Input label="Senha" {...register("password")} type="password">
          <LockIcon />
        </Input>
        <p>{errors.password?.message}</p>

        <Input
          label="Confirmar Senha"
          {...register("passwordConfirm")}
          type="password"
        >
          <LockIcon />
        </Input>
        <p>{errors.passwordConfirm?.message}</p>

        <GreenButton onClick={() => {}}>Confirmar</GreenButton>
      </form>
    </ContainerForm>
  );
};
