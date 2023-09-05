import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";

const App = () => {
  return (
    <div>
      <VideoList title="Programacion">
        <VideoItem
          title="Java"
          duration="60"
          date="29-08-2023"
          description="Curso de java"
        />
        <VideoItem
          title="React"
          duration="60"
          date="29-08-2023"
          description="Curso de react"
        />
      </VideoList>
      <VideoList title="Musica">
        <VideoItem
          title="Salsa"
          duration="60"
          date="29-08-2023"
          description="Curso de salsa"
        />
        <VideoItem
          title="Rock"
          duration="60"
          date="29-08-2023"
          description="Curso de rock"
        />
      </VideoList>
    </div>
  );
};

export default App;
