import { useState } from "react";

export default function useFillRoomsTEST (){
        //fill array
        let arr: RoomData[] = []
        for (let i=0; i<8; i++){
            console.log(i)
            arr.push({
                roomID: String(Math.random()*1000),
                title: "Losing my mind",
                price: "9.99",
                tags: ["Tag 1", "Tag 2"],
                thumbnailUrl: "https://images.pexels.com/photos/1882712/pexels-photo-1882712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                thumbnailAlt: "Card Image",
                username: "toohotkendal",
                profilePicUrl: "https://th.bing.com/th/id/OIP.PXhyRtw-JCHrwUAWlZnFjwHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain",
                profilePicAlt: "Artist"
            })
        }


    //temporary state until we implement fetch. 
    // we'll probably fetch rooms and channels sepparately, then merge them in a variable.
    const [roomsArray, setRoomsArray] = useState<RoomData[]>(arr); 
    
    return {roomsArray, setRoomsArray}
}
