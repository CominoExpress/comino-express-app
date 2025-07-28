import React, { useState } from 'react';
import { db } from '../../firebase/config';
import Header from '../common/Header';
import './ValidatorDashboard.css';
import { FaShip, FaTicketAlt } from 'react-icons/fa';

function ValidatorDashboard() {
  const [ticketCode, setTicketCode] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleValidation = async (e) => {
    e.preventDefault();
    setLoading(true);
    // ... resto del codice di validazione
  };

  return (
    <div className="validator-dashboard">
      <Header />
      <div className="validator-content">
        <div className="logo-container">
          <div className="app-logo-text">
            <FaShip size={48} color="#435bcc" />
            <h1 style={{ color: '#435bcc', margin: '10px 0', fontSize: '24px' }}>
              COMINO EXPRESS
            </h1>
            <FaTicketAlt size={24} color="#435bcc" />
          </div>
        </div>
        
        <div className="validation-form">
          <h2>Validazione Biglietti</h2>
          <form onSubmit={handleValidation}>
            <input
              type="text"
              value={ticketCode}
              onChange={(e) => setTicketCode(e.target.value)}
              placeholder="Inserisci il codice del biglietto"
              className="ticket-input"
            />
            <button 
              type="submit" 
              className="validate-button"
              disabled={loading}
            >
              {loading ? 'Validazione...' : 'Valida Biglietto'}
            </button>
          </form>

          {validationResult && (
            <div className={`validation-result ${validationResult.valid ? 'valid' : 'invalid'}`}>
              {validationResult.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ValidatorDashboard; 