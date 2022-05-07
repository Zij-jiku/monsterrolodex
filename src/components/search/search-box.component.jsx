
import './search-box.styles.css';

const SearchField = ({className, placeholder , onChangeHandler}) => (
            <div>
                 <input type="search" className={`search-box ${className}`} placeholder={placeholder}
                 onChange={onChangeHandler}/>
                
            </div>
        )



export default SearchField;
