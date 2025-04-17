import { useState } from 'react'
import { MODALS } from '../config/modalsConfig'
import closeModal from '../utils/closeModal'

const steps = ['Personal Info', 'Role', 'Summary']

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(0) // Track the current step

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1) // Move to the next step
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1) // Move to the previous step
    }
  }

  return (
    <div id={MODALS.SIGNUP.id} className="overlay">
      <div className="modal-content-auth">
        {/* Close Button */}
        <span className="close" onClick={() => closeModal(MODALS.SIGNUP.id)}>
          &times;
        </span>

        {/* Sidebar */}
        <div className="signup-sidebar">
          {steps.map((step, index) => (
            <div key={index} className={`sidebar-tab ${currentStep === index ? 'active' : ''}`}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="signup-step-content">
          {currentStep === 0 && (
            <div>
              <h3>Personal Info</h3>
              <label htmlFor="signup-username">Username</label>
              <input type="text" id="signup-username" name="signup-username" required />

              <label htmlFor="signup-password">Password</label>
              <input type="password" id="signup-password" name="signup-password" required />
              <label htmlFor="signup-dob">Date of Birth</label>

              <div className="dob">
                <input type="text" id="signup-month" name="signup-month" required placeholder="Month" />
                <input type="number" id="signup-day" name="signup-day" required placeholder="Day" />
                <input type="number" id="signup-year" name="signup-year" required placeholder="Year" />
              </div>

              <label htmlFor="signup-phone">Phone Number</label>
              <input type="tel" id="signup-phone" name="signup-phone" required placeholder="Phone Number" />
            </div>
          )}
          {currentStep === 1 && (
            <div>
              <h3>Select Your Role</h3>
              <div className="role-options">
                <div className="role-card">
                  <h4>I am a Streamer</h4>
                  <p>Share your content and connect with your audience.</p>
                </div>
                <div className="role-card">
                  <h4>I am here to have Fun</h4>
                  <p>Enjoy premium content and interact with streamers.</p>
                </div>
              </div>
            </div>
          )}
          {currentStep === 2 && (
       <div>
       <h3>Summary</h3>
       <p>Review your details before submitting:</p>
       <div className="summary-container">
         <div className="summary-card">
           <h4>Username</h4>
           <p>[Your Username]</p>

           <h4>Date of Birth</h4>
           <p>[Your DOB]</p>

           <h4>Phone Number</h4>
           <p>[Your Phone Number]</p>

           <h4>Role</h4>
           <p>[Your Role]</p>

           <h4>Plan</h4>
           <p>[Your Selected Plan]</p>
         </div>
       </div>
     </div>
          )}

          {/* Navigation Buttons */}
          <div className="signup-navigation">
            <button onClick={handleBack} disabled={currentStep === 0}>
              Back
            </button>
            {currentStep < steps.length - 1 ? (
              <button onClick={handleNext}>Next</button>
            ) : (
              <button type="submit" className="submit-btn">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
