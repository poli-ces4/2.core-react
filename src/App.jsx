import VideoList from "./components/VideoList";
import { playListMusica, playListProgramacion } from "./data/data";
import style from "./App.module.css";
import FormControlado from "./components/FormControlado";
import LifeCycle from "./components/LifeCycle";
import { useState } from "react";

const App = () => {
  const [showLifeCycle, setShowLifeCycle] = useState(false);

  return (
    <div className={style.container}>
      <VideoList title="Programacion" playList={playListProgramacion} />
      <VideoList title="Musica" playList={playListMusica} />
      <FormControlado />
      {showLifeCycle && <LifeCycle />}
      <button onClick={() => setShowLifeCycle(!showLifeCycle)}>
        {showLifeCycle ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
};

export default App;
