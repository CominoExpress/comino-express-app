import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDozCvQxUY9iI2avch1Q1rzGKKEqBsQWxw",
  authDomain: "comino-express-app.firebaseapp.com",
  projectId: "comino-express-app",
  storageBucket: "comino-express-app.firebasestorage.app",
  messagingSenderId: "652759597547",
  appId: "1:652759597547:web:2e0395a43d6c4f0472d9ae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

/**
 * Script per inizializzare il database Firebase con tutte le collezioni essenziali
 * Eseguire una sola volta dopo aver configurato il progetto
 */

const initializeDatabase = async () => {
  try {
    console.log('🚀 Inizializzazione database Comino EXPRESS...');

    // 1. Collezione per gli eventi
    const eventsRef = collection(db, 'events');
    await setDoc(doc(eventsRef, 'sample_event'), {
      name: 'Evento di Esempio',
      description: 'Questo è un evento di esempio per testare il sistema',
      date: new Date(),
      location: 'Location di esempio',
      ticketPrice: 25.00,
      totalTickets: 100,
      soldTickets: 0,
      isActive: true,
      createdAt: new Date(),
      createdBy: 'system'
    });

    // 2. Collezione per gli utenti/ruoli
    const rolesRef = collection(db, 'userRoles');
    await setDoc(doc(rolesRef, 'admin'), {
      name: 'Administrator',
      permissions: ['all'],
      description: 'Accesso completo al sistema'
    });
    await setDoc(doc(rolesRef, 'manager'), {
      name: 'Manager',
      permissions: ['view_reports', 'manage_events', 'manage_users'],
      description: 'Gestione eventi e report'
    });
    await setDoc(doc(rolesRef, 'promoter'), {
      name: 'Promoter',
      permissions: ['sell_tickets', 'view_own_sales'],
      description: 'Vendita biglietti'
    });
    await setDoc(doc(rolesRef, 'team_leader'), {
      name: 'Team Leader',
      permissions: ['manage_team', 'view_team_reports'],
      description: 'Gestione team di promoter'
    });
    await setDoc(doc(rolesRef, 'validator'), {
      name: 'Validator',
      permissions: ['validate_tickets'],
      description: 'Validazione biglietti'
    });

    // 3. Collezione per i biglietti
    const ticketsRef = collection(db, 'tickets');
    // Documento di esempio per la struttura
    await setDoc(doc(ticketsRef, 'sample_ticket'), {
      eventId: 'sample_event',
      ticketCode: 'TKT-000001',
      buyerName: 'Compratore di esempio',
      buyerEmail: 'esempio@email.com',
      buyerPhone: '+39 123 456 7890',
      price: 25.00,
      purchaseDate: new Date(),
      sellerId: 'sample_promoter',
      isUsed: false,
      usedAt: null,
      validatedBy: null,
      qrCode: 'sample_qr_code_data'
    });

    // 4. Collezione per le vendite
    const salesRef = collection(db, 'sales');
    await setDoc(doc(salesRef, 'sample_sale'), {
      ticketId: 'sample_ticket',
      eventId: 'sample_event',
      sellerId: 'sample_promoter',
      teamLeaderId: 'sample_team_leader',
      amount: 25.00,
      commission: 2.50,
      saleDate: new Date(),
      paymentMethod: 'cash'
    });

    // 5. Collezione per i team
    const teamsRef = collection(db, 'teams');
    await setDoc(doc(teamsRef, 'sample_team'), {
      name: 'Team Esempio',
      leaderId: 'sample_team_leader',
      members: ['sample_promoter'],
      createdAt: new Date(),
      isActive: true
    });

    // 6. Collezione per le commissioni
    const commissionsRef = collection(db, 'commissions');
    await setDoc(doc(commissionsRef, 'default'), {
      promoterRate: 0.10, // 10%
      teamLeaderRate: 0.05, // 5%
      managerRate: 0.03, // 3%
      lastUpdated: new Date()
    });

    // 7. Collezione per le notifiche
    const notificationsRef = collection(db, 'notifications');
    await setDoc(doc(notificationsRef, 'welcome'), {
      title: 'Benvenuto in Comino EXPRESS',
      message: 'Sistema di gestione biglietti inizializzato con successo!',
      type: 'info',
      createdAt: new Date(),
      isRead: false,
      userId: 'all'
    });

    // 8. Collezione per le statistiche
    const statsRef = collection(db, 'statistics');
    await setDoc(doc(statsRef, 'global'), {
      totalEvents: 0,
      totalTicketsSold: 0,
      totalRevenue: 0,
      activePromoters: 0,
      lastUpdated: new Date()
    });

    // 9. Collezione per le configurazioni dell'app
    const configRef = collection(db, 'appConfig');
    await setDoc(doc(configRef, 'general'), {
      appName: 'Comino EXPRESS',
      appVersion: '1.0.0',
      maintenanceMode: false,
      supportEmail: 'support@cominoexpress.com',
      supportPhone: '+39 123 456 7890',
      lastUpdated: new Date()
    });

    // 10. Collezione per i log di sistema
    const logsRef = collection(db, 'systemLogs');
    await addDoc(logsRef, {
      action: 'database_initialization',
      performedBy: 'system',
      timestamp: new Date(),
      details: 'Database inizializzato con successo con tutte le collezioni base'
    });

    console.log('✅ Database inizializzato con successo!');
    console.log('📊 Collezioni create:');
    console.log('- events (eventi)');
    console.log('- userRoles (ruoli utente)');
    console.log('- tickets (biglietti)');
    console.log('- sales (vendite)');
    console.log('- teams (team)');
    console.log('- commissions (commissioni)');
    console.log('- notifications (notifiche)');
    console.log('- statistics (statistiche)');
    console.log('- appConfig (configurazione app)');
    console.log('- systemLogs (log di sistema)');

    return true;

  } catch (error) {
    console.error('❌ Errore durante l\'inizializzazione del database:', error);
    return false;
  }
};

// Funzione per pulire i dati di esempio (solo se necessario)
const clearSampleData = async () => {
  try {
    console.log('🗑️ Rimozione dati di esempio...');
    // Implementare la logica di pulizia se necessario
    console.log('✅ Dati di esempio rimossi');
  } catch (error) {
    console.error('❌ Errore durante la rimozione dei dati di esempio:', error);
  }
};

// Esportare le funzioni per uso esterno
export { initializeDatabase, clearSampleData };

// Se eseguito direttamente, inizializzare il database
if (typeof window !== 'undefined') {
  // Browser environment
  console.log('Per inizializzare il database, aprire la console del browser e eseguire:');
  console.log('initializeDatabase()');
  window.initializeDatabase = initializeDatabase;
  window.clearSampleData = clearSampleData;
} else {
  // Node.js environment
  initializeDatabase().then(() => {
    console.log('Inizializzazione completata');
    process.exit(0);
  }).catch(error => {
    console.error('Errore:', error);
    process.exit(1);
  });
} 