import './User.css'
function User({name, src}){
    return(
        <div className="user-wrapper">
            <img className="user-image" src={src}/>
            <div className="user-name">{name}</div>
        </div>
    )
}

export default User;