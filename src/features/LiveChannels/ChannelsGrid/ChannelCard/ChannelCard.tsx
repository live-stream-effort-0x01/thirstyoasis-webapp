type ChannelCardProps = {
    thumbnailUrl: string,
    thumbnailAlt: string,
    profilePicUrl: string,
    profilePicAlt: string,
    title: string,
    price: string,
    username: string,
    tags: string[]
}

export default function ChannelCard(
    {thumbnailUrl, thumbnailAlt, profilePicUrl, profilePicAlt, title, price, username, tags}:ChannelCardProps
){

    return (
        <div className="card">
            <img src={thumbnailUrl}
                alt={thumbnailAlt} className="card__image"/>
            <div className="card__content">
                <div className="card__header">
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
        </div>
    )
}