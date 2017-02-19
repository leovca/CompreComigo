export class AnnouncementService {

    constructor(FirebaseService, $q) {
        this.firebaseService = FirebaseService;
        this.$q = $q;
    }

    saveAnnouncement(annoucment) {
        let user = this.firebaseService.auth.currentUser;
        return this.firebaseService.ref.child('announcements').push({
            user: user.uid,
            title: annoucment.title,
            description: annoucment.description,
            visibility: annoucment.visibility
        }).then((annoucment) => {
            this.join(annoucment)
        })
    }

    join(announcement) {
        let user = this.firebaseService.auth.currentUser;

        this.firebaseService.ref
            .child('user_announcement')
            .child(user.uid)
            .push(announcement.key);

        return this.firebaseService.ref
            .child('announcements')
            .child(announcement.key)
            .child('users')
            .child(user.uid)
            .child('accept').set({accept: true})
    }


    get(id) {
        let defer = this.$q.defer();
        this.firebaseService.ref
            .child('announcements')
            .child(id)
            .once('value', (announcement) => {
                let announcementTemp = announcement.val();
                announcementTemp.key = announcement.key;
                defer.resolve(announcementTemp)
            });

        return defer.promise;
    }

    getUsers(id, cb) {
        let user = this.firebaseService.auth.currentUser;

        this.firebaseService.ref
            .child('announcements')
            .child(id)
            .child('users')
            .once('value', (announcement) => {
                let usersId = announcement.val();
                console.log(usersId);
                angular.forEach(usersId, (value, key) => {
                    this.firebaseService.ref.child('users')
                        .child(key)
                        .once('value', (userData) => {
                            userData = userData.val();
                            userData.key = key;
                            userData.value = value.value && value.value.value || 0;
                            cb(userData)
                        })
                });
            });
    }

    setValue(eventId, userid, value) {
        let defer = this.$q.defer();

        this.firebaseService.ref
            .child('announcements')
            .child(eventId)
            .child('users')
            .child(userid)
            .child('value')
            .set({value: value})
            .then(() => {
                defer.resolve();
            });

        return defer.promise;
    }

    getMyGroups(callback){
        let user = this.firebaseService.auth.currentUser;
        this.firebaseService.ref
            .child('user_announcement')
            .child(user.uid)
            .once('value',(groups)=>{
              groups = groups.val();

              angular.forEach(groups, (value, key)=>{
                  this.get(value).then((announcement)=>{
                      this.firebaseService.ref
                          .child('users')
                          .child(announcement.user)
                          .once('value', (owner)=>{
                              announcement.user = owner.val();
                              callback(announcement);
                          })
                  })
              })
            });
    }

    getMyInvintesStream(callback) {
        let user = this.firebaseService.auth.currentUser;


        this.firebaseService.ref.child("users_invites")
            .child(user.uid)
            .on('child_added', (snapshot, event_key) => {
                let invite = snapshot.val();
                this.firebaseService.ref.child('announcements')
                    .child(invite.event)
                    .once('value', (eventSnapshot) => {
                        let timeLineEvent = eventSnapshot.val();
                        this.firebaseService.ref.child('users').child(timeLineEvent.user)
                            .once('value', (userData) => {
                                timeLineEvent.type = snapshot.val().type;
                                timeLineEvent.user = userData.val();
                                timeLineEvent.key = eventSnapshot.key;
                                callback(timeLineEvent);
                            });

                    })
            })
    }

}