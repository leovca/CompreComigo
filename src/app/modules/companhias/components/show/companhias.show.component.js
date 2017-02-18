import './companhias.show.component.css';

export const CompanhiaShowComponent  = {
    template: require('./companhias.show.component.html'),
    controllerAs: 'vm',
    controller: class CompanhiaShowComponent {
        constructor(CompanhiasService) {
            'ngInject';
            this.companhiasService = CompanhiasService;
        }

        $onInit() {
            this.companhiasService.getCompanhias()
                .then((companhias) => {
                    this.companhias = companhias.data;
                })
        }
    }
};