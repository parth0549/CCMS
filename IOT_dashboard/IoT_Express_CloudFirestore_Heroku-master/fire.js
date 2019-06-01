var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {
  apiKey: "AIzaSyCFu1QdDrragtqtLbirAlcZlz98rpEZKXs",
  authDomain: "ccms-db.firebaseapp.com",
  databaseURL: "https://ccms-db.firebaseio.com",
  projectId: "ccms-db",
  storageBucket: "ccms-db.appspot.com",
  messagingSenderId: "1045497590588"
};
const fire = firebase.initializeApp(config);
module.exports = fire;