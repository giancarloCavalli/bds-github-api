import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Desafio Github API</h1>
      </div>
      <div className="home-content">
        <h6>Bootcamp Spring React - DevSuperior</h6>
      </div>
      <div className="home-bottom">
        <Link to="/profile/search">
          <button className="btn-primary">Começar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
