import {useRef} from "react";


const SearchBar = () => {
    const ref = useRef()

    return(
        <div>
            <input placeholder="searching..."/>
            <button>search</button>
        </div>
    )

}

export default SearchBar;