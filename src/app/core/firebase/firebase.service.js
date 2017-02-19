import Firebase from 'firebase';
import firebaseConfig from '../../../config/firebase.json';
import Geofire from 'geofire';

Firebase.initializeApp(firebaseConfig);

const ref = Firebase.database().ref();

export class FirebaseService {
    constructor() {
        this.ref = ref;
        this.auth = Firebase.auth();
        this.geofire = new Geofire(ref.child('geofire'));

        this.googleAuth = (cb, eCb) => {
            let provider = new Firebase.auth.GoogleAuthProvider();
            this.auth.signInWithPopup(provider).then(function (authData) {
                debugger;
                cb(authData);
            }).catch(function (error) {
                console.log('error', error);
                eCb(error);
            });
        }
    }
}