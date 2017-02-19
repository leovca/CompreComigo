import './announcements.groups.component';

export const AnnouncementGroupsComponent  = {
    template: require('./announcements.groups.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementGroupsComponent {
        constructor(AnnouncementService) {
            'ngInject';
            this.announcementService = AnnouncementService;
        }

        $onInit() {
            this.groups = [{
                photo: 'https://s-media-cache-ak0.pinimg.com/736x/20/45/08/2045085b168394d854b2477b3fbca751.jpg',
                ownerName: 'Peppo Pig',
                title: 'está procurando alguém para',
                message: 'efetuar compra no Netshoes com frete grátis'
            },
            {
                photo: 'http://vignette2.wikia.nocookie.net/parody/images/9/9a/STASC545-Peppa-Pig-Candy-Cat-Cutout_3.png/revision/latest?cb=20140423150749',
                ownerName: 'Candy Cat',
                title: 'esta procurando alguém para',
                message: 'ajudar no pagamento do presente do João'
            },
            {
                photo: 'http://orig03.deviantart.net/f3d1/f/2015/078/0/c/adventure_time_jake___animation__by_demoniumangel-d8mcmsm.gif',
                ownerName: 'Jake',
                title: 'te indicou para',
                message: 'comprar TV Samsung com 10% de desconto'
            }];
        }
    }
};