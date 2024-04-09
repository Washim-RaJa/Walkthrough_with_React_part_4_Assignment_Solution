import axios from 'axios';
import { useEffect, useState } from 'react';
import User from '../User/User';
import './UserList.css'

function UserList(){

    const [userList, setUserList] = useState([])

    async function downloadUsers(){
        const response = await axios.get(`https://api.github.com/users`);
        console.log(response.data);
        const result  = response.data;
        const avatars =  result.map(item => {
            return {
                id: item.id,
                name: item.login,
                image: item.avatar_url
            }
        })
        setUserList(avatars)
        console.log("This is userList",userList);
    }
    useEffect(()=>{
        downloadUsers();
    },[])
    
    return(
        <div className='userList-wrapper'>
            {userList.map(item => <User key={item.id} name={item.name} src={item.image}/>)}
        </div>
        
    )
}

export default UserList;