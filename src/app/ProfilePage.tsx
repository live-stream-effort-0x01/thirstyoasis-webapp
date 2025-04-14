import { useState } from 'react';
import useFixStylesheetOrder from '../hooks/useFixStylesheetOrder';
import Header from '../features/Header/Header';
import ProfileDetails from '../features/Profile/ProfileDetails';
import ProfileSecurity from '../features/Profile/ProfileSecurity';
import ProfilePayment from '../features/Profile/ProfilePayment';
import ProfileSubscription from '../features/Profile/ProfileSubscription';

export default function ProfilePage({ isAuth, credits }: SessionProps) {
    const [activeTab, setActiveTab] = useState('profile'); // State for active tab

    document.title = isAuth ? 'ThirstyOasis' : 'Profile Page';

    useFixStylesheetOrder();

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className='profile-tabs-container'>
                        <ProfileDetails />
                    </div>
                );
            case 'security':
                return (
                    <div className='profile-tabs-container'>
                      <ProfileSecurity />
                    </div>
                );
            case 'payment':
                return (
                    <div className='profile-tabs-container'>
                        <ProfilePayment />
                    </div>
                );
                case 'subscription':
                  return (
                      <div className='profile-tabs-container'>
                         <ProfileSubscription />
                      </div>
                  );
            default:
                return null;
        }
    };

    return (
        <div className="profile-page">
            <Header isAuth={isAuth} credits={credits} />
            <div className="tabs-container">
                <div className="tabs">
                    <button
                        className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Profile
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        Security
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'payment' ? 'active' : ''}`}
                        onClick={() => setActiveTab('payment')}
                    >
                        Payment Option
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'subscription' ? 'active' : ''}`}
                        onClick={() => setActiveTab('subscription')}
                    >
                        Subscription
                    </button>
                </div>
                <div className="tab-content">{renderTabContent()}</div>
            </div>
        </div>
    );
}