import YouTube from "react-youtube";
import { useWindowWidth } from "../../providers/WindowWidth";

interface VideoContainerProps {
  videoId: string;
  containerClassName: string;
}

const VideoContainer = ({
  videoId,
  containerClassName,
}: VideoContainerProps) => {
  const { windowWidth } = useWindowWidth();

  let optsMobile: any = {
    height: "100%",
    width: "100%",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  if (windowWidth < 768) {
    optsMobile = {
      height: "100%",
      width: "100%",

      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
  } else {
    optsMobile = {
      height: "300",
      width: "440",

      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
  }
  return <YouTube videoId={videoId} opts={optsMobile} />;
};

export default VideoContainer;
