
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBpEtT0RPj_itob4saxyPtugMEi8IlUMk0",
    authDomain: "watch-the-room.firebaseapp.com",
    databaseURL: "https://watch-the-room-default-rtdb.firebaseio.com",
    projectId: "watch-the-room",
    storageBucket: "watch-the-room.appspot.com",
    messagingSenderId: "349713979413",
    appId: "1:349713979413:web:80f2acf7bd7ceed63cd61c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
