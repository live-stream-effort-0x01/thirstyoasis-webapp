
export default function ({activeTab, setActiveTab}: ProfileSettingsTabProps) {
    return (
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
        </div>
    )
}