import Firebase from 'firebase';
import firebaseConfig from '../../../config/firebase.json';

Firebase.initializeApp(firebaseConfig);

const ref = Firebase.database().ref();

export class FirebaseService {
    constructor() {
        this.ref = ref;
        this.auth = Firebase.auth();

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