import { useState } from "react";
import { Container, ModalContainer } from "./style";
import SimpleModal from "../Modal";

interface OptionsType {
  name: string;
  id: number;
}

interface ListProps {
  options: Array<OptionsType>;
  src: string;
  funcText?: () => void;
  funcIcon?: () => void;
}

export default function ListaProvisória({
  options,
  src,
  funcText,
  funcIcon,
}: ListProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = async (option: any) => {
    console.log(option);
    const { name, id } = option;
    await setName(name);
    await setId(id);
    await setOpen(true);
  };

  return (
    <Container>
      {options?.map((option, index) => (
        <>
          <div key={index}>
            <li onClick={() => handleOpen(option)}>{option.name}</li>
            <img src={src} alt="" onClick={funcIcon} />
          </div>
        </>
      ))}
      <SimpleModal open={open} handleClose={handleClose}>
        <ModalContainer>
          Nome: {name}
          Id: {id}
        </ModalContainer>
      </SimpleModal>
    </Container>
  );
}
