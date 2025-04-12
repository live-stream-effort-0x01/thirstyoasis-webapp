import Header from "../../features/Header/Header"
import StreamChat from "../../features/StreamChat/StreamChat"
import StreamPanel from "../../features/StreamPanel/StreamPanel"


export default function StreamPage ({isAuth, credits, modalKey, setModalKey}:SessionProps & ModalProps) {

    document.title = "ThirstyOasis - Stream"

    return (
        <div className="container">
            <Header isAuth={isAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey}/>

            <main className="stream-main">

                <div className="content-container">

                    <StreamPanel/>

                    <StreamChat credits={credits}/>

                </div>

            </main>
        </div>
    )
}