export default function ProfileSubscription() {

    return (
        <div className="subscription-card profile-tab-card">
            <div className="subscription-header">
                <p>Current Subscription</p>
            </div>
            <div className="subscription-content">
                <p>12 Months</p>
                <p>Features/Benefits</p>
                <ul>
                  <li>Unlimited access to all content</li>
                  <li>Exclusive content</li>
                  <li>Early access to new releases</li>
                  <li>Priority customer support</li>
                </ul>
                <p>Next billing date: <span>12/12/2023</span></p>
            </div>
            <div className="subscription-buttons-container">
                <button className="change-subscription-btn">Cancel Subscription</button>
                <button className="cancel-plan-btn">Change Plan</button>
            </div>
        </div>
    );
}