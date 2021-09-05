import axios from 'axios';
import React, { useState } from 'react';
import UserCard from '../../components/UserCard';
import { User } from '../../types/User';
import { GIT_USER_URL } from '../../util/requests';
import './styles.css';

type SearchData = {
  username: string;
}

const Profile = () => {

  const [user, setUser] = useState<User>();

  const [searchData, setSearchData] = useState<SearchData>({
    username: ''
  });

  const handleClick = () => {
    axios.get(`${GIT_USER_URL}/${searchData?.username}`)
    .then(response => {
      setUser(response.data);
      console.log(response.data);
    })
    .catch(error => {
      setUser(undefined);
      console.log(error);
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setSearchData({ ...searchData, [name]: value});
  };

  return (
    <div className="prof-search-container">
      <div className="prof-search-box">
        <h1>Encontre um perfil Github</h1>
        <div>
          <input type="text" name="username" value={searchData.username} placeholder="Username" onChange={handleChange} />
        </div>
        <button className="btn-primary" onClick={handleClick}>Encontrar</button>
      </div>
    {user && <UserCard user={user} />}
    </div>
  )
}

export default Profile;