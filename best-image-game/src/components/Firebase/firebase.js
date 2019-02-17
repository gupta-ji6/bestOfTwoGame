import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyDYxEGZRs-ecZOd36wck6DGx6s6biGZ_B4",
    authDomain: "bestoftwogame.firebaseapp.com",
    databaseURL: "https://bestoftwogame.firebaseio.com",
    projectId: "bestoftwogame",
    storageBucket: "bestoftwogame.appspot.com",
    messagingSenderId: "600976603431"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.database();

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
  }
}

export default Firebase;