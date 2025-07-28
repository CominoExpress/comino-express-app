# 🚀 Istruzioni di Setup - Comino EXPRESS

## Guida Completa per l'Installazione e Configurazione

### 📋 Prerequisiti

1. **Node.js** (versione 16 o superiore)
2. **Git** installato
3. **Account Firebase** (già configurato)
4. **Editor di codice** (VS Code consigliato)

### 🔧 Setup Iniziale

#### 1. Clone del Repository
```bash
git clone https://github.com/CominoExpress/comino-express-app.git
cd comino-express-app
```

#### 2. Installazione Dipendenze
```bash
npm install
```

#### 3. Verifica Configurazione Firebase
Il file `src/firebase/config.js` è già configurato con:
- **Project ID**: `comino-express-app`
- **Database**: Firestore
- **Auth**: Firebase Authentication

### 🗄️ Inizializzazione Database

**IMPORTANTE**: Eseguire una sola volta dopo il primo setup!

#### Metodo 1: Tramite Browser (Consigliato)
1. Avvia l'applicazione:
   ```bash
   npm start
   ```
2. Apri il browser su `http://localhost:3000`
3. Apri la Console del Browser (F12)
4. Esegui il comando:
   ```javascript
   initializeDatabase()
   ```
5. Attendi il messaggio di conferma: `✅ Database inizializzato con successo!`

#### Metodo 2: Tramite Node.js
```bash
node src/scripts/initializeDatabase.js
```

### 📊 Collezioni Create Automaticamente

Lo script creerà le seguenti collezioni nel database:

1. **events** - Gestione eventi
2. **userRoles** - Ruoli e permessi
3. **tickets** - Biglietti venduti
4. **sales** - Vendite e commissioni
5. **teams** - Team di promoter
6. **commissions** - Configurazione commissioni
7. **notifications** - Sistema notifiche
8. **statistics** - Statistiche globali
9. **appConfig** - Configurazione applicazione
10. **systemLogs** - Log di sistema

### 👥 Creazione Primo Utente Admin

Dopo l'inizializzazione del database:

1. Avvia l'app: `npm start`
2. Vai su `http://localhost:3000`
3. Registra il primo utente (diventerà automaticamente Admin)
4. Configura gli altri utenti dal pannello Admin

### 🚀 Avvio dell'Applicazione

```bash
npm start
```

L'app sarà disponibile su: `http://localhost:3000`

### 🏗️ Build di Produzione

```bash
npm run build
```

### 📱 Setup Mobile (Opzionale)

#### Android
```bash
npm run build
npx cap add android
npx cap copy
npx cap open android
```

#### iOS
```bash
npm run build
npx cap add ios
npx cap copy
npx cap open ios
```

### 🔍 Verifica Setup

#### Checklist Post-Installazione:
- [ ] App si avvia senza errori
- [ ] Database inizializzato correttamente
- [ ] Login/registrazione funzionante
- [ ] Dashboard caricate correttamente
- [ ] QR Code generator/scanner funzionante

#### Test Rapido:
1. Registra un utente Admin
2. Crea un evento di test
3. Vendi un biglietto
4. Valida il biglietto tramite QR

### 🆘 Risoluzione Problemi

#### Errore Firebase
```bash
# Verifica le credenziali in src/firebase/config.js
# Assicurati che il progetto Firebase sia attivo
```

#### Errore Dipendenze
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Database non Inizializzato
```bash
# Riesegui lo script di inizializzazione
node src/scripts/initializeDatabase.js
```

### 📞 Supporto

- **Email**: support@cominoexpress.com
- **GitHub Issues**: [Apri un Issue](https://github.com/CominoExpress/comino-express-app/issues)

---

## 🎯 Configurazione Avanzata

### Personalizzazione Email
Modifica `src/config/emailConfig.js` per configurare il servizio email.

### Personalizzazione Commissioni
Le commissioni di default sono:
- Promoter: 10%
- Team Leader: 5%
- Manager: 3%

Modificabili dal pannello Admin.

### Configurazione WhatsApp
Per abilitare notifiche WhatsApp, configura `src/services/WhatsAppService.js`.

---

**Buon lavoro con Comino EXPRESS! 🎉** 