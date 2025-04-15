import ProfileDetails from "../SettingsViews/ProfileDetails";
import ProfilePayment from "../SettingsViews/ProfilePayment";
import ProfileSecurity from "../SettingsViews/ProfileSecurity";
import ProfileSubscription from "../SettingsViews/ProfileSubscription";


export default function renderTabContent(activeTab: ProfileSettingsTab) {
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