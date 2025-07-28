import React from 'react';
import './Legal.css';

const TermsOfService = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Termini di Servizio</h1>
        
        {/* 
        CONTENUTO TERMINI DI SERVIZIO DISABILITATO PER COMINO EXPRESS
        
        <div className="section">
          <h2>PANORAMICA</h2>
          <p>Questo sito web è gestito da Comino EXPRESS. Nel quadro del sito web, i termini "noi", "ci" e "nostro" si riferiscono a Comino EXPRESS. Comino EXPRESS offre questo sito web, comprese tutte le informazioni, gli strumenti e i Servizi disponibili su questo sito per te, l'Utente, a condizione che tu accetti tutti i termini, le condizioni, le
          ... (resto del contenuto commentato)
        </div>
        */}
        
        <div className="section">
          <p><strong>Termini di Servizio temporaneamente non disponibili</strong></p>
          <p>I Termini di Servizio per Comino EXPRESS sono in fase di aggiornamento.</p>
          <p>Per informazioni sui termini di utilizzo, contattare: support@cominoexpress.com</p>
        </div>

        <div className="navigation-buttons">
          <button onClick={() => window.history.back()}>Torna Indietro</button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;