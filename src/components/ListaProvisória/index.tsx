import { useState } from "react";
import {
  CloseIconStyled,
  Container,
  ModalContainer,
  SettingsIconStyled,
} from "./style";
import SimpleModal from "../Modal";

interface objectsArrayType {
  name: string;
  id: number;
  email: string;
  userId?: number;
  coachId?: number;
}

interface ListProps {
  objectsArray: Array<objectsArrayType>;
}

export default function ListaProvisória({ objectsArray }: ListProps) {
  const [open, setOpen] = useState(false);

  const [person, setPerson] = useState({
    name: "",
    id: 0,
    email: "",
    photo: "",
    coachId: 0,
  });

  const { name, id, email, photo, coachId } = person;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (option: any) => {
    setPerson(option);
    setOpen(true);
  };

  const deleteUser = (id: number) => {
    console.log(`deletar o usuário ${id}`);
    /* 
      apiMyGym.delete("coaches", id, {
      headers: {
        Authorization: `Bearer ${academyAuthInfo.token}`,
      },
    });
    */
  };

  const deleteCoach = (id: number) => {
    console.log(`deletar coach ${id} dos dois luagres`);
    /* 
      apiMyGym.delete("coaches", id, {
      headers: {
        Authorization: `Bearer ${academyAuthInfo.token}`,
      },
    }).then(apiMyGym.delete(id, {
      headers: {
        Authorization: `Bearer ${academyAuthInfo.token}`,
      })
    */
  };

  const noPhoto =
    "https://i.pinimg.com/originals/fd/0c/55/fd0c559856ca991e9e28937dc802f0b0.png";

  return (
    <Container>
      {objectsArray?.map((option, index) => (
        <div key={index}>
          <li onClick={() => handleOpen(option)}>{option.name}</li>
          <SettingsIconStyled onClick={() => handleOpen(option)} />
        </div>
      ))}
      <SimpleModal open={open} handleClose={handleClose}>
        <ModalContainer>
          <header>
            <span>{name}</span>
            <CloseIconStyled onClick={handleClose} />
          </header>
          <div className="body">
            {photo ? (
              <img src={photo} alt={`Foto de ${name}`} />
            ) : (
              <img src={noPhoto} alt={"sem foto de usuário"} />
            )}
            <span>Nome: {name}</span>
            <span>Email: {email}</span>
            <button
              onClick={coachId ? () => deleteCoach(id) : () => deleteUser(id)}
            >
              Deletar
            </button>
          </div>
        </ModalContainer>
      </SimpleModal>
    </Container>
  );
}

/* 
pegar as listas do academy resume

coaches precisam sem deletados primeiro de coaches e depois de geral

alunos só sao deletados de alunos
*/
