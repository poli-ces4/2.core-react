import VideoList from "./components/VideoList";
import { playListMusica, playListProgramacion } from "./data/data";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.container}>
      <VideoList title="Programacion" playList={playListProgramacion} />
      <VideoList title="Musica" playList={playListMusica} />
    </div>
  );
};

export default App;
