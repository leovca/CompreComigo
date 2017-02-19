import './announcements.users.component.css';

export const AnnouncementUsersComponent  = {
    template: require('./announcements.users.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementUsersComponent {
        constructor(AnnouncementService) {
            'ngInject';
            this.announcementService = AnnouncementService;
        }

        $onInit() {
            this.chatUsers = [{
                image: 'https://s-media-cache-ak0.pinimg.com/736x/20/45/08/2045085b168394d854b2477b3fbca751.jpg',
                name: 'Peppo Pig'
            },
            {
                image: 'http://vignette2.wikia.nocookie.net/parody/images/9/9a/STASC545-Peppa-Pig-Candy-Cat-Cutout_3.png/revision/latest?cb=20140423150749',
                name: 'Candy Cat'
            },
            {
                image: 'http://orig03.deviantart.net/f3d1/f/2015/078/0/c/adventure_time_jake___animation__by_demoniumangel-d8mcmsm.gif',
                name: 'Jake'
            }];
        }
    }
};