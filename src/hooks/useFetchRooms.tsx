import { useState, useEffect } from "react";

interface RoomData {
    roomID: string;
    title: string;
    price: string;
    tags: string[];
    thumbnailUrl: string;
    thumbnailAlt: string;
    username: string;
    profilePicUrl: string;
    profilePicAlt: string;
}

// Define a base fake room to fill in missing data
const baseFakeRoom: RoomData = {
    roomID: "", // Will be generated or taken from API
    title: "Losing my mind",
    price: "9.99",
    tags: ["Tag 1", "Tag 2"],
    thumbnailUrl: "https://images.pexels.com/photos/1882712/pexels-photo-1882712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnailAlt: "Card Image",
    username: "toohotkendal",
    profilePicUrl: "https://th.bing.com/th/id/OIP.PXhyRtw-JCHrwUAWlZnFjwHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain",
    profilePicAlt: "Artist"
};

// Function to map API response room to RoomData interface
const mapApiResponseToRoomData = (apiRoom: any): RoomData => {
    let metadata = {};
    try {
        metadata = JSON.parse(apiRoom.metadata);
    } catch (e) {
        console.error("Failed to parse metadata:", e);
    }

    return {
        ...baseFakeRoom, // Start with fake data defaults
        roomID: apiRoom.sid || `fake_${Math.random().toString(36).substring(2, 15)}`, // Use sid if available, otherwise generate fake
        title: (metadata as any).description || apiRoom.name || baseFakeRoom.title,
        username: apiRoom.name || baseFakeRoom.username,
    };
};

export default function useFetchRooms() {
    const [roomsArray, setRoomsArray] = useState<RoomData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_ROOM_API_URL, {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const apiData = await response.json();
                const fetchedRooms: RoomData[] = (apiData.Rooms || []).map(mapApiResponseToRoomData);

                let finalRooms: RoomData[] = [];

                if (fetchedRooms.length > 0) {
                    finalRooms = [...fetchedRooms];
                } else {
                    // If API response is empty, fill with 8 fake rooms
                    const numberOfFakeRooms = 8;
                    for (let i = 0; i < numberOfFakeRooms; i++) {
                        finalRooms.push({
                            ...baseFakeRoom,
                            roomID: `fake_${Math.random().toString(36).substring(2, 15)}` // Generate unique ID for fake rooms
                        });
                    }
                }

                setRoomsArray(finalRooms);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []); // Empty dependency array means this effect runs once on mount

    return { roomsArray, loading, error };
}
