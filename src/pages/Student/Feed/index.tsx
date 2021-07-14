import { useState } from "react";
import { Container, Icon } from "./styles";
import ModalNewFeed from "./ModalNewFeed";

const Feed = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (modal: boolean) => {
    setOpenModal(!modal);
  };

  const [myFeed] = useState([
    "arroz",
    "arroz",
    "arroz",
    "arroz",
    "arroz",
    "arroz",
    "arroz",
    "arroz",
    "arroz",
  ]);

  return (
    <section className="feed">
      <Container>
        <h1>Alimentação</h1>

        <div className="container">
          <div className="student--feed">
            {myFeed[20] ? (
              <>
                <header>
                  <div>
                    Refeições: <span>4</span>
                  </div>
                  <Icon />
                </header>
                <ul>
                  <>
                    {myFeed.map((food, index) => (
                      <li key={index}>
                        <span>{index + 1}°:</span> {food}
                      </li>
                    ))}
                  </>
                </ul>
              </>
            ) : (
              <>
                <p>Nenhum plano alimentar cadastrado.</p>
                <button onClick={() => handleModal(openModal)}>
                  Cadastrar
                </button>
              </>
            )}
          </div>
          <div className="figure" />
        </div>
      </Container>
      <ModalNewFeed handleModal={handleModal} openModal={openModal} />
    </section>
  );
};

export default Feed;
