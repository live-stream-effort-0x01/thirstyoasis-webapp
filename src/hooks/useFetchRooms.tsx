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

                const data = await response.json();
                // Ensure data is an array, otherwise default to an empty array
                setRoomsArray(Array.isArray(data) ? data : []);
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
