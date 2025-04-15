import ChannelsGrid from "./ChannelsGrid/ChannelsGrid";
import SearchBar from "./SearchBar/SearchBar";
import TagsContainer from "./Tags/TagsContainer";

export default function LiveChannels({roomsArray, setClickedRoom}:ChannelGridProps){
    
    return (
    <>
        <SearchBar/>

        <TagsContainer/>

        <div className="section-header">
            <span className="section-header__main">Live Channels</span>
            <span className="section-header__sub">you might be interested in</span>
        </div>

        <ChannelsGrid roomsArray={roomsArray} setClickedRoom={setClickedRoom}/>
    
    </>
    )
}