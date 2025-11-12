import React, { useState } from 'react';
import './paymentPages.css';
 

const OrderSummary = () => (
    <div className="order-summary-card">
        <div className="tour-info-summary">
            <img 
                src="assets/full_day_sheki_tour.jpg" 
                alt="Full day Tour to Sheki" 
                className="summary-tour-image"
            />
            <div className="summary-details">
                <h3 className="summary-title">Full day Tour to Sheki: 4 regions of Azerbaijan in 1 day</h3>
                <div className="summary-rating">
                    <span className="rating-stars">★★★★★</span> 4.5 (53)
                </div>
            </div>
        </div>

        <ul className="summary-meta-list">
            <li>
                <span className="icon">🌍</span> Language: English
            </li>
            <li>
                <span className="icon">📅</span> Tuesday, September 9, 2025 at 8:00 AM
            </li>
            <li>
                <span className="icon">👤</span> 1 adult
            </li>
            <li className="link-item">
                <span className="icon">✏️</span> <a href="#">Change date or participants</a>
            </li>
            <li className="free-cancellation-item">
                <span className="icon">✅</span> Free cancellation 
                <p className="cancellation-note">Until 8:00 AM on September 8</p>
            </li>
            <li className="link-item">
                <span className="icon">🎁</span> <a href="#">Enter promo or gift code</a>
            </li>
        </ul>

        <div className="summary-price-footer">
            <span className="summary-price-label">Price</span>
            <span className="summary-price-value">$79.00</span>
        </div>
    </div>
);

 

const BookingSteps = ({ currentStep }) => {
    const steps = [
        { id: 1, title: 'Activity' },
        { id: 2, title: 'Contact' },
        { id: 3, title: 'Payment' },
    ];

    return (
        <div className="booking-steps-container">
            <h1 className="main-booking-title">Complete Your Booking</h1>
            <div className="steps-progress-bar">
                {steps.map((step) => (
                    <React.Fragment key={step.id}>
                        <div className={`step-item ${currentStep >= step.id ? 'active' : ''} ${currentStep === step.id ? 'current' : ''}`}>
                            <div className="step-circle">{step.id}</div>
                            <span className="step-title">{step.title}</span>
                        </div>
                        {step.id < 3 && <div className={`step-line ${currentStep > step.id ? 'active' : ''}`}></div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
 

const BookingSummaryScreen = ({ setStep }) => (
    <div className="booking-summary-screen screen">
        <h1 className="main-booking-title">Booking</h1>
        <div className="booking-card-wrapper">
            <OrderSummary />
        </div>
        
        <button className="confirm-order-button" onClick={() => setStep(1)}>
            Confirm the order
        </button>
    </div>
);

 

const PickupSelectionScreen = ({ setStep }) => (
    <div className="pickup-selection-screen screen">
        <BookingSteps currentStep={1} />
        
        <div className="step-content-layout">
            <div className="step-left-panel">
                <h2 className="step-question">Do you know where you want to be picked up?</h2>
                <div className="radio-options">
                    <label className="radio-label">
                        <input type="radio" name="pickup" defaultChecked />
                        Yes, I can add it now
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="pickup" />
                        I don't know yet
                    </label>
                </div>
                
                <button className="next-button" onClick={() => setStep(2)}>
                    Next
                </button>
            </div>

            <div className="step-right-panel">
                <OrderSummary />
            </div>
        </div>
    </div>
);
 

const ContactDetailsScreen = ({ setStep }) => (
    <div className="contact-details-screen screen">
        <BookingSteps currentStep={2} />
        
        <div className="step-content-layout">
            <div className="step-left-panel">
                <h2 className="step-question">Enter your personal details</h2>
                
                <form className="contact-form">
                    <input type="text" placeholder="Full name*" required />
                    <input type="email" placeholder="Email*" required />
                    
                    <div className="country-dropdown">
                        <select defaultValue="Azerbaijan (+994)">
                            <option>Azerbaijan (+994)</option>
                            <option>Turkey (+90)</option>
                        </select>
                    </div>

                    <input type="tel" placeholder="Phone*" required />
                </form>
                
                <button className="next-button" onClick={() => setStep(3)}>
                    Next
                </button>
            </div>

            <div className="step-right-panel">
                <OrderSummary />
            </div>
        </div>
    </div>
);
 

const PaymentScreen = ({ setStep }) => (
    <div className="payment-screen screen">
        <BookingSteps currentStep={3} />
        
        <div className="step-content-layout">
            <div className="step-left-panel">
                <h2 className="step-question">Select a payment method</h2>
                
                <div className="payment-methods">
                    <div className="payment-option paypal-option">
                        <label>
                            <input type="radio" name="payment-method" />
                            PayPal
                        </label>
                        <img src="assets/paypal_logo.png" alt="PayPal" />
                    </div>
                    
                    <div className="payment-option googlepay-option">
                        <label>
                            <input type="radio" name="payment-method" />
                            Google Pay
                        </label>
                        <img src="assets/google_pay_logo.png" alt="Google Pay" />
                    </div>
                    
                    <div className="payment-option card-option active">
                        <label>
                            <input type="radio" name="payment-method" defaultChecked />
                            Debit or credit card
                        </label>
                        <div className="card-input-group">
                            <input type="text" placeholder="1234 5678 1234 5678" className="card-number-input" />
                            <div className="card-logos">
                                {/* Kart loqoları placeholder */}
                                <img src="assets/visa_logo.png" alt="Visa" />
                                <img src="assets/mastercard_logo.png" alt="Mastercard" />
                            </div>
                            <div className="card-bottom-row">
                                <input type="text" placeholder="MM/YY" className="expiry-input" />
                                <input type="text" placeholder="CVV" className="cvv-input" />
                            </div>
                            <input type="text" placeholder="Name and surname" />
                        </div>
                    </div>
                </div>
                
                <button className="next-button" onClick={() => setStep('complete')}>
                    Next
                </button>
            </div>

            <div className="step-right-panel summary-with-security">
                <span className="ssl-secured">SSL Secured</span>
                <OrderSummary />
            </div>
        </div>
    </div>
);
 

const BookingCompleteScreen = () => (
    <div className="booking-complete-screen screen">
        <div className="completion-box">
            <span className="success-icon">🎉</span>
            <h1 className="completion-title">Booking Complete!</h1>
            <p className="completion-message">Your order for 'Full day Tour to Sheki' has been confirmed. A confirmation email with all details has been sent to your inbox.</p>
            <p className="completion-thanks">Thank you for choosing SmartTour!</p>
            <button className="continue-button">Continue Exploring</button>
        </div>
    </div>
);
 
const PaymentPages = () => { 
    const [step, setStep] = useState(0); 

    const renderStep = () => {
        switch (step) {
            case 0:
                return <BookingSummaryScreen setStep={setStep} />;
            case 1:
                return <PickupSelectionScreen setStep={setStep} />;
            case 2:
                return <ContactDetailsScreen setStep={setStep} />;
            case 3:
                return <PaymentScreen setStep={setStep} />;
            case 'complete':
                return <BookingCompleteScreen />;
            default:
                return <BookingSummaryScreen setStep={setStep} />;
        }
    };

    return (
        <div className="booking-process-wrapper"> 
            {renderStep()}
        </div>
    );
};

export default PaymentPages;