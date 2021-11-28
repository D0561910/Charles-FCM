// "use strict";

// importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js");

// const FIREBASE_CONFIG = {
//   apiKey: "AIzaSyAVmRUKbrbiJZ5ufYPr2Hi1Qgzyyw4sj8E",
//   authDomain: "charles-fcm.firebaseapp.com",
//   projectId: "charles-fcm",
//   storageBucket: "charles-fcm.appspot.com",
//   messagingSenderId: "785942729331",
//   appId: "1:785942729331:web:43958a83636eabb7db1006",
//   measurementId: "G-MJ7THHY1N4",
// };

// // Initialize the firebase in the service worker.
// firebase.initializeApp(FIREBASE_CONFIG);

// self.addEventListener("push", function (event) {
//   var data = event.data.json();

//   const title = data.Title;
//   data.Data.actions = data.Actions;
//   const options = {
//     body: data.Message,
//     data: data.Data,
//   };
//   event.waitUntil(self.registration.showNotification(title, options));
// });

// self.addEventListener("notificationclick", function (event) {});

// self.addEventListener("notificationclose", function (event) {});

// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup


/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');
 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 
 **/

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically
// and you should use data messages for custom notifications.
// For more info see:
// https://firebase.google.com/docs/cloud-messaging/concept-options
importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAVmRUKbrbiJZ5ufYPr2Hi1Qgzyyw4sj8E",
  authDomain: "charles-fcm.firebaseapp.com",
  projectId: "charles-fcm",
  storageBucket: "charles-fcm.appspot.com",
  messagingSenderId: "785942729331",
  appId: "1:785942729331:web:43958a83636eabb7db1006",
  measurementId: "G-MJ7THHY1N4",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
