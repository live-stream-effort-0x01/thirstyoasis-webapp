import { useState } from 'react';
import useFixStylesheetOrder from '../../hooks/useFixStylesheetOrder';
import Header from '../../features/Header/Header';
import ProfileSettingsTabs from '../../features/ProfileSettings/ProfileSettingsTabs';
import renderTabContent from '../../features/ProfileSettings/utils/renderTabContent';
import Modal from '../../features/Modal/Modal';
import useScrollToTop from '../../hooks/useScrollToTop';
import useCloseModalOnPageLoad from '../../features/Modal/hooks/useCloseModalOnPageLoad';



export default function ProfilePage({ isAuth, setIsAuth, credits, modalKey, setModalKey }: SessionProps & setAuthProps & ModalProps) {
    const [activeTab, setActiveTab] = useState<ProfileSettingsTab>('profile'); // State for active tab

    document.title = isAuth ? 'ThirstyOasis' : 'Profile Page';

    useFixStylesheetOrder();
    useScrollToTop();
    useCloseModalOnPageLoad(setModalKey);

    return (
        <div className="profile-page">
            <Header isAuth={isAuth} setIsAuth={setIsAuth}  credits={credits} modalKey={modalKey} setModalKey={setModalKey}/>

            <Modal modalKey={modalKey} setModalKey={setModalKey} />

            <div className="tabs-container">
                <ProfileSettingsTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

                <div className="tab-content">{renderTabContent(activeTab)}</div>
            </div>
            
        </div>
    );
}