import axios from 'axios'
import { useEffect, useState } from 'react';
import './UserDetails.css'
function UserDetails({username}){
    const [ user, setUser ] = useState({})
    async function downloadUser(){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            const result = response.data;
            setUser({
                id: result.id,
                name: result.login,
                image: result.avatar_url,
            })
        
        } catch (error) {
            console.log('user not found!');
        }

    }
    useEffect(()=>{
        downloadUser();
    },[])
    console.log(user);

    return( 
        <div className="user-details-wrapper">
            <img className="user-details-image" src={user.image}/>
            <div className="user-details-name">{user.name}</div>
        </div>
        )

}
export default UserDetails;