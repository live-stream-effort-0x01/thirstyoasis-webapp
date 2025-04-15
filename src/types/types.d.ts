declare var Swiper: any;


type AuthProps= {
    isAuth: boolean
};

type setAuthProps = {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

type CreditProps = {
    credits?: number
};

type SessionProps = AuthProps & CreditProps;


type ModalKey = "SIGNUP" | "LOGIN" | "STREAM_NOW" | "BUY_TOKENS" | "BUY_NOW" | "PROFILE" | "PURCHASE_ROOM";

type ModalData= {
    id: string,
    displayStyle: string
};


// Modal
type ReadModalProps ={
    modalKey: ModalKey | null
}

type SetModalProps = {
    setModalKey: React.Dispatch<React.SetStateAction<ModalKey | null>>
}

type ModalProps = ReadModalProps & SetModalProps;


//Profile settings

type ProfileSettingsTab = "profile" | "security" | "payment" | "subscription"

type ReadProfileSettingsTabProp = {
    activeTab: ProfileSettingsTab;
}

type ProfileSettingsTabProps = ReadProfileSettingsTabProp & {
    setActiveTab: React.Dispatch<React.SetStateAction<ProfileSettingsTab>>
}

//Purchase room modal
type PurchaseRoomModalProps = {
    thumbnailUrl?: string;
    thumbnailAlt?:string;
    title?: string;
};


//Channel rooms
type Room = {
    roomID: string //room url fetch
    title: string,
    price: string,
    tags: string[],
    thumbnailUrl: string,
    thumbnailAlt: string,
    username: string //maps Channel.username
}

type Channel = {
    username: string
    profilePicUrl: string,
    profilePicAlt: string,
}

type RoomData = Room & Channel;

type RoomProps = {
    roomProps: RoomData
}

type ChannelGridProps = setClickedRoomProps & {
    roomsArray: RoomData[]
}

type setClickedRoomProps = {
    setClickedRoom: React.Dispatch<React.SetStateAction<RoomData | undefined>>
}