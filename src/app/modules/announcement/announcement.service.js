export class AnnouncementService {

    constructor(FirebaseService){
        this.firebaseService = FirebaseService;
    }

    saveAnnouncement(annoucment){
        let user = this.firebaseService.auth.currentUser;
        return this.firebaseService.ref.child('announcements').push({
            user: user.uid,
            title: annoucment.title,
            description: annoucment.description,
            visibility: annoucment.visibility
        })
    }

}