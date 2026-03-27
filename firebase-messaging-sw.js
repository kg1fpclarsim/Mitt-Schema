// Importera Firebase-bibliotek för bakgrundsskript (kompatibilitetsversioner)
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// Samma konfiguration som i era andra filer
const firebaseConfig = {
    apiKey: "AIzaSy" + "AZg6jb_pABy" + "uOzpJjNXhx" + "xLghG1Y85zSg",
    authDomain: "schemalplanerare.firebaseapp.com",
    projectId: "schemalplanerare",
    storageBucket: "schemalplanerare.firebasestorage.app",
    messagingSenderId: "718952471580",
    appId: "1:718952471580:web:010aa44281f956980493d9",
    measurementId: "G-P73XYNQP91"
};

// Starta Firebase i bakgrunden
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Denna kod körs när telefonen får en notis och appen ligger i bakgrunden
messaging.onBackgroundMessage((payload) => {
    console.log('Fick bakgrundsmeddelande: ', payload);
    
    const notificationTitle = payload.notification.title || 'Nytt Schema';
    const notificationOptions = {
        body: payload.notification.body || 'Schemat har uppdaterats.',
        icon: '/ikon.png', // Samma logga som vi skapade tidigare!
        badge: '/ikon.png',
        vibrate: [200, 100, 200]
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
