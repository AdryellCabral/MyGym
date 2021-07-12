import { useState } from "react";
import Header from "../../components/Header";
import ListaProvisória from "../../components/ListaProvisória";
import SimpleModal from "../../components/Modal";
import { ContainerLista, HomePageContainer, ModalContainer } from "./style";

export default function HomePageAdm() {
  const srcIcon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1024px-Circle-icons-tools.svg.png";

  const options = {
    coaches: [
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
    ],
    students: [
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
      { name: "sei lá" },
    ],
  };

  const [open, setOpen] = useState(false);

  const textFunc = () => {
    console.log("clicou no texto!");
    setOpen(true);
  };

  const iconFunc = () => {
    setOpen(true);
    console.log("clicou no ícone!");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <HomePageContainer>
        <span>Home</span>
        <div>
          <ContainerLista>
            <span>Alunos</span>
            <ListaProvisória
              options={options.students}
              src={srcIcon}
              funcIcon={iconFunc}
              funcText={textFunc}
            />
          </ContainerLista>
          <ContainerLista>
            <span>Coaches</span>
            <ListaProvisória
              options={options.coaches}
              src={srcIcon}
              funcIcon={iconFunc}
              funcText={textFunc}
            />
          </ContainerLista>
        </div>
      </HomePageContainer>
      <SimpleModal open={open} handleClose={handleClose}>
        <ModalContainer>olaaaaaa</ModalContainer>
      </SimpleModal>
    </>
  );
}
