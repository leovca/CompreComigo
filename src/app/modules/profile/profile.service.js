export class ProfileService {

    constructor(FirebaseService, $q) {
        this.firebaseService = FirebaseService;
        this.$q = $q;
    }

    updateProfile(userData) {
        this.getUserProfile().then(
            (user) => {
                user.updateProfile({
                    displayName: userData.name,
                    photoURL: 'https://yt3.ggpht.com/-oSAbz46-1qw/AAAAAAAAAAI/AAAAAAAAAAA/UzFF1NAQRSo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
                }).then(() => {
                    this.firebaseService.ref
                        .child('users')
                        .child(user.uid).set({
                            address : userData.address,
                            lat: userData.pointer.lat,
                            lng: userData.pointer.lng,
                        });
                });
            });
    }

    getUserProfile() {
        let defer = this.$q.defer();

        let currentUser = this.firebaseService.auth.currentUser;

        this.firebaseService.ref.child('users')
            .child(currentUser.uid)
            .once('value', function(snap) {
                currentUser.details = snap.val() || {};
                defer.resolve(currentUser);
            });

        return defer.promise;
    }


}