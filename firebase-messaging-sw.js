importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js');


var firebaseConfig = {
    apiKey: "AIzaSyDvdQzQokGNEwS_OYMSNKbZp1lzOCivm9A",
    authDomain: "apd-tts.firebaseapp.com",
    databaseURL: "https://apd-tts.firebaseio.com",
    projectId: "apd-tts",
    storageBucket: "apd-tts.appspot.com",
    messagingSenderId: "713127444861",
    appId: "1:713127444861:web:b86d2d41e2a5d336e5cc14",
    measurementId: "G-HE5VWR73TX"
  };

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BAWf0uwbIbXttAI4mXq5YZjqX7tlkWN7bDkfxYM7wRYp_KcN_jtMzybVerVu_31drVA30ZKBywjjtN15WBhqgiM");

messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
  console.log('soda notificationclick')
});