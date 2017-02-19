import './announcements.chat.component.css';

export const AnnouncementChatComponent  = {
    template: require('./announcements.chat.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementChatComponent {
        constructor(AnnouncementService) {
            'ngInject';
            this.announcementService = AnnouncementService;
        }

        $onInit() {
            this.messages = [{
                avatar: 'https://s-media-cache-ak0.pinimg.com/736x/20/45/08/2045085b168394d854b2477b3fbca751.jpg',
                name: 'Peppo Pig',
                text: 'efetuar compra no Netshoes com frete grátis'
            },
            {
                avatar: 'http://vignette2.wikia.nocookie.net/parody/images/9/9a/STASC545-Peppa-Pig-Candy-Cat-Cutout_3.png/revision/latest?cb=20140423150749',
                name: 'Candy Cat',
                text: 'ajudar no pagamento do presente do João'
            },
            {
                avatar: 'http://orig03.deviantart.net/f3d1/f/2015/078/0/c/adventure_time_jake___animation__by_demoniumangel-d8mcmsm.gif',
                name: 'Jake',
                text: 'comprar TV Samsung com 10% de desconto'
            }];

        }
    }
};