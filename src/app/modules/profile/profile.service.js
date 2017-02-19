export class ProfileService {

    constructor(FirebaseService, $q){
        this.firebaseService = FirebaseService;
        this.$q = $q;
    }

    getUserProfile(){
        let defer = this.$q.defer();
        defer.resolve(this.firebaseService.auth.currentUser);
        return defer.promise;
    }


}