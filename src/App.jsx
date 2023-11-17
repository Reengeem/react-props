import PlayersList from "./components/PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className=".bg-secondary-subtle">
      <div className="container mt-5 ml-5 text-center">
        <NavBar />
        <h3 className="text-center container">
          The Top 10 Goal Scorers of English Premier League Season 2023/2024
        </h3>
        <PlayersList />
      </div>
    </Container>
  );
}

export default App;
