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

    getMyInvintesStream(callback){
        let user = this.firebaseService.auth.currentUser;


        this.firebaseService.ref.child("users_invites")
            .child(user.uid)
            .on('child_added', (snapshot, event_key) => {
                let invite = snapshot.val();
                this.firebaseService.ref.child('announcements')
                    .child(invite.event)
                    .once('value', (eventSnapshot)=>{
                        let timeLineEvent = eventSnapshot.val();
                        this.firebaseService.ref.child('users').
                            child(timeLineEvent.user)
                            .once('value', (userData)=>{
                                timeLineEvent.type = snapshot.val().type;
                                timeLineEvent.user = userData.val();
                                callback(timeLineEvent);
                            });

                    })
            })
    }

}