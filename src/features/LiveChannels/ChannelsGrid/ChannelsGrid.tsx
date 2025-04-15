import ChannelCard from "../ChannelCard/ChannelCard"

export default function ChannelsGrid({roomsArray, setClickedRoom}: ChannelGridProps){

    return (
        <div className="card-grid">
           {roomsArray.map(room=> <ChannelCard roomProps={room} setClickedRoom={setClickedRoom}/>)}   
        </div>
    )
}