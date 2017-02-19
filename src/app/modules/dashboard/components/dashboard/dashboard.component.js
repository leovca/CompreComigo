import './dashboard.component.css';

export const DashboardComponent  = {
    template: require('./dashboard.component.html'),
    controllerAs: 'vm',
    controller: class DashboardComponent {
        constructor() {
            'ngInject';
        }

        $onInit() {
            this.announcements = [{
                photo: 'https://s-media-cache-ak0.pinimg.com/736x/20/45/08/2045085b168394d854b2477b3fbca751.jpg',
                userName: 'Peppo Pig',
                title: 'está procurando alguém para',
                message: 'efetuar compra no Netshoes com frete grátis'
            },
            {
                photo: 'http://vignette2.wikia.nocookie.net/parody/images/9/9a/STASC545-Peppa-Pig-Candy-Cat-Cutout_3.png/revision/latest?cb=20140423150749',
                userName: 'Candy Cat',
                title: 'esta procurando alguém para',
                message: 'ajudar no pagamento do presente do João'
            },
            {
                photo: 'http://orig03.deviantart.net/f3d1/f/2015/078/0/c/adventure_time_jake___animation__by_demoniumangel-d8mcmsm.gif',
                userName: 'Jake',
                title: 'te indicou para',
                message: 'comprar TV Samsung com 10% de desconto'
            }];
        }
    }
};