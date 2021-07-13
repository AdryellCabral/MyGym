import Header from "../../../components/Header";
import ListaProvisória from "../../../components/ListaProvisória";
import { ContainerLista, HomePageContainer } from "./style";

export default function HomePage() {
  const objectsArray = {
    /* 
      const academyResume = useAcademy();
    */

    // academyResume.coaches
    coaches: [
      { name: "sei lá1", id: 0, email: "mail@Mail.com" },
      { name: "sei lá2", id: 1, email: "mail@Mail.com" },
      { name: "sei lá3", id: 2, email: "mail@Mail.com" },
      { name: "sei lá4", id: 3, email: "mail@Mail.com" },
      { name: "sei lá5", id: 4, email: "mail@Mail.com" },
      { name: "sei lá6", id: 5, email: "mail@Mail.com" },
      { name: "sei lá7", id: 6, email: "mail@Mail.com" },
    ],
    // academyResume.students
    students: [
      {
        name: "sei lá8",
        id: 7,
        email: "mail@Mail.com",
        coachId: 8,
        photo:
          "data:image/jpeg;base64,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",
      },
      { name: "sei lá9", id: 8, email: "mail@Mail.com", coachId: 8 },
      { name: "sei lá10", id: 9, email: "mail@Mail.com", coachId: 8 },
      { name: "sei lá11", id: 10, email: "mail@Mail.com", coachId: 8 },
      { name: "sei lá12", id: 11, email: "mail@Mail.com", coachId: 8 },
      { name: "sei lá13", id: 12, email: "mail@Mail.com", coachId: 8 },
      { name: "sei lá14", id: 13, email: "mail@Mail.com", coachId: 8 },
    ],
  };

  return (
    <>
      <Header />
      <HomePageContainer>
        <h1>Home</h1>
        <div>
          <ContainerLista>
            <h2>Alunos</h2>
            {/* <ListaProvisória objectsArray={academyResume.coaches} /> */}
            <ListaProvisória objectsArray={objectsArray.coaches} />
          </ContainerLista>
          <ContainerLista>
            <h2>Coaches</h2>
            {/* <ListaProvisória objectsArray={academyResume.students} /> */}
            <ListaProvisória objectsArray={objectsArray.students} />
          </ContainerLista>
        </div>
      </HomePageContainer>
    </>
  );
}
