import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        
        {/* 
        CONTENUTO PRIVACY POLICY DISABILITATO PER COMINO EXPRESS
        
        <div className="section">
          <h2>1. Informazioni raccolte</h2>
          <p>La presente Informativa sulla privacy descrive come Comino EXPRESS (il "Sito", "noi", "ci" o "nostro") raccoglie, utilizza e divulga le tue informazioni personali quando visiti, utilizzi i nostri servizi o effettui un acquisto da Cominoexpress.com (il "Sito") o comunichi in altro modo con noi in merito al Sito (collettivamente, i "Servizi"). Ai fini della presente Informativa sulla privacy, "tu" e "tuo" indicano te come utente dei Servizi.</p>
        </div>
        */}
        
        <div className="section">
          <p><strong>Privacy Policy temporaneamente non disponibile</strong></p>
          <p>La Privacy Policy per Comino EXPRESS è in fase di aggiornamento.</p>
          <p>Per informazioni sulla privacy, contattare: support@cominoexpress.com</p>
        </div>

        <div className="navigation-buttons">
          <button onClick={() => window.history.back()}>Torna Indietro</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;