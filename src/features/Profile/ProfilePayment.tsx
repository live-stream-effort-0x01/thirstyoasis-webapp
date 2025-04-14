import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'
import paypal from '../../assets/paypal.png'
import wallet from '../../assets/wallet.png'


export default function ProfilePayment ({ isAuth, credits }: SessionProps){
  return (

  <div className="payment-card profile-tab-card">
    <div className="payment-header">
      <p>Payment Method</p>
    </div>
    <div className="four-grid">
      {/* VISA */}
      <div className="grid-item active">
        <img src={visa} alt="Visa" className="payment-logo" />
        <div className="card-info">
          <p className="card-number">XXXX XXXX XXX 4421</p>
          <p className="card-expiry">Expires <span>12/26</span></p>
        </div>
      </div>

      {/* Mastercard */}
      <div className="grid-item">
        <img src={mastercard} alt="Mastercard" className="payment-logo" />
        <div className="card-info">
          <p className="card-number">XXXX XXXX XXX 1738</p>
          <p className="card-expiry">Expires <span>01/25</span></p>
        </div>
      </div>

      {/* PayPal */}
      <div className="grid-item">
        <img src={paypal} alt="PayPal" className="payment-logo" />
        <div className="card-info">
          <p className="card-number">XXXX XXXX XXX 1326</p>
          <p className="card-expiry">Expires <span>02/24</span></p>
        </div>
      </div>

      {/* Add Method */}
      <div className="grid-item add-method">
        <img src={wallet} alt="Add Method" className="payment-logo" />
        <div className="card-info">
          <p className="card-number">Add Payment Method</p>
        </div>
      </div>
    </div>
  </div>

  )
}