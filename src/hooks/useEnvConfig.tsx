import { useMemo } from 'react';

const useEnvConfigs = () => {
  const apiUrls = useMemo(() => {
    // Base URLs for different services
    const roomManagerBaseUrl = process.env.REACT_APP_ROOM_MANAGER_BASE_URL || process.env.VITE_ROOM_MANAGER_BASE_URL || 'http://localhost:3001/api';
    const messengerServiceBaseUrl = process.env.REACT_APP_MESSENGER_SERVICE_BASE_URL || process.env.VITE_MESSENGER_SERVICE_BASE_URL || 'http://localhost:3002/api';
    
    return {
      // Base URLs
      roomManagerBase: roomManagerBaseUrl,
      messengerServiceBase: messengerServiceBaseUrl,
      
      // Room Manager API endpoints (Public Rooms)
      createPublicRoomUrl: process.env.REACT_APP_CREATE_PUBLIC_ROOM_URL || process.env.VITE_CREATE_PUBLIC_ROOM_URL || `${roomManagerBaseUrl}/rooms/public/create`,
      getPublicRoomsUrl: process.env.REACT_APP_GET_PUBLIC_ROOMS_URL || process.env.VITE_GET_PUBLIC_ROOMS_URL || `${roomManagerBaseUrl}/rooms/public`,
      getSinglePublicRoomUrl: process.env.REACT_APP_GET_SINGLE_PUBLIC_ROOM_URL || process.env.VITE_GET_SINGLE_PUBLIC_ROOM_URL || `${roomManagerBaseUrl}/rooms/public`,
      
      // Room Manager API endpoints (Private Rooms)
      createPrivateRoomUrl: process.env.REACT_APP_CREATE_PRIVATE_ROOM_URL || process.env.VITE_CREATE_PRIVATE_ROOM_URL || `${roomManagerBaseUrl}/rooms/private/create`,
      getPrivateRoomsUrl: process.env.REACT_APP_GET_PRIVATE_ROOMS_URL || process.env.VITE_GET_PRIVATE_ROOMS_URL || `${roomManagerBaseUrl}/rooms/private`,
      getSinglePrivateRoomUrl: process.env.REACT_APP_GET_SINGLE_PRIVATE_ROOM_URL || process.env.VITE_GET_SINGLE_PRIVATE_ROOM_URL || `${roomManagerBaseUrl}/rooms/private`,
      
      // Messenger Service API endpoints
      chatConnectionUrl: process.env.REACT_APP_CHAT_CONNECTION_URL || process.env.VITE_CHAT_CONNECTION_URL || `${messengerServiceBaseUrl}/chat/conn`,
      
      // External APIs
      thirdPartyApi: process.env.REACT_APP_THIRD_PARTY_API || process.env.VITE_THIRD_PARTY_API,
    };
  }, []);

  return apiUrls;
};

export default useEnvConfigs;