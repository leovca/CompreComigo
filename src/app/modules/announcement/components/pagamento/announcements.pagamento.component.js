import './announcements.pagamento.component.css';

export const AnnouncementPagamentoComponent  = {
    template: require('./announcements.pagamento.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementPagamentoComponent {
        constructor(AnnouncementService) {
            'ngInject';
            this.announcementService = AnnouncementService;
        }

        $onInit() {
            this.usersPayment = [{
                image: 'https://s-media-cache-ak0.pinimg.com/736x/20/45/08/2045085b168394d854b2477b3fbca751.jpg',
                name: 'Peppo Pig',
                totalPayment: ''
            },
            {
                image: 'http://vignette2.wikia.nocookie.net/parody/images/9/9a/STASC545-Peppa-Pig-Candy-Cat-Cutout_3.png/revision/latest?cb=20140423150749',
                name: 'Candy Cat',
                totalPayment: ''
            },
            {
                image: 'http://orig03.deviantart.net/f3d1/f/2015/078/0/c/adventure_time_jake___animation__by_demoniumangel-d8mcmsm.gif',
                name: 'Jake',
                totalPayment: ''
            }];
        }
    }
};