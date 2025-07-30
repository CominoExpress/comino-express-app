import React from 'react';
import { useParams } from 'react-router-dom';

function TicketPageDebug() {
  const { ticketCode } = useParams();
  
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', minHeight: '100vh' }}>
      <h1>🎫 Ticket Page Debug</h1>
      <p><strong>Ticket Code:</strong> {ticketCode || 'Nessun codice trovato'}</p>
      <p><strong>URL:</strong> {window.location.href}</p>
      <p><strong>Timestamp:</strong> {new Date().toLocaleString()}</p>
      <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px' }}>
        Se vedi questo messaggio, il routing funziona!
      </div>
    </div>
  );
}

export default TicketPageDebug; 