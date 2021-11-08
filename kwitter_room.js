const firebaseConfig = {
      apiKey: "AIzaSyAFUzf3PH--X7IXNK1y75e5RveVVp8e7Gk",
      authDomain: "kwitter-a3452.firebaseapp.com",
      databaseURL: "https://kwitter-a3452-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3452",
      storageBucket: "kwitter-a3452.appspot.com",
      messagingSenderId: "261141942291",
      appId: "1:261141942291:web:50089a0e231444aa90afe6"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row ="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_room.html";
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}