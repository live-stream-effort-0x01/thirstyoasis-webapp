export default function ProfileSecurity({ isAuth, credits }: SessionProps) {
    return (
 
         <div className="security-card profile-tab-card">
          <div className="security-header">
            <p>Change Password</p>
          </div>

          <div className="security-form">
            <label htmlFor="current-password">Current Password</label>
            <input type="password" id="current-password" className="profile-input" placeholder="Enter current password" />

            <label htmlFor="new-password">New Password</label>
            <input type="password" id="new-password" className="profile-input" placeholder="Enter new password" />

            <label htmlFor="confirm-password">Confirm New Password</label>
            <input type="password" id="confirm-password" className="profile-input" placeholder="Confirm new password" />
         </div>
         <div className='security-info'>
          <p>Once deleted, your account and all associated data cannot be recovered. Proceed with caution.</p>
        </div>

        <div className="security-buttons">
          <button className='delete-account'>Delete Account</button>
        </div>

        <div className="security-buttons-container">
        <button className="security-btn-cancel">Cancel</button>
        <button className="security-btn-save">Save Changes</button>
      </div>
        </div>

    );
}