import { useState } from "react";
import SearchUser from "../SearchUser/SearchUser";
import UserList from "../UserList/UserList";
import UserDetails from "../UserDetails/UserDetails";

function Dashboard(){
    const [ searchTerm, setSearchTerm ] = useState('')
    return(
        <div className="dashboard-wrapper">
            <SearchUser updateSearchTerm={setSearchTerm}/>
            {(!searchTerm) ? <UserList/> : <UserDetails key={searchTerm} username={searchTerm}/>}
            
        </div>
    )
}

export default Dashboard;