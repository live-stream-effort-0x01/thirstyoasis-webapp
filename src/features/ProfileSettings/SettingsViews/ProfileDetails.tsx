import { useState } from 'react'
import avatar from '../../../assets/avatar.jpg'
import { Link } from 'react-router'
export default function ProfileDetails() {
  const [username, setUsername] = useState('Nix')
  const [email, setEmail] = useState('nixsmith@gmail.com')
  const [state, setState] = useState('Chicago, Illinois')
  const [phone, setPhone] = useState('+1-696-630-1344')
  const [birthday, setBirthday] = useState('September 11, 1990')
  const [about, setAbout] = useState("Just here to keep things a little steamy and support my favorite creators. Looking for exclusive content and maybe a few private moments... Let's see where this takes us.")

  return (
    <div className="profile-card profile-tab-card">
      <div className="profile-picture">
        <img src={avatar} alt="Profile Picture" />
        <div className='profile-picture-buttons'>
          <button className="profile-button">Change</button>
          <button className="profile-button profile-button-remove">Remove</button>
        </div>
      </div>

      <div className="profile-info">
        <div className="profile-tier">Tier ● Novice</div>
        <div className="profile-subscription">Subscription ● 12 Months</div>
      </div>

      <label htmlFor="profile-username">Username</label>
      <input type="text" id="profile-username" className="profile-input" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="profile-email">Email Address</label>
      <input type="email" id="profile-email" className="profile-input" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="profile-state">State</label>
      <input type="text" id="profile-state" className="profile-input" value={state} onChange={(e) => setState(e.target.value)} />

      <div className="profile-row">
        <div>
          <label htmlFor="profile-phone">Phone</label>
          <input type="text" id="profile-phone" className="profile-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="profile-birthday">Birthday</label>
          <input type="text" id="profile-birthday" className="profile-input" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        </div>
      </div>

      <label htmlFor="profile-about">About me</label>
      <textarea id="profile-about" className="profile-textarea" value={about} onChange={(e) => setAbout(e.target.value)}>
        Just here to keep things a little steamy and support my favorite creators. Looking for exclusive content and maybe a few private moments... Let's see where this takes us.
      </textarea>

      <div className="profile-buttons-container">
        <Link to="/">
            <button className="profile-btn-cancel">Cancel</button>
        </Link>
        <button className="profile-btn-save">Save Changes</button>
      </div>
    </div>
  )
}
