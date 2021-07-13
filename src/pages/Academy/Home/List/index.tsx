import { useState } from "react";
import {
  CloseIconStyled,
  Container,
  ModalContainer,
  SettingsIconStyled,
} from "./style";
import SimpleModal from "../../../../components/Modal";
import { apiMyGym } from "../../../../services/api";
import { useAcademy } from "../../../../providers/Academy";

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

export default function List({ objectsArray }: ListProps) {
  const [open, setOpen] = useState(false);
  const { loadInfoAcademy,academyAuthInfo } = useAcademy();

  console.log(objectsArray);
  const [person, setPerson] = useState({
    name: "",
    id: 0,
    email: "",
    photo: "",
    coachId: 0,
  });

  const { name, id, email, photo } = person;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (option: any) => {
    setPerson(option);
    setOpen(true);
  };

  const deleteUser = (id: number) => {
    console.log(person);
    
      apiMyGym.delete(`coaches/${id}`, {
      headers: {
        Authorization: `Bearer ${academyAuthInfo.token}`,
      },
    }).then(() => {
      loadInfoAcademy("1")
      setOpen(false)
    });
    
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
            <button onClick={() => deleteUser(id)}>Deletar</button>
          </div>
        </ModalContainer>
      </SimpleModal>
    </Container>
  );
}
