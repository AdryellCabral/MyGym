import { Container } from "./styles";
import Modal from "../../../../components/Modal";
import { useState } from "react";
import { apiMyGym } from "../../../../services/api";
import { useStudent } from "../../../../providers/Student";

interface ModalNewFeedProps {
  handleModal: (modal: boolean) => void;
  openModal: boolean;
}

const ModalNewFeed = ({ handleModal, openModal }: ModalNewFeedProps) => {
  const [newFeed, setNewFeed] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const { student, getStudent } = useStudent();
  let token = localStorage.getItem("@tokenMyGym") || "";
  if (token !== "") {
    token = JSON.parse(token);   
  }

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue !== "") {
      setNewFeed([...newFeed, inputValue]);
      setInputValue("");
    }
  };

  const handleClose = () => {
    setNewFeed([]);
    handleModal(openModal);
  };

  const registerFeed = () => {

    const feed = {
      feeds: newFeed
    }

    apiMyGym
      .patch(`students/${student.id}`, feed, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .then((response) => {
        console.log(response);
        getStudent(student.userId)
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            value={inputValue}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleClick}>Adicionar</button>
        </div>

        <div className="feed">
          <h2>Refeições</h2>
          <ul>
            {newFeed?.map((feed) => (
              <li key={feed}>{feed}</li>
            ))}
          </ul>
          <button onClick={registerFeed}>Cadastrar</button>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalNewFeed;
