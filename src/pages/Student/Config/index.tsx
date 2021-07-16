import { useHistory } from "react-router-dom";
import NewPassword from "../../../components/NewPassword";
import { Upload } from "../../../components/upload";
import { ContainerFoto, PageContainer, RedButtonStyled } from "./styles";
import Modal from "../../../components/Modal";
import { useState } from "react";

export default function AcademyConfig() {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (modal: boolean) => {
    setOpenModal(!openModal);
  };

  const hanldePhoto = () => {
    setOpenModal(!openModal);
  };

  const history = useHistory();

  const hanldeLogout = async () => {
    await localStorage.clear();
    await history.push("/");
    await window.location.reload();
  };

  return (
    <PageContainer>
      <div className="spans">
        <span>Configurações</span>
      </div>
      <div className="components">
        <ContainerFoto>
          <div className="foto">
            <div>
              <img
                src="https://i.pinimg.com/originals/c7/8f/9c/c78f9c888554a3633e0fcba4f8201027.png"
                alt="imagem maior"
              />
              <img
                src="https://image.flaticon.com/icons/png/512/189/189689.png"
                alt="imagem menor"
                onClick={hanldePhoto}
              />
            </div>
            <span>Nome do aluno</span>
          </div>
          <span>
            <b>Coach:</b> nome do coach
          </span>
        </ContainerFoto>
        <NewPassword />
      </div>
      <div onClick={hanldeLogout}>
        <RedButtonStyled>Logout</RedButtonStyled>
      </div>
      <Modal open={openModal} handleClose={handleModal}>
        <Upload handleClose={handleModal} open={openModal}></Upload>
      </Modal>
    </PageContainer>
  );
}
