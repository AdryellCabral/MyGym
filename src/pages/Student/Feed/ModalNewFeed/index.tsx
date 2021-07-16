import { Container } from "./styles";
import Modal from "../../../../components/Modal";
import { useState } from "react";
import { apiMyGym } from "../../../../services/api";
import { useStudent } from "../../../../providers/Student";
import { toast } from "react-toastify";
import { ToastRegister } from "../../../../components/Toasts/Register";

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
      feeds: newFeed,
    };

    if (newFeed.length) {
      apiMyGym
        .patch(`students/${student.id}`, feed, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast(
            <ToastRegister name="" closeToast={true} toastProps={null}>
              Refeições adicionadas com sucesso!
            </ToastRegister>,
            { className: "registerSuccess" }
          );
          getStudent();
        })
        .catch((error) => {
          toast(
            <ToastRegister name="" closeToast={true} toastProps={null}>
              Ocorreu algum erro, tente novamente!
            </ToastRegister>,
            { className: "registerFail" }
          );
        });
    } else {
      toast(
        <ToastRegister name="" closeToast={true} toastProps={null}>
          Adicione algumas refeições primeiro!
        </ToastRegister>,
        { className: "registerFail" }
      );
    }
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
          <ol>
            {newFeed?.map((feed, index) => (
              <li key={index}>
                <span>{index + 1}°</span> {feed}
              </li>
            ))}
          </ol>
          <button onClick={registerFeed}>Cadastrar</button>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalNewFeed;
