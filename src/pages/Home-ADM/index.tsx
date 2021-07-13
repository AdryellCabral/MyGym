import Header from "../../components/Header";
import ListaProvisória from "../../components/ListaProvisória";
import { ContainerLista, HomePageContainer } from "./style";

export default function HomePageAdm() {
  const srcIcon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1024px-Circle-icons-tools.svg.png";

  const options = {
    coaches: [
      { name: "sei lá1", id: 0 },
      { name: "sei lá2", id: 1 },
      { name: "sei lá3", id: 2 },
      { name: "sei lá4", id: 3 },
      { name: "sei lá5", id: 4 },
      { name: "sei lá6", id: 5 },
      { name: "sei lá7", id: 6 },
    ],
    students: [
      { name: "sei lá8", id: 7 },
      { name: "sei lá9", id: 8 },
      { name: "sei lá10", id: 9 },
      { name: "sei lá11", id: 10 },
      { name: "sei lá12", id: 11 },
      { name: "sei lá13", id: 12 },
      { name: "sei lá14", id: 13 },
    ],
  };

  return (
    <>
      <Header />
      <HomePageContainer>
        <span>Home</span>
        <div>
          <ContainerLista>
            <span>Alunos</span>
            <ListaProvisória options={options.students} src={srcIcon} />
          </ContainerLista>
          <ContainerLista>
            <span>Coaches</span>
            <ListaProvisória options={options.coaches} src={srcIcon} />
          </ContainerLista>
        </div>
      </HomePageContainer>
    </>
  );
}
