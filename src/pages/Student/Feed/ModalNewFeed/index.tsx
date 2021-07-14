import { Container } from "./styles";
import Modal from "../../../../components/Modal";

interface ModalNewFeedProps {
  handleModal: (modal: boolean) => void;
  openModal: boolean;
}
const ModalNewFeed = ({ handleModal, openModal }: ModalNewFeedProps) => {
  return (
    <Modal open={openModal} handleClose={handleModal}>
      <Container>
        <header>
          <h1>Cadastro de alimentação</h1>
          <button onClick={() => handleModal(openModal)}>
            <span>X</span>
          </button>
        </header>

        <div className="new">
          <h1>Novo Prato</h1>
          <textarea name="" id="" cols={30} rows={10}></textarea>
          <button>Adicionar</button>
        </div>

        <div className="feed">
          <h2>Refeições</h2>
          <ul></ul>
          <button>Cadastrar</button>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalNewFeed;
