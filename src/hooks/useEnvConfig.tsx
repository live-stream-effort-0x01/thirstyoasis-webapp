import { useMemo } from 'react';

const useEnvConfigs = () => {
  const apiUrls = useMemo(() => {
    // Base URLs for different services
    const roomManagerBaseUrl = import.meta.env.VITE_ROOM_MANAGER_BASE_URL || 'http://localhost:3001/api';
    const messengerServiceBaseUrl = import.meta.env.VITE_MESSENGER_SERVICE_BASE_URL || 'http://localhost:3002/api';
    
    return {
      // Base URLs
      roomManagerBase: roomManagerBaseUrl,
      messengerServiceBase: messengerServiceBaseUrl,
      
      // Room Manager API endpoints (Public Rooms)
      createPublicRoomUrl: import.meta.env.VITE_CREATE_PUBLIC_ROOM_URL || 'https://dev-room-manager.demothesoftwarepls.site/api/v1/room/public/create',
      getPublicRoomsUrl: import.meta.env.VITE_GET_PUBLIC_ROOMS_URL || `${roomManagerBaseUrl}/rooms/public`,
      getSinglePublicRoomUrl: import.meta.env.VITE_GET_SINGLE_PUBLIC_ROOM_URL || `${roomManagerBaseUrl}/rooms/public`,
      joinPublicRoomUrl: import.meta.env.VITE_JOIN_PUBLIC_ROOM_URL || 'https://dev-room-manager.demothesoftwarepls.site/api/v1/room/public',
      
      // Room Manager API endpoints (Private Rooms)
      createPrivateRoomUrl: import.meta.env.VITE_CREATE_PRIVATE_ROOM_URL || `${roomManagerBaseUrl}/rooms/private/create`,
      getPrivateRoomsUrl: import.meta.env.VITE_GET_PRIVATE_ROOMS_URL || `${roomManagerBaseUrl}/rooms/private`,
      getSinglePrivateRoomUrl: import.meta.env.VITE_GET_SINGLE_PRIVATE_ROOM_URL || `${roomManagerBaseUrl}/rooms/private`,
      
      // Messenger Service API endpoints
      chatConnectionUrl: import.meta.env.VITE_CHAT_CONNECTION_URL || `${messengerServiceBaseUrl}/chat/conn`,
      
      // External APIs
      thirdPartyApi: import.meta.env.VITE_THIRD_PARTY_API,
    };
  }, []);

  return apiUrls;
};

export default useEnvConfigs;