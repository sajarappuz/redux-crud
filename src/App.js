
import './App.css';
import { useSelector } from 'react-redux'; //to read value
import { addUser , deleteUser, updateUser} from './features/Users';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [newusername,setNewUsername] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  return (
    <div className="App">

      <div className="adduser">
        <input type="text" placeholder='name' onChange={(event)=> {setName(event.target.value);}} />
        <input type="text" placeholder='username' onChange={(event)=> {setUsername(event.target.value);}}/>
        <button onClick={() =>{dispatch(addUser({id: userList[userList.length - 1].id + 1, name , username }))}}> Add User</button>
      </div>
      <div className="displayuser">
        {userList.map((user) => {
          return(
            <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input type="text" placeholder='newusername' onChange={(event) => {setNewUsername(event.target.value);}}/>
            <button onClick={() =>  {dispatch(updateUser({id:user.id, username:newusername}))}}>Update Username</button>
            <button onClick={()=> {dispatch(deleteUser({id:user.dispatch}))}}>Delete user</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
