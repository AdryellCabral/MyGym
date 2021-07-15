import { Container } from "./styles";
import userDefault from "../../assets/userDefault.png";
import Chart from "react-apexcharts";
import { useWindowWidth } from "../../../providers/WindowWidth";
const HomeStudent = () => {

  const {windowWidth} = useWindowWidth()
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: windowWidth >= 768 ? true : false,
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70",
      },
    },
  };

  const series = [
    {
      name: "IMC",
      data: [24, 25, 27, 33, 44, 46, 50, 52, 55],
    },
    {
      name: "Peso",
      data: [80, 90, 100, 95, 93, 90, 88, 85, 80],
    },
    {
      name: "Gordura",
      data: [15, 25, 30],
    },
    {
      name: "Massa Magra",
      data: [34, 40, 45],
    },
  ];

  return (
    <section className="home--Student">
      <Container percentage={(16 / 20) * 100}>
        <div className="container--user">
          <div className="status">
            <figure>
              <img
                src="http://s2.glbimg.com/c-WVrLcmkvQbU_7kolZlss_kZ3k=/e.glbimg.com/og/ed/f/original/2015/06/09/thinkstockphotos-478000165.jpg"
                alt="Usuário"
              />
              <figcaption>Nome Usuário</figcaption>
            </figure>
          </div>
          <div className="trainingPerformed">
            <h2>Treinos Realizados</h2>
            <div className="percentageBar">
              <div>
                <span>16/20</span>
              </div>
            </div>
          </div>
        </div>

        <div className="progression--chart">
          <h2>Progressão</h2>
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="80%"
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeStudent;
