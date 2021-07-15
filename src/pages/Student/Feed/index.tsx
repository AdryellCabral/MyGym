import { useState } from "react";
import { Container, Icon } from "./styles";
import ModalNewFeed from "./ModalNewFeed";
import { useStudent } from "../../../providers/Student";
import { apiMyGym } from "../../../services/api";

interface FeedMap {
  element: string;
  index: number;
  array: Array<string>;
}

const Feed = () => {
  const [openModal, setOpenModal] = useState(false);
  const { student, getStudent } = useStudent();

  let token = localStorage.getItem("@tokenMyGym") || "";
  if (token !== "") {
    token = JSON.parse(token);
  }

  const handleModal = (modal: boolean) => {
    setOpenModal(!modal);
  };

  const clearFeeds = () => {
    const feed = {
      feeds: [],
    };

    apiMyGym
      .patch(`students/${student.id}`, feed, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getStudent();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="feed">
      <Container>
        <h1>Alimentação</h1>

        <div className="container">
          <div className="student--feed">
            {student?.feeds?.length > 0 ? (
              <>
                <header>
                  <div>
                    Refeições: <span>{student?.feeds?.length}</span>
                  </div>
                  <Icon onClick={clearFeeds} />
                </header>
                <ul>
                  <>
                    {student?.feeds?.map((element: string, index: number) => (
                      <li key={element}>
                        <span>{index + 1}°</span> {element}
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
