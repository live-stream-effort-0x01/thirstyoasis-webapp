import openModal from "../../Modal/utils/openModal"
import { MODALS } from "../../Modal/config/modalsConfig"



export default function ChannelCard( {roomProps, setClickedRoom} : RoomProps & setClickedRoomProps ){

    let {thumbnailUrl, thumbnailAlt, profilePicUrl, profilePicAlt, title, price, username, tags} = roomProps 

    return (
        <div className="card" onClick={()=>{setClickedRoom(roomProps); openModal(MODALS.PURCHASE_ROOM)}}>
            <img src={thumbnailUrl}
                alt={thumbnailAlt} className="card__image"/>
                
            <div className="card__content">
                
                <img src={profilePicUrl}
                    alt={profilePicAlt} className="card__artist"/>

                <div className="card__info">
                    <h3 className="card__title">{title}</h3>
                    <p className="card__price">${price}</p>
                    <p className="card__artist__name">{username}</p>
                    <div className="card__tags">
                        {tags.map((tag)=>{
                            return (
                                <span className="card__tag">{tag}</span>
                            )
                        })}
                    </div>
                </div>

             </div>
        </div>
    )
}