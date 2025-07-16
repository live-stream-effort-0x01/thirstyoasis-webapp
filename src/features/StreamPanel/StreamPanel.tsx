import { LiveKitRoom, RoomAudioRenderer, useLocalParticipant, useRemoteParticipants } from '@livekit/components-react';
import { Track } from 'livekit-client';
import { useEffect, useState, useRef } from 'react';
import '@livekit/components-styles';

interface StreamPanelProps {
    serverUrl: string | undefined;
    token: string | undefined;
}

export default function StreamPanel({ serverUrl, token }: StreamPanelProps) {
    const [isLiveKitConnected, setIsLiveKitConnected] = useState(false);

    useEffect(() => {
        if (token && serverUrl) {
            setIsLiveKitConnected(true);
        } else {
            setIsLiveKitConnected(false);
        }
    }, [token, serverUrl]);

    return (
        <>
            <section className="video-player">
                <div className="video-header">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <LiveKitRoom
                    serverUrl={serverUrl}
                    token={token}
                    audio={false} // Mute audio for autoplay
                    video={true}
                    onConnected={() => console.log("LiveKitRoom connected in StreamPanel! Status:", { isLiveKitConnected, token: !!token, serverUrl: !!serverUrl })}
                    onDisconnected={() => console.log("LiveKitRoom disconnected in StreamPanel!")}
                >
                    {isLiveKitConnected ? (
                        <LiveKitContent />
                    ) : (
                        <div style={{ color: 'white', textAlign: 'center', padding: '20px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            Connecting to LiveKit...
                            <br />
                            Server URL: {serverUrl ? 'Provided' : 'Not Provided'}
                            <br />
                            Token: {token ? 'Provided' : 'Not Provided'}
                        </div>
                    )}
                </LiveKitRoom>
            </section>

            <section className="stream-info">
                <div className="profile-details">
                    <img src="https://th.bing.com/th/id/OIP.c2-_4t1v3AnqKvnZwRox8QHaHa?rs=1&pid=ImgDetMain" alt="Profile Icon" className="profile-avatar" />
                    <div className="profile-text">
                        <h2 className="profile-name">Pestily <i className="fa-solid fa-circle-check"></i></h2>
                        <p className="profile-description">5 day subathon! pc giveaway for each day live!</p>
                        <div className="profile-tags">
                            <span className="tag">Gaming</span>
                            <span className="tag">FPS</span>
                            <span className="tag">Tarkov</span>
                        </div>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="action-btn private-call-btn">
                        <i className="fa-solid fa-video"></i>
                        <span>Private Call</span>
                    </button>
                    <button className="action-btn follow-btn">
                        <i className="fa-solid fa-heart"></i>
                        <span>Follow</span>
                    </button>
                    <button className="action-btn subscribe-btn">
                        <i className="fa-solid fa-star"></i>
                        <span>Subscribe</span>
                    </button>
                </div>
            </section>

            <section className="stream-description">
                <h3>About this Stream</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ipsum vulputate, imperdiet libero in, blandit libero. Vestibulum ex ligula, ullamcorper sed sapien vel, venenatis vulputate purus. Maecenas sed placerat sapien, ut laoreet odio. Nulla leo diam, tristique eget erat volutpat, tincidunt lacinia arcu.</p>
            </section>
        </>
    );
}

function LiveKitContent() {
    const remoteParticipants = useRemoteParticipants();
    const localParticipant = useLocalParticipant();

    let displayParticipant = null;
    let cameraPublication = null;
    let screenSharePublication = null;


    // Prioritize local participant's camera if available
    if (localParticipant.localParticipant) {
        cameraPublication = localParticipant.localParticipant.trackPublications.get(Track.Source.Camera);
        screenSharePublication = localParticipant.localParticipant.trackPublications.get(Track.Source.ScreenShare);
        if (cameraPublication?.isSubscribed || screenSharePublication?.isSubscribed) {
            displayParticipant = localParticipant.localParticipant;
        }
    }

    // If no local video, check remote participants
    if (!displayParticipant && remoteParticipants.length > 0) {
        displayParticipant = remoteParticipants[0];
        cameraPublication = displayParticipant.trackPublications.get(Track.Source.Camera);
        screenSharePublication = displayParticipant.trackPublications.get(Track.Source.ScreenShare);
    }


    let videoTrackRef = null;

    if (displayParticipant) {
        // Try to find a screen share track first
        for (const [, publication] of displayParticipant.trackPublications) {
            if (publication.source === Track.Source.ScreenShare) {
                if (publication.isSubscribed) {
                    videoTrackRef = {
                        participant: displayParticipant,
                        publication: publication,
                        source: Track.Source.ScreenShare,
                    };
                    break;
                } else {
                }
            }
        }

        // If no screen share, try to find a camera track
        if (!videoTrackRef) {
            for (const [, publication] of displayParticipant.trackPublications) {
                if (publication.source === Track.Source.Camera) {
                    console.log("LiveKitContent - Found potential camera publication. isSubscribed:", publication.isSubscribed);
                    if (publication.isSubscribed) {
                        videoTrackRef = {
                            participant: displayParticipant,
                            publication: publication,
                            source: Track.Source.Camera,
                        };
                        break;
                    } 
                }
            }
        }
    }


    const videoElementRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoElementRef.current && videoTrackRef?.publication?.track) {
            const mediaStream = new MediaStream([videoTrackRef.publication.track.mediaStreamTrack]);
            videoElementRef.current.srcObject = mediaStream;
            videoElementRef.current.play().catch((e: any) => console.error("Error playing video:", e));
        } else if (videoElementRef.current) {
            videoElementRef.current.pause();
            videoElementRef.current.srcObject = null;
        }
    }, [videoTrackRef]);

    return (
        <>
            <div className="video-display-container">
                {videoTrackRef ? (
                    <video ref={videoElementRef} className="fixed-size-video" autoPlay playsInline muted />
                ) : (
                    <div className="video-placeholder">
                        Waiting for video or screen share...
                    </div>
                )}
            </div>
            <RoomAudioRenderer />
        </>
    );
}
