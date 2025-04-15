import Header from "../../features/Header/Header"
import useCloseModalOnPageLoad from "../../features/Modal/hooks/useCloseModalOnPageLoad"
import Modal from "../../features/Modal/Modal"
import StreamChat from "../../features/StreamChat/StreamChat"
import StreamPanel from "../../features/StreamPanel/StreamPanel"
import useScrollToTop from "../../hooks/useScrollToTop"


export default function StreamPage (
    {isAuth, credits, modalKey, setModalKey}:SessionProps & SetModalProps & ReadModalProps
) {

    document.title = "ThirstyOasis - Stream"

    useScrollToTop();
    useCloseModalOnPageLoad(setModalKey);

    return (
        <div className="container">

            <Modal modalKey={modalKey} setModalKey={setModalKey}/>

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