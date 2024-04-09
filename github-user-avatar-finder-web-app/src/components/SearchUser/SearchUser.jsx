import useDebounce from '../../hooks/useDebounce';
import './SearchUser.css'
function SearchUser({updateSearchTerm}){

    const debouncedCallback = useDebounce((e)=> updateSearchTerm(e.target.value))

    return(
        <div className="search-user-wrapper">
            <input type="text" placeholder="Enter photo Id" onChange={debouncedCallback}/>
        </div>
    )
}

export default SearchUser;
