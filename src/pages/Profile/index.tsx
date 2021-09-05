import UserCard from '../../components/UserCard';
import './styles.css';

const Profile = () => {
  return (
    <div className="prof-search-container">
      <div className="prof-search-box">
        <h1>Encontre um perfil no Github</h1>
        <div>
          <input type="text" name="" id="" />
        </div>
        <button className="btn-primary">Encontrar</button>
      </div>
    <UserCard />
    </div>
  )
}

export default Profile;