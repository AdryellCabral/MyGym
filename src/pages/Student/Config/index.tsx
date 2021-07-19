import { useHistory } from "react-router-dom";
import NewPassword from "../../../components/NewPassword";
import { Upload } from "../../../components/upload";
import { ContainerFoto, PageContainer, RedButtonStyled } from "./styles";
import Modal from "../../../components/Modal";
import { useState } from "react";
import { useStudent } from "../../../providers/Student";

export default function AcademyConfig() {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (modal: boolean) => {
    setOpenModal(!openModal);
  };

  const hanldePhoto = () => {
    setOpenModal(!openModal);
  };

  const history = useHistory();

  const { student } = useStudent();

  const hanldeLogout = async () => {
    await localStorage.clear();
    await history.push("/");
    await window.location.reload();
  };

  return (
    <PageContainer>
      <div className="components">
        <ContainerFoto>
          <div className="foto">
            <div>
              <img
                src={
                  student.img
                    ? student.img
                    : "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
                }
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
