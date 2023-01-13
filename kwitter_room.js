
var firebaseConfig = {
      apiKey: "AIzaSyD4IlRrlcYfrBuuYm3IM-i8qArtB2d8670",
      authDomain: "kwitter-f1186.firebaseapp.com",
      projectId: "kwitter-f1186",
      storageBucket: "kwitter-f1186.appspot.com",
      messagingSenderId: "27584039056",
      appId: "1:27584039056:web:4708fcf02dfcf6d2ab3015",
      measurementId: "G-GJL3HQ2VXQ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
