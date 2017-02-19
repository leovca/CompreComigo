var admin = require('firebase-admin');
var Geofire = require('geofire');

var serviceAccount = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://paguecomigo.firebaseio.com"
});

var database = admin.database();

var geo =  new Geofire(database.ref().child('geofire'));


database.ref("announcements").on('child_added', function(snapshot, prevChildKey){

    var annoucement = snapshot.val();

    geo.get(annoucement.user).then(function(userPointer){
        geo.query({
            center:userPointer,
            radius: 10
        }).on('key_entered',(outherUser)=>{
            console.log(annoucement.user, outherUser);
            if(annoucement.user != outherUser) {
                database.ref('users_invites').child(outherUser).child(snapshot.key).set({
                    type: 'near',
                    event: snapshot.key
                })
            }
        })
    });

});