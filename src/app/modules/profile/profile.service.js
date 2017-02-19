export class ProfileService {

    constructor(FirebaseService, $q) {
        this.firebaseService = FirebaseService;
        this.$q = $q;
    }

    getNeighbhoods(callback){
        this.getUserProfile().then((user)=>{
            this.firebaseService.geofire.query({
                center: [user.geo[0], user.geo[1]],
                radius: 10
            }).on('key_entered',(data)=>{
                this.firebaseService.geofire.get(data).then((position)=>{
                    if(callback) { callback(position) }
                })
            })
        })
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
                            name: userData.name,
                            photoURL: 'https://yt3.ggpht.com/-oSAbz46-1qw/AAAAAAAAAAI/AAAAAAAAAAA/UzFF1NAQRSo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
                            address : userData.address,
                            lat: userData.pointer.lat,
                            lng: userData.pointer.lng,
                        });

                    this.firebaseService.geofire.set(user.uid,[userData.pointer.lat, userData.pointer.lng])
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

            }).then(() => {
                this.firebaseService.geofire.get(currentUser.uid).then(function(position){
                    currentUser.geo = position;
                    defer.resolve(currentUser);
                });
            });

        return defer.promise;
    }


}