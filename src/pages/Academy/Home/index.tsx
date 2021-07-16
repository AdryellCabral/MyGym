import List from "./List";
import { useAcademy } from "../../../providers/Academy";
import { ContainerLista, HomePageContainer } from "./style";

export default function HomePage() {
  const { academyResume } = useAcademy();  

  return (
    <>
      <HomePageContainer>
        <h1>Home</h1>
        <div>
          <ContainerLista>
            <h2>Alunos</h2>
            <List objectsArray={academyResume?.students} />
          </ContainerLista>
          <ContainerLista>
            <h2>Coaches</h2>
            <List objectsArray={academyResume?.coaches} />
          </ContainerLista>
        </div>
      </HomePageContainer>
    </>
  );
}
