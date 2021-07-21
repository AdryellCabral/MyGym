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
import { useUserProvider } from "../../../../providers/User";

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
  const { loadInfoAcademy } = useAcademy();
  const { userProvider } = useUserProvider();

  const [person, setPerson] = useState({
    name: "",
    id: 0,
    email: "",
    img: "",
    coachId: 0,
  });

  const { name, id, email, img } = person;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (option: any) => {
    setPerson(option);
    setOpen(true);
  };

  const deleteUser = (id: number) => {
    const endpoint = person.coachId ? "students" : "coaches";
    apiMyGym
      .delete(`${endpoint}/${id}`, {
        headers: {
          Authorization: `Bearer ${userProvider.token}`,
        },
      })
      .then(() => {
        loadInfoAcademy();
        setOpen(false);
      })
      .catch((error) => console.log(error));
  };
console.log(objectsArray)
  const defaultImg =
    "https://i.pinimg.com/originals/fd/0c/55/fd0c559856ca991e9e28937dc802f0b0.png";
  const imgPerfil = person?.img || defaultImg;

  return (
    <Container>
      {objectsArray && objectsArray[0] ? (
        objectsArray?.map((option, index) => (
          <div key={index} className="item">
            <li onClick={() => handleOpen(option)}>{option.name}</li>
            <SettingsIconStyled
              onClick={() => handleOpen(option)}
              style={{ color: "black" }}
            />
          </div>
        ))
      ) : (
        <div>Nenhum usuário cadastrado!</div>
      )}
      <SimpleModal open={open} handleClose={handleClose}>
        <ModalContainer>
          <header>
            <span>{name}</span>
            <CloseIconStyled onClick={handleClose} />
          </header>
          <div className="body">            
              <img src={imgPerfil} alt={`Foto de ${name}`} />
           
            <span>Nome: {name}</span>
            <span>Email: {email}</span>
            <button onClick={() => deleteUser(id)}>Deletar</button>
          </div>
        </ModalContainer>
      </SimpleModal>
    </Container>
  );
}
