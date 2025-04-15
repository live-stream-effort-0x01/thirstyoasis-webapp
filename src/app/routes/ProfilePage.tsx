import { useState } from 'react';
import useFixStylesheetOrder from '../../hooks/useFixStylesheetOrder';
import Header from '../../features/Header/Header';
import ProfileSettingsTabs from '../../features/ProfileSettings/ProfileSettingsTabs';
import renderTabContent from '../../features/ProfileSettings/utils/renderTabContent';



export default function ProfilePage({ isAuth, credits, modalKey, setModalKey }: SessionProps & ModalProps) {
    const [activeTab, setActiveTab] = useState<ProfileSettingsTab>('profile'); // State for active tab

    document.title = isAuth ? 'ThirstyOasis' : 'Profile Page';

    useFixStylesheetOrder();

    return (
        <div className="profile-page">
            <Header isAuth={isAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey}/>

            <ProfileSettingsTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

            <div className="tab-content">{renderTabContent(activeTab)}</div>
            
        </div>
    );
}