import './companhias.list.component.css';

export const CompanhiasListComponent  = {
    template: require('./companhias.list.component.html'),
    controllerAs: 'vm',
    controller: class CompanhiasListComponent {
        constructor(CompanhiasService, $state) {
            'ngInject';
            this.companhiasService = CompanhiasService;
            this.$state = $state;
        }

        $onInit() {
            this.companhiasService.getCompanhias()
                .then((companhias) => {
                    this.companhias = companhias.data;
                })
        }

        selecioneCampanhia(idCompanhia){
            this.$state.go('modules.companhias.show.main', {id: idCompanhia})
        }
    }
};