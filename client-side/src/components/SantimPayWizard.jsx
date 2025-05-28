import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SantimPayStep1 from './SantimPayStep1';
import SantimPayStep2 from './SantimPayStep2';
import SantimPayConfirm from './SantimPayConfirm';

function SantimPayWizard() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [partner, setPartner] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const donationData = {
    name: location.state?.name,
    amount: location.state?.amount,
    partner,
    inputValue,
    method: partner?.id ,
      donationId: location.state?.donationId 
  };

  const next = (input) => {
    if (input) setInputValue(input);
    setStep((s) => s + 1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>💳 ArifPay Donation</h1>
        <p style={styles.stepText}>Step {step} of 3</p>

        {step === 1 && <SantimPayStep1 onNext={next} setPartner={setPartner} />}
        {step === 2 && (
          <SantimPayStep2
            partner={partner}
            onNext={next} />)}
        {step === 3 && <SantimPayConfirm donationData={donationData}/>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px 40px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    fontSize: '26px',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#222',
  },
  stepText: {
    fontSize: '14px',
    color: '#777',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default SantimPayWizard;
