import { useState, ChangeEvent } from 'react';
import { MODALS } from '../config/modalsConfig';
import closeModal from '../utils/closeModal';
import { useAuth } from '../../../hooks/useAuth';
import formatUSPhoneNumber from '../../../utils/formatUSPhoneNumber';

const steps = ['Personal Info', 'Role', 'Summary'];

export default function Signup() {
  const { signup } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  const isPersonalInfoValid = email !== '' && password !== '' && month !== '' && day !== '' && year !== '' && phone !== '';
  const isRoleValid = role !== '';
  const isSubmitEnabled = currentStep === steps.length - 1 && isPersonalInfoValid && isRoleValid;

  const handleNext = () => {
    if (currentStep === 0 && !isPersonalInfoValid) {
      alert('Please fill in all personal information.');
      return;
    }
    if (currentStep === 1 && !isRoleValid) {
      alert('Please select a role.');
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (
      stepIndex < currentStep ||
      (stepIndex === currentStep + 1 &&
        ((currentStep === 0 && isPersonalInfoValid) || (currentStep === 1 && isRoleValid))) ||
      (currentStep === 2 && stepIndex < currentStep)
    ) {
      setCurrentStep(stepIndex);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSubmitEnabled) {
      alert('Please fill in all required information.');
      return;
    }
    try {
      await signup(email, password);
      closeModal(MODALS.SIGNUP.id);
    } catch (error) {
      console.error(error as Error);
      alert((error as Error).message);
    }
  };

  return (
    <div id={MODALS.SIGNUP.id} className="overlay">
      <div className="modal-content-auth">
        {/* Close Button */}
        <span className="close" onClick={() => closeModal(MODALS.SIGNUP.id)}>
          ×
        </span>

        {/* Sidebar */}
        <div className="signup-sidebar">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`sidebar-tab ${currentStep === index ? 'active' : ''}`}
              onClick={() => goToStep(index)}
            >
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
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                name="signup-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                name="signup-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="signup-dob">Date of Birth</label>
              <div className="dob">
                <input
                  type="text"
                  id="signup-month"
                  name="signup-month"
                  required
                  placeholder="Month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
                <input
                  type="number"
                  id="signup-day"
                  name="signup-day"
                  required
                  placeholder="Day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
                <input
                  type="number"
                  id="signup-year"
                  name="signup-year"
                  required
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <label htmlFor="signup-phone">Phone Number</label>
              <input
                type="tel"
                id="signup-phone"
                name="signup-phone"
                required
                placeholder="Phone Number"
                value={formatUSPhoneNumber(phone)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  // Remove the '+1 ' prefix and then all non-digit characters
                  let inputDigits = e.target.value.startsWith('+1 ')
                    ? e.target.value.substring(3).replace(/[^\d]/g, '')
                    : e.target.value.replace(/[^\d]/g, '');

                  // Cap the inputDigits at 10 to ensure we only store the relevant part of the phone number
                  inputDigits = inputDigits.slice(0, 10);

                  setPhone(inputDigits);
                }}
              />
            </div>
          )}
          {currentStep === 1 && (
            <div>
              <h3>Select Your Role</h3>
              <div className="role-options">
                <button
                  className={`role-card ${role === 'streamer' ? 'selected' : ''}`}
                  onClick={() => setRole('streamer')}
                >
                  <h4>I am a Streamer</h4>
                  <p>Share your content and connect with your audience.</p>
                </button>
                <button
                  className={`role-card ${role === 'audience' ? 'selected' : ''}`}
                  onClick={() => setRole('audience')}
                >
                  <h4>I am here to have Audience</h4>
                  <p>Share your content and interact with streamers.</p>
                </button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <h3>Summary</h3>
              <p>Review your details before submitting:</p>
              <div className="summary-container">
                <div className="summary-card">
                  <h4>Email</h4>
                  <p>{email}</p>
                  <h4>Date of Birth</h4>
                  <p>{month}/{day}/{year}</p>
                  <h4>Phone Number</h4>
                  <p>{phone}</p>
                  <h4>Role</h4>
                  <p>{role.toUpperCase()}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="signup-navigation">
          <button onClick={handleBack} disabled={currentStep === 0}>
            Back
          </button>
          {currentStep < steps.length - 1 && (
            <button onClick={handleNext} disabled={currentStep === 0 ? !isPersonalInfoValid : !isRoleValid}>
              Next
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <form onSubmit={handleSubmit}>
              <button type="submit" className="submit-btn" disabled={!isSubmitEnabled}>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
