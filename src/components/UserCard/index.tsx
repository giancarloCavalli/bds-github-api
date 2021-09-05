import { User } from '../../types/User';
import './styles.css';

type Props = {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className="prof-content-container">
      <div className="prof-img-container">
        <img src={user.avatar_url} alt={`${user.name} avatar`} />
      </div>
      <div className="prof-info-box">
        <h6>Informações</h6>
        <div className="prof-info-item"><b>Perfil:</b> <a href={user.html_url}>{user.html_url}</a></div>
        <div className="prof-info-item"><b>Seguidores:</b> {user.followers}</div>
        <div className="prof-info-item"><b>Localidade:</b> {user.location}</div>
        <div className="prof-info-item"><b>Nome:</b> {user.name}</div>
      </div>
    </div>
  );
};

export default UserCard;
