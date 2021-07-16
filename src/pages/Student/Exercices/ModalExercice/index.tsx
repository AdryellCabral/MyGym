import { Container } from "./styles";
import Modal from "../../../../components/Modal";
import YoutubeContainer from "../../../../components/YoutubeContainer";

interface ModalExerciceProps {
  handleModal: (modal: boolean) => void;
  openModal: boolean;
  exercice: {
    id: number;
    name: string;
    group: string;
    description: string;
    image: string;
    gif: string;
    video: string;
  };
}
const ModalExercice = ({
  handleModal,
  openModal,
  exercice,
}: ModalExerciceProps) => {
  console.log(exercice)
  return (
    <Modal open={openModal} handleClose={handleModal}>
      <Container img={exercice.gif}>
        <header>
          <h1>{exercice.name}</h1>
          <button onClick={() => handleModal(openModal)}>
            <span>X</span>
          </button>
        </header>

        <div className="img" />
        <p>{exercice.description}</p>

        <div className="container--video">
          <YoutubeContainer
            videoId={exercice.video}
            containerClassName="container--video"
          />
        </div>
      </Container>
    </Modal>
  );
};

export default ModalExercice;
