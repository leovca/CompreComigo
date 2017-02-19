import './profile.edit.component.css';

export const ProfileEditComponent  = {
    template: require('./profile.edit.component.html'),
    controllerAs: 'vm',
    controller: class ProfileEditComponent {


        constructor(ProfileService, NgMap) {
            'ngInject';
            this.profileService = ProfileService;
            this.map = NgMap.getMap();
        }



        $onInit() {
            this.profileService.getUserProfile().then(
                (user) => {
                    this.user = {
                        name: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        address: user.details.address || '',
                        pointer: {
                            lat: user.details.lat || null,
                            lng: user.details.lng || null
                        }
                    };

                    this.map.then((map)=>{
                        this.myMap = map;


                        if(this.user.pointer && this.user.pointer.lat){
                            this.myPosition = [this.user.pointer.lat, this.user.pointer.lng]
                        } else {
                            this.myPosition = 'current'
                        }
                    })
                }
            );
        }


        save() {
            this.profileService.updateProfile({
                name: this.user.name,
                photoURL: 'https://yt3.ggpht.com/-oSAbz46-1qw/AAAAAAAAAAI/AAAAAAAAAAA/UzFF1NAQRSo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
                address: this.user.address,
                pointer: {
                    lat: this.myMap.markers.pointer.position.lat(),
                    lng: this.myMap.markers.pointer.position.lng()
                }
            });
        }
    }
};