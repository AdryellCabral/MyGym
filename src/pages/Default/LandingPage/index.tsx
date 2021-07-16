import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import ScreenThree from "./ScreenThree";
import ScreenFour from "./ScreenFour";
import ScreenFive from "./ScreenFive";
import { useEffect, useState } from "react";
import { ContainerDesk } from "./styles";

interface WindowSize {
  width: number;
  height: number;
}

const LandingPage = () => {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  const size = useWindowSize();

  if (size.width < 1200) {
    return (
      <section className="landingPage">
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
        <ScreenFour />
        <ScreenFive />
      </section>
    );
  } else {
    return (
      <section className="landingPage">
        <ScreenOne />
        <ContainerDesk>
          <header>
            <h1>APLICAÇÃO</h1>
          </header>
          <div className="container--info">
            <div style ={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <ScreenTwo />
              <ScreenThree />
              <ScreenFour />
            </div>
          </div>
          <div className="backgroundFooter" />
        </ContainerDesk>
        <ScreenFive />
      </section>
    );
  }
};

export default LandingPage;
