import userImage from '../../assets/images/UserImg-Test.png';
import './styles.css';

const UserCard = () => {
  return (
    <div className="prof-content-container">
      <div className="prof-img-container">
        <img src={userImage} alt="User profile Image" />
      </div>
      <div className="prof-info-box">
        <h6>Informações</h6>
        <div className="prof-info-item"><b>Perfil:</b> <a href="https://github.com/giancarloCavalli">https://github.com/giancarloCavalli</a></div>
        <div className="prof-info-item"><b>Seguidores:</b> 7</div>
        <div className="prof-info-item"><b>Localidade:</b> Indaial</div>
        <div className="prof-info-item"><b>Nome:</b> Giancarlo Cavalli</div>
      </div>
    </div>
  );
};

export default UserCard;
