export default function SearchBar(){
    return (
        <div className="search-container">
            <input type="text" className="search-bar" placeholder="What are you looking for?"/>
            <button className="fas fa-search search-icon"></button>
        </div>
    )
}