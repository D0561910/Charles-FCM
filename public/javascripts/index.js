firebase.initializeApp({
  apiKey: "AIzaSyAVmRUKbrbiJZ5ufYPr2Hi1Qgzyyw4sj8E",
  authDomain: "charles-fcm.firebaseapp.com",
  projectId: "charles-fcm",
  storageBucket: "charles-fcm.appspot.com",
  messagingSenderId: "785942729331",
  appId: "1:785942729331:web:43958a83636eabb7db1006",
  measurementId: "G-MJ7THHY1N4",
});

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  //   console.log("Message received. ", payload);
  // Update the UI to include the received message.
  new Notification(payload.notification.title, payload.notification);
});

// obtain messaging class from Firebase
// const messaging = firebase.message();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then((registration) => {
      messaging.useServiceWorker(registration);
      // request notification permission and get token
      console.log("Registration successful, scope is:", registration.scope);
      //TODO: ask For Permission To Receive Notifications
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}
