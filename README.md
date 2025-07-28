# Comino EXPRESS - Sistema di Gestione Biglietti

Sistema completo di gestione eventi e vendita biglietti per Comino EXPRESS.

## Caratteristiche

- **Gestione Eventi**: Creazione e gestione completa degli eventi
- **Vendita Biglietti**: Sistema di vendita con QR code unici
- **Gestione Team**: Organizzazione di promoter e team leader
- **Statistiche e Report**: Dashboard dettagliate per vendite e performance
- **Validazione Biglietti**: Sistema di validazione tramite QR code
- **Multi-ruolo**: Supporto per Admin, Manager, Team Leader, Promoter e Validator

## Tecnologie Utilizzate

- **Frontend**: React 18, React Router DOM
- **Backend**: Firebase (Firestore, Authentication)
- **UI/UX**: CSS3, React Icons
- **QR Code**: qrcode.react, html5-qrcode
- **PDF Generation**: jsPDF
- **Email Service**: EmailJS
- **Mobile**: Capacitor per deployment mobile

## Installazione

### Prerequisiti

- Node.js (versione 16 o superiore)
- npm o yarn
- Account Firebase configurato

### Setup del Progetto

1. **Clona il repository**
   ```bash
   git clone https://github.com/CominoExpress/comino-express-app.git
   cd comino-express-app
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Configurazione Firebase**
   - Il file `src/firebase/config.js` è già configurato con il database Comino EXPRESS
   - Se necessario, aggiorna le credenziali Firebase

4. **Inizializza il database**
   ```bash
   # Esegui lo script di inizializzazione (una sola volta)
   node src/scripts/initializeDatabase.js
   ```
   
   Oppure dalla console del browser dopo aver avviato l'app:
   ```javascript
   initializeDatabase()
   ```

5. **Avvia l'applicazione**
   ```bash
   npm start
   ```

L'applicazione sarà disponibile su [http://localhost:3000](http://localhost:3000)

## Script Disponibili

### `npm start`
Avvia l'app in modalità sviluppo.

### `npm run build`
Crea la build di produzione nella cartella `build`.

### `npm test`
Avvia i test in modalità interattiva.

## Struttura del Progetto

```
src/
├── components/          # Componenti React
│   ├── admin/          # Pannelli amministrazione
│   ├── auth/           # Autenticazione
│   ├── dashboard/      # Dashboard per i vari ruoli
│   ├── events/         # Gestione eventi
│   ├── tickets/        # Gestione biglietti
│   └── ...
├── contexts/           # Context API per state management
├── firebase/           # Configurazione Firebase
├── services/           # Servizi per API e business logic
├── scripts/            # Script di utilità (es. init database)
└── styles/             # Stili CSS
```

## Ruoli e Permessi

- **Admin**: Accesso completo al sistema
- **Manager**: Gestione eventi e visualizzazione report
- **Team Leader**: Gestione team di promoter
- **Promoter**: Vendita biglietti e visualizzazione vendite personali
- **Validator**: Validazione biglietti agli eventi

## Deployment

### Web Deployment
```bash
npm run build
# Deploy della cartella build sul tuo hosting preferito
```

### Mobile Deployment (Capacitor)
```bash
npm run build
npx cap add android
npx cap add ios
npx cap copy
npx cap open android  # oppure ios
```

## Supporto

Per supporto tecnico, contattare:
- **Email**: support@cominoexpress.com
- **Repository**: [GitHub Issues](https://github.com/CominoExpress/comino-express-app/issues)

## Licenza

Proprietario di Comino EXPRESS. Tutti i diritti riservati.

---

**Comino EXPRESS** - Sistema di Gestione Biglietti Professionale
