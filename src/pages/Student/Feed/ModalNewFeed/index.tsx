import { Container } from "./styles";
import Modal from "../../../../components/Modal";
import { useState } from "react";

interface ModalNewFeedProps {
  handleModal: (modal: boolean) => void;
  openModal: boolean;
}


const ModalNewFeed = ({ handleModal, openModal }: ModalNewFeedProps) => {
  const [newFeed, setNewFeed] = useState<Array<string>>([])
  const [inputValue, setInputValue] = useState<string>("")

  const handleChange = (e:any) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    if(inputValue !== ""){

      setNewFeed([...newFeed, inputValue])
      setInputValue("")
    }
  } 

  const handleClose = () => {
    setNewFeed([])
    handleModal(openModal)
  }

  return (
    <Modal open={openModal} handleClose={handleModal}>
      <Container>
        <header>
          <h1>Cadastro de alimentação</h1>
          <button onClick={handleClose}>
            <span>X</span>
          </button>
        </header>

        <div className="new">
          <h1>Novo Prato</h1>
          <textarea name="" id="" cols={30} rows={10} value={inputValue} onChange={handleChange}></textarea>
          <button onClick={handleClick}>Adicionar</button>
        </div>

        <div className="feed">
          <h2>Refeições</h2>
          <ul>
            {newFeed?.map((feed) => <li key={feed}>{feed}</li>)}
          </ul>
          <button>Cadastrar</button>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalNewFeed;
