import React, { useState, useEffect, useCallback } from 'react';
import { RoomOptions, VideoPresets } from 'livekit-client';

import Header from "../../features/Header/Header"
import { useAuth } from "../../hooks/useAuth";
import useCloseModalOnPageLoad from "../../features/Modal/hooks/useCloseModalOnPageLoad"
import Modal from "../../features/Modal/Modal"
import StreamChat from "../../features/StreamChat/StreamChat"
import StreamPanel from "../../features/StreamPanel/StreamPanel"
import useScrollToTop from "../../hooks/useScrollToTop"
import useEnvConfigs from "../../hooks/useEnvConfig";


export default function StreamPage(
    { isAuth, setIsAuth, credits, modalKey, setModalKey }: SessionProps & setAuthProps & SetModalProps & ReadModalProps
) {
    const [token, setToken] = useState<string | undefined>(undefined);

    document.title = "ThirstyOasis - Stream";

    useScrollToTop();
    useCloseModalOnPageLoad(setModalKey);

    const { token: idToken } = useAuth(); // Get the Firebase ID token
    const { joinPublicRoomUrl } = useEnvConfigs();

    const livekitUrl = import.meta.env.VITE_LIVEKIT_URL;

    const roomOptions: RoomOptions = {
        adaptiveStream: true,
        dynacast: true,
        videoCaptureDefaults: {
            resolution: VideoPresets.h720.resolution,
        },
    };

    const fetchLiveKitToken = useCallback(async (roomName: string, participantName: string) => {
        if (!idToken) {
            console.error("Firebase ID token not available. Cannot fetch LiveKit token.");
            return;
        }

        if (!livekitUrl) {
            console.error("LiveKit URL is not defined in environment variables.");
            return;
        }

        const apiUrl = `${joinPublicRoomUrl}/${roomName}/join/${participantName}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${idToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Failed to fetch LiveKit token: ${response.status} ${response.statusText} - ${errorData.message || JSON.stringify(errorData)}`);
            }

            const livekitToken = await response.text();
            if (livekitToken) {
                setToken(livekitToken);
            } else {
                console.error("LiveKit token not found in API response.");
            }
        } catch (error) {
            console.error("Error fetching LiveKit token:", error);
            setToken(undefined);
        }
    }, [idToken, livekitUrl]);

    useEffect(() => {
        // For demonstration, using dummy room and participant names
        const roomName = "quandv"; // Example streamer ID/email
        const participantName = "thanh@gmail.com"; // Example viewer ID/email

        fetchLiveKitToken(roomName, participantName);
    }, [fetchLiveKitToken]);

    return (
        <div className="container">
            <Modal modalKey={modalKey} setModalKey={setModalKey} />
            <Header isAuth={isAuth} setIsAuth={setIsAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey} />
            <main className="stream-main">
                <div className="content-container">
                    <StreamPanel
                        serverUrl={livekitUrl}
                        token={token}
                        roomOptions={roomOptions}
                    />
                    <StreamChat
                        credits={credits}
                        serverUrl={livekitUrl}
                        token={token}
                    />
                </div>
            </main>
        </div>
    );
}
